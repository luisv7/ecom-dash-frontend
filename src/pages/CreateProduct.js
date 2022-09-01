import { useState } from "react";
import { TextField, Box, Input } from "@mui/material";

const CreateProduct = ({createProducts}) => {
    const [newForm, setNewForm ] = useState({
        name: '',
        cost: '',
        price: '',
        stock: '',
        sku: '',
        category: '',
        image: '',
        size: '',
        color: '',
        brand: '',
        description: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setNewForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleCreate = () => {
        createProducts(newForm);
    }

    return (
        <>  
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem' }} >
                <h1 className="create-text">Create Product</h1>
            </Box>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleCreate}
            >
            <div className="create-form-container">
                    <TextField
                    required
                    type='text'
                    id="outlined-required"
                    label="Name"
                    name="name"
                    value={newForm.name}
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
                    value={newForm.cost}
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
                    value={newForm.price}
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
                    value={newForm.stock}
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
                    value={newForm.sku}
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
                    value={newForm.image}
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
                    value={newForm.size}
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
                    value={newForm.color}
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
                    value={newForm.brand}
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
                    value={newForm.category}
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
                    value={newForm.description}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                </div>
                <Box className="create-form-button">
                    <Input type="submit" value="Create Item" sx={{ backgroundColor: 'black', color: 'white', padding: '.3rem', cursor: 'pointer'}}/>
                </Box>
            </Box>
        </>
    )
}

export default CreateProduct;