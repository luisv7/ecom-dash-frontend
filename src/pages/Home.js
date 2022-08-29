import { Link } from "react-router-dom";
import { Box, Paper } from '@mui/material';

const Home = ({products}) => {

    const loading = () => {
        return <h1>Loading...</h1>
    }

    const loaded = () => {
        return products.map(({ _id, name, price, stock, image }) => {
            return (
                <Box key={_id} className='product-container'>
                    <Paper>
                        <Link to={`/products/${_id}`}>
                        <img src={image} className='product-image' alt={name} />
                        </Link>
                        <div>
                            <Link to={`/products/${_id}`}>
                                <h1>{name}</h1> 
                            </Link>
                            <h2>Price: ${price}</h2>
                            <h2>Stock: {stock}</h2>
                        </div>
                    </Paper>
                </Box>
            )
        })
    }

    return(
        <>
            <div className="container">
                {products ? loaded() : loading() }
            </div>
        </>
    )
}

export default Home;