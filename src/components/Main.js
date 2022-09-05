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

const Main = ({ user }) => {
    const [ products, setProducts ] = useState(null);

    const API_URL = 'http://localhost:3000/api/products';
  
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
            const response = await fetch(API_URL);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error)
    }
}

    const createProducts = async (product) => {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(product)
        });
        getProducts();
    }
    
    const updateProduct = async (id, product) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(product)
        })
        getProducts();
    }
    
    const deleteProducts = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            
            getProducts();

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProducts();
    },[])

    return (
        <main>

            <Routes>
                {/* Main Website */}
                <Route path='/' element={<Home products={products} />}/>
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
                                updateProduct={updateProduct}
                            />
                        </PrivateRoute>
                    }
                    />
                <Route 
                    path='/admin/settings' 
                    element={
                        <PrivateRoute user={user}>
                            <Settings/>
                        </PrivateRoute>
                    }
                    />
                <Route 
                    path='/admin/create-product' 
                    element={
                        <PrivateRoute user={user}>
                            <CreateProduct 
                                createProducts={createProducts}
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