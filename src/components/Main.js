import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Store Pages
import Home from '../store_pages/Home';
import Product from '../store_pages/Product';
import Admin from '../pages/Admin';

//Admin Pages
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import CreateProduct from '../pages/CreateProduct';
import UpdateProduct from '../pages/UpdateProduct';
import Settings from '../pages/Settings';

const Main = ({ user, profiles, createProfile, getProfiles }) => {
    const [ products, setProducts ] = useState(null);
    // const [ publicProducts, setPublicProducts ] = useState(null);

    const API_URL = 'https://ecom-dash-backend.onrender.com/api/products';
    // const API_URL = 'http://localhost:3001/api/public';
  
    const PrivateRoute = ({ children, user }) => {
        if(user){
        return children
        }else{
        return <Navigate to="/"/>
        }
    }

    // PRODUCTS
    const getProducts = async () => {
        try {
            const token = await user.getIdToken();
            const response = await fetch(API_URL,{
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setProducts(data);
        }catch (error) {
                console.log(error)
        }   
    }

    const createProducts = async (product) => {
        try {
            const token = await user.getIdToken();
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(product)
            });
        } catch (error) {
            console.log(error)
        }
        getProducts();
    }
    
    const updateProduct = async (id, product) => {
        try {
            const token = await user.getIdToken();
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(product)
            })
        } catch (error) {
            console.log(error)
        }
        getProducts();
    }
    
    const deleteProducts = async (id) => {
        try {
            const token = await user.getIdToken();
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            
            getProducts();

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    },[])

    return (
        <main>
            <Routes>
                {/* Main Website */}
                <Route path='/' element={<Home products={products} profiles={profiles} user={user} getProfiles={getProfiles}/>}/>
                <Route path='/:id' element={<Product products={products}/>}/>
                <Route path='/admin' element={<Admin user={user}/>}/>

                {/* Admin Panel */}
                <Route 
                    path='/admin/dashboard' 
                    element={
                        <PrivateRoute user={user}>
                            <Dashboard products={products}/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path='/admin/products' 
                    element={
                        <PrivateRoute user={user}>
                            <Products 
                                products={products} 
                                deleteProducts={deleteProducts}
                            />
                        </PrivateRoute>
                    }
                    />
                <Route 
                    path='/admin/settings' 
                    element={
                        <PrivateRoute user={user}>
                            <Settings user={user} profiles={profiles} createProfile={createProfile}/>
                        </PrivateRoute>
                    }
                    />
                <Route 
                    path='/admin/create-product' 
                    element={
                        <PrivateRoute user={user}>
                            <CreateProduct 
                                createProducts={createProducts}
                                user={user}
                            />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path='/admin/update-product/:id'
                    element={
                        <PrivateRoute user={user}>
                            <UpdateProduct 
                                products={products} 
                                updateProduct={updateProduct}
                            />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </main>
    )
}

export default Main;