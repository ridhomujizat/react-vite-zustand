import React from 'react';
import {
  Box,
  Stack,
  Link,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LogoBlue from 'assets/logo/blue.png';
import bgGradient from 'assets/img/gradient-bg.svg';
import { authAction } from 'store/slice/Auth';

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: Yup.string().min(8).required('Password is required'),
    }),
    onSubmit: async (value) => {

    },
  });

  return (
    <Box
      sx={{
        flex: '1 1 auto',
        alignItems: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(-45deg,#FEC81D 40%,#fe591d)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        // backgroundImage: `url(${bgGradient})`,
      }}
    >
      <Card
        sx={{
          maxWidth: 550,
          px: 3,
          width: '100%',
        }}
      >
        <CardContent>
          <Box>
            <Stack alignItems="center" width="100%">
              <Box
                component="img"
                src={LogoBlue}
                alt="image"
                sx={{ height: 100, mb: 5 }}
              />
            </Stack>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h5">Login</Typography>
              {/* <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  // component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography> */}
            </Stack>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
