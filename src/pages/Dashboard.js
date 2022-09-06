import { Link } from 'react-router-dom';
import { Box, Paper, Button } from '@mui/material';

const Dashboard = ({products}) => {

    const loading= () => {
        return (
            <div className='loading-container'>
                <h1>Loading...</h1>
            </div>
            
        )
    }

    const loaded = () => {
        return (
            <>
                <Box className='admin-container-header'>
                    <h2>Dashboard</h2>
                    <Link to='/'>
                        <Button variant="contained">View Website</Button>
                    </Link>
                </Box>
                <Box className='box-container'>
                    <Paper elevation={1} className='dashboard-paper'> 
                        <h3>Number of Products</h3>
                        <Link to='/admin/products'>
                            {products.length}
                        </Link>
                    </Paper>
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

export default Dashboard;