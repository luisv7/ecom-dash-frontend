import { useParams } from "react-router-dom";
import { Box} from "@mui/material";


const Product = ({products}) => {

    const { id } = useParams();
    const product = products ? products.find(p => p._id === id) : null;

    const loading = () => {
        <h1>Loading...</h1>
    }

    const loaded = () => {
        return (
            <>
                <Box className="product-page-container">
                    <img src={product.image} alt={product.name} className='product-page-img' />
                    <div className="product-page-info">
                        <h1 className="product-page-title">{product.name}</h1>
                        <p><span>SKU: </span>{product.sku}</p>
                        <p><span>Brand: </span>{product.brand}</p>
                        {
                            product.size !== '' ? <p><span>Size: </span>{product.size}</p> 
                            : null
                        }
                        <p><span>Price: </span>${product.price}</p>
                    </div>
                    { product.description !== '' ? <p><span>Description: </span> { product.description }</p> : null}
                </Box>
            </>
        )

    }

    return (
        <>
            { products ? loaded() : loading() }
        </>
    )
}

export default Product;