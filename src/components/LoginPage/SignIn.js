import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{padding: '0px'}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            height: '100vh',
          }}
        >
          <Typography component="h1" variant="h4" style={{paddingTop: '1.5rem'}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={{padding:'1.5rem', borderRadius: '10px'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="name"
              autoFocus
              style={{boxShadow: '0px 0.5px 1px 0px #000'}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{boxShadow: '0px 0.5px 1px 0px #000'}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: '#FFC188'}}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2" style={{margin: 'auto'}}>
                  Forgot password?
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: '#00A47D'}}
            >
              <Link to='/signup' style={{ width: '100%'}}>
                  {'DONT HAVE AN ACCOUNT? CREATE HERE'}
            </Link>
            </Button>
            <div className = 'flex flex-col justify-center items-center mt-5'>
              <Typography component="p" variant="p" style={{}}>Or continue with</Typography>
              <div className = 'flex flex-row justify-around items-center w-[50%] m-auto mt-5 '>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </div>
            </div>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}