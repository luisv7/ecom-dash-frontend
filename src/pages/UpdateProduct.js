import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField, Input } from "@mui/material";

const UpdateProduct = ({products, updateProduct}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products ? products.find(p => p._id === id) : null;

    const [ updateForm, setUpdateForm ] = useState({
        name: '',
        cost: '',
        price: '',
        stock: '',
        sku: '',
        description: '',
        category: '',
        image: '',
        size: '',
        color: '',
        brand: '',
    })

    const handleChange = (e) => {
        e.preventDefault();
        setUpdateForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateProduct(id, updateForm);
        navigate('/admin/products');
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const loaded = () => {
        return (
            <>  
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem' }} >
                <h1 className="create-text">Update Product</h1>
            </Box>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleUpdate}
            >
            <div className="create-form-container">
                    <TextField
                    required
                    type='text'
                    id="outlined-required"
                    label="Name"
                    name="name"
                    value={updateForm.name}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="number"
                    id="outlined-number"
                    label="Cost"
                    name="cost"
                    value={updateForm.cost}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    required
                    type="number"
                    id="outlined-number"
                    label="Price"
                    name="price"
                    value={updateForm.price}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="number"
                    id="outlined-number"
                    label="Stock"
                    name="stock"
                    value={updateForm.stock}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="text"
                    id="outlined-number"
                    label="SKU"
                    name="sku"
                    value={updateForm.sku}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="text"
                    id="outlined-number"
                    label="Image"
                    name="image"
                    value={updateForm.image}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="text"
                    id="outlined-number"
                    label="Size"
                    name="size"
                    value={updateForm.size}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="text"
                    id="outlined-number"
                    label="Color"
                    name="color"
                    value={updateForm.color}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="text"
                    id="outlined-number"
                    label="Brand"
                    name="brand"
                    value={updateForm.brand}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    type="text"
                    id="outlined-number"
                    label="Category"
                    name="category"
                    value={updateForm.category}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                    multiline
                    id="outlined-multiline-flexible"
                    label="Description"
                    name="description"
                    maxRows={5}
                    value={updateForm.description}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                </div>
                <Box className="create-form-button">
                    <Input type="submit" value="Update Item" sx={{ backgroundColor: 'black', color: 'white', padding: '.3rem', cursor: 'pointer'}}/>
                </Box>
            </Box>
        </>
        )
    }

    useEffect(() => {
        if(product){
            setUpdateForm({
                name: product.name,
                cost: product.cost,
                price: product.price,
                stock: product.stock,
                sku: product.sku,
                description: product.description,
                category: product.category,
                image: product.image,
                size: product.size,
                color: product.color,
                brand: product.brand,
            })
        }
    }, [product])

    return (
        <>
            { product ? loaded() : loading() }
        </>
    )
}

export default UpdateProduct;