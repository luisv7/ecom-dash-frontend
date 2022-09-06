import { Link } from "react-router-dom";
import { Box, Paper, Button } from '@mui/material';

const Home = ({products, user, profiles = []}) => {
    
    const main = profiles.find((el) => {
        return el.uid === user.uid
    })

    const loading = () => {
        return (
            <Box className="public-home-container">
                <Box className="home-info-container">
                    <Paper sx={{p: '2rem', width: '300px'}}>
                        <h2>Start an online business</h2>
                        <p>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
                    </Paper>
                    <Paper sx={{p: '2rem', width: '300px'}}>
                        <h2>Move your business online</h2>
                        <p>Turn your retail store into an online store and keep serving customers without missing a beat.</p>
                    </Paper>
                </Box>
                <Box className="home-info-container">
                    <Link to='/admin'>
                        <Button variant="contained">Get Started</Button>
                    </Link>
                </Box>
            </Box>
        )
    }

    const loaded = () => {
        return (
            <>
            {
                products.map(({ _id, name, price, stock, image,size }) => {
                    return (
                        <Box key={_id} className='item-container'>
                            <Paper>
                                <Link to={`/${_id}`}>
                                    <img src={image} className='product-image' alt={name} />
                                </Link>
                                <div className="product-info">
                                    <div className="stock-info">
                                        {
                                            stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>
                                        }
                                        {
                                            size !== '' ? <p>| Size: {size}</p> : null
                                        }
                                    </div>
                                    
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
                    <Link to='/'>
                        <img src={ main ? main.homeBanner : "https://img.freepik.com/premium-vector/create-your-own-website-flat-vector-neon-illustration-web-banner-with-text-button_509478-247.jpg?w=2000"} alt="create your own website main banner" className="home-banner-img"/>
                    </Link>
                </Box>
                <Box className="products-container">
                    { products ? loaded() : loading() }
                </Box>
            </div>
        </>
    )
}

export default Home;