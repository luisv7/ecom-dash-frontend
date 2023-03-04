import { useState } from 'react';
import { Box } from "@mui/system";
import { Button, Paper, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const Settings = ({user, createProfile}) => {
    const [newForm, setNewForm ] = useState({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        storeTitle: '',
        homeBanner: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setNewForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const navigate = useNavigate();

    const handleCreate = () => {
        createProfile(newForm);
        navigate('/');
    }

    return (
        <>
            <Box className='admin-container-header'>
                <h2>Store Settings</h2>
            </Box>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: '1rem', width: '25ch' },
                p: '1rem',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem'
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleCreate}
            >
                <Paper sx={{p: '1rem'}}>
                    <div className="store-settings-container">
                        <Avatar
                            type='text'
                            name="photURL"
                            value={user.photoURL}
                            alt={user.displayName}
                            src={user.photoURL}
                            sx={{ width: 80, height: 80 }}
                        />
                        <TextField
                            required
                            type='text'
                            id="outlined-required"
                            label="Store Title"
                            name="storeTitle"
                            value={newForm.storeTitle}
                            placeholder={user.displayName}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            required
                            type='text'
                            id="outlined-required"
                            label="Home Banner URL"
                            name="homeBanner"
                            value={newForm.homeBanner}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </Paper>
                <Box className="create-form-button-container">
                    <Button type="submit" variant="contained">Update Profile</Button>
                    <Button type="button" variant='contained' color="error" href="/">Cancel</Button>
                </Box>
            </Box>
        </>
    )
}

export default Settings;

