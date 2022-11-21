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
import Logo from "../../assets/img/login-logo.png";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./login.scss"
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';





export default function Login() {
    const navigate = useNavigate();
    const theme = useTheme();

    const [values, setValues] = React.useState({
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


    return (
        <>
            <div className="form-wrapper">
                <div className="form-cover" style={{ backgroundColor: 'rgb(243 245 247)', textAlign: 'center' }}>
                    <img src={Logo} alt="logo" style={{ width: '100%', marginTop: '6rem' }} />
                </div>
                <div className="container-fluid" >
                    <div className="row" >
                        <div className="col-lg-4">
                            <div className="my-5 text-center text-lg-left">
                                <h1 className="font-weight-bold">Portal de Facturación <br /> Electrónica</h1>
                            </div>
                            <div className="logo text-center text-lg-left">
                                <img src={theme.status.imgLogin} alt="" sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />
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
                                        color: '#fff',
                                    }}
                                >
                                    Iniciar Sesión
                                </LoadingButton>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                        Olvide mi contraseña
                                        </Link>
                                    </Grid>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}