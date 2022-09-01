import { Link } from "react-router-dom";
import { Box, Paper } from '@mui/material';

const Home = ({products}) => {

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const loaded = () => {
        return (
            <>
            {
                products.map(({ _id, name, price, stock, image }) => {
                    return (
                        <Box key={_id} className='item-container'>
                            <Paper>
                                <Link to={`/${_id}`}>
                                    <img src={image} className='product-image' alt={name} />
                                </Link>
                                <div className="product-info">
                                    {
                                        stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>
                                    }
                                    <Link to={`/${_id}`} className='title'>
                                        {name} 
                                    </Link>
                                    <div className="price-stock">
                                        <h3>${price}</h3>
                                    </div>
                                </div>
                            </Paper>
                        </Box>
                    )
                })
            }
            </>
        )
    }

    return(
        <>
            <div className="main-container">
                <Box className="home-banner-container">
                    <img src="https://i.pinimg.com/originals/d0/b6/5c/d0b65c5c53657f897af6862c44d8a5e2.jpg" alt="banner" className="home-banner-img"/>
                </Box>
                <Box className="products-container">
                    { products ? loaded() : loading() }
                </Box>
            </div>
        </>
    )
}

export default Home;