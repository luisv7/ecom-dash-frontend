import { Box } from '@mui/material';
import { Paper } from '@mui/material'

const Dashboard = ({products}) => {

    const loaded = () => {
        return (
            <Box className='box-container'>
                <Paper elevation={1} className='dashboard-paper'> 
                    <h2>Number of Products</h2>
                    <h3>{products.length}</h3>
                </Paper>
            </Box>
        )
    }

    const loading= () => {
        return (
            <div className='loading-container'>
                <h1>Loading...</h1>
            </div>
            
        )
    }

    return (
        <>
            { products ? loaded() : loading() }
        </>
 
    )
}

export default Dashboard;