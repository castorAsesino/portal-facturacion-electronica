


import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
  Paper, Button
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FormInput from './FormInput';
/* import { ReactComponent as GitHubLogo } from '../../assets/img/github.svg'; */
import styled from '@emotion/styled';
import GitHubLogo from '../../assets/img/logo2.png';

import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
// 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

// 👇 Styled Material UI Link Component
export const OauthMuiLink = styled(MuiLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
  border-radius: 1;
  padding: 0.6rem 0;
  column-gap: 1rem;
  text-decoration: none;
  color: #393e45;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
  }
`;




export default function Logintest() {
  const navigate = useNavigate();
  const defaultValues = {
    email: '',
    password: '',
  };

  // 👇 The object returned from useForm Hook
  const methods = useForm({

    defaultValues,
  });

  // 👇 Submit Handler
  const onSubmitHandler = (values) => {
    console.log(values);
  };

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

  return (

    <>

      <Container
        maxWidth={false}
        sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#fcfcfd' } }}>

        <Grid
          container spacing={0}
          justifyContent='center'
          alignItems='center'
          sx={{ width: '100%', height: '100%' }}

        >
          <Grid xs={12} md={6} item >
            <Typography
              variant='h6'
              component='p'
              sx={{
                padding: { sm: '10rem' },
                mb: '1.5rem',
                textAlign: 'center',
              }}
            >

              <img src={GitHubLogo} className='img-responsive-logo' alt='logo' />

            </Typography>

          </Grid>


          <Grid
            item
            container

            rowSpacing={5}
            sx={{

              maxWidth: { sm: '50rem' },
              marginInline: 'auto',
              justifyContent: 'center',
              /*  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;", */
              py: '5rem',
              /*   px: '10rem', */
            }}

          >

            <Box
              display='flex'
              flexDirection='column'
              component='form'
              noValidate
              autoComplete='off'

              sx={{ rowGap: '1rem', }}

            >


              <Card sx={{
                width: 500,
                boxShadow: 'rgb(0 0 0 / 20%) 0px 48px 100px 0px',
                padding: 5,
                marginInline: 'auto',
                justifyContent: 'center', height: "70vh", pt: '10rem'
              }}>
                <CardContent>

                  <Typography
                    variant='h6'
                    component='h1'
                    sx={{ textAlign: 'center', mb: '2.5rem' }}
                  >
                    Portal de facturación
                    electrónica
                  </Typography>




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

                  <Button color="primary" variant="contained">
                    Primaryddd
                  </Button>

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
                </CardContent>
              </Card>



            </Box>


          </Grid>

        </Grid>



      </Container>
    </>

  );
};
