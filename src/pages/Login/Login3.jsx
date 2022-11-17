import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';
import GitHubLogo from '../../assets/img/comp.png';
import Logo from "../../assets/img/logo.svg";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./stilo.scss"
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login3() {
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <div class="form-wrapper">
                <div class="form-cover" style={{ backgroundColor: 'rgb(243 245 247)', textAlign: 'center' }}>
                    <img src={GitHubLogo} alt="logo" style={{ width: '90%', marginTop: '5rem' }} />
                </div>
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-4">
                            

                            <div class="my-5 text-center text-lg-left">
                                <h3 class="font-weight-bold">Portal de Facturación <br /> Electrónica</h3>

                            </div>
                            <div class="logo text-center text-lg-left">
                                <img src={Logo} alt="" sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />
                            </div>
                            <form>


                                <FormControl variant="standard" margin="dense" fullWidth style={{}}>
                                    <TextField fullWidth
                                        placeholder="Usuario"
                                        margin="dense"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        id="standard-basic"
                                        label="Usuario"
                                        variant="outlined"
                                    />
                                </FormControl>


                                <FormControl variant="outlined" fullWidth margin="dense" >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>



                                <LoadingButton
                                    loading={false}
                                    type='submit'
                                    variant='contained'
                                    onClick={() => navigate('/facturacion')}
                                    sx={{
                                        py: '0.8rem',
                                        mt: 2,
                                        width: '100%',
                                        marginInline: 'auto',
                                    }}
                                >
                                    Iniciar Sesión
                                </LoadingButton>

                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="password-reset.html">Olvide mi contraseña</a>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}