import 
  { 
    Box, 
    Paper, 
    Table, 
    styled, 
    Button, 
    TableRow, 
    TableBody, 
    TableCell, 
    TableHead, 
    IconButton, 
    TableContainer, 
    tableCellClasses 
  } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Products = ({products, deleteProducts }) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

    const handleDelete = (e) => {
      e.preventDefault();    
      if(e.target.tagName === 'path'){
        deleteProducts(e.target.parentElement.parentElement.dataset.id);
      }else if(e.target.tagName === 'svg'){
        deleteProducts(e.target.parentElement.dataset.id);
      }else {
        deleteProducts(e.target.dataset.id);
      }  
    }

    const loaded = () => {
        return (
          <>
          <Box className='admin-container-header'>
            <h2>Products List</h2>
            <Link to='/admin/create-product'>
              <Button variant="contained">Create Product</Button>
            </Link>
          </Box>
          
          <TableContainer component={Paper} className='table-container'>
            <Table sx={{ minWidth: 600 }} aria-label="Products">
              <TableHead>
                <TableRow>
                  <StyledTableCell>SKU</StyledTableCell>
                  <StyledTableCell align="left">Image</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Stock</StyledTableCell>
                  <StyledTableCell align="left">Size</StyledTableCell>
                  <StyledTableCell align="left">Cost</StyledTableCell>
                  <StyledTableCell align="left">Price</StyledTableCell>
                  <StyledTableCell align="left">Edit</StyledTableCell>
                  <StyledTableCell align="left">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                    products.map(({_id, name, stock, cost, price, sku, image, size}) => (
                        <StyledTableRow key={_id}>
                            <StyledTableCell component="th" scope="row">
                            {sku}
                            </StyledTableCell>
                            <StyledTableCell align="left"><img src={image} alt={name} className='product-list-img'/></StyledTableCell>
                            <StyledTableCell align="left">{name}</StyledTableCell>
                            <StyledTableCell align="left">{stock}</StyledTableCell>
                            <StyledTableCell align="left">{size}</StyledTableCell>
                            <StyledTableCell align="left">${cost}</StyledTableCell>
                            <StyledTableCell align="left">${price}</StyledTableCell>
                            <StyledTableCell align="left">
                              <Link to={`/admin/update-product/${_id}`}>
                                <IconButton>
                                  <EditIcon sx={{color: "#1971bd"}}/>
                                </IconButton>
                              </Link>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <IconButton onClick={handleDelete} data-id={_id}>
                                  <DeleteIcon sx={{color: "#e41818"}}/>
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          </>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return(
        <>
            { products ? loaded() : loading()}
        </>
    )
}

export default Products;