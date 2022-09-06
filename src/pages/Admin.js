import { login, logout } from "../firebase";
import { Box, Paper } from "@mui/material";

const Admin = ({user}) => {
    return (
        <main className="admin-main-container">
            <Box>
                <Paper sx={{p: '5rem'}} className="login-logout-container">
                    <h1 className="admin-logo">eCom Store</h1>
                    <h2 className="login-message">Login to your store manager</h2>
                    <>
                        {
                            user ?
                            <div className="login-logout">  
                                <p>Welcome, {user.displayName}</p>
                                <p onClick={logout}>Log Out</p>
                            </div> 
                            : 
                            <div className="login-logout">
                                <p onClick={login}>Login with Google</p>
                            </div>
                        }
                    </>
                </Paper>
            </Box>
        </main>
    )
}

export default Admin;