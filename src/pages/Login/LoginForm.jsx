import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";
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
import { useTheme } from '@mui/material/styles';

const LoginForm = () => {
  const theme = useTheme();


  useEffect(() => {
   console.log('sdas',theme)
}, []);


  return (
    <><div>dasdasdad </div><div>
      <img src={theme.status.logo}  />
    </div>
    <Button color="primary" variant="contained">
                    Primaryddd
                  </Button>
                  </>
  );
};

export default LoginForm;