import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/Menu';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Product from '../pages/Product';
import CreateProduct from '../pages/CreateProduct';
import UpdateProduct from '../pages/UpdateProduct';


const Main = () => {
    const [products , setProducts] = useState(null);

    const API_URL = 'http://localhost:3000/api/products';

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
    },[]);

    return (
        <main>
            <Menu />
            <Routes>
                <Route path='/' element={<Home products={products}/>}/>
                <Route path='/:id' element={<Product products={products}/>}/>
                <Route path='/dashboard' element={<Dashboard products={products}/>}/>
                <Route path='/products' element={<Products products={products} deleteProducts={deleteProducts} updateProduct={updateProduct}/>}/>
                <Route path='/create-product' element={<CreateProduct createProducts={createProducts}/>}/>
                <Route path='/update-product/:id' element={<UpdateProduct products={products} updateProduct={updateProduct}/>}/>
            </Routes>
        </main>
    )
}

export default Main;