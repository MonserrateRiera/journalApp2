import { Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Grid, Typography, Link } from "@mui/material";
import { LoginLayout } from "../layout/LoginLayout";
import { Google } from "@mui/icons-material";

export const LoginPage = () => {
  return (
    <LoginLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="example@example.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="*****"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography>Google</Typography>
              </Button>
            </Grid>
          </Grid>
            <Grid container direction="row" justifyContent="end">
              <Grid item>
                <Link component={ RouterLink } color="inherit" to="/auth/register">
                  <Typography>Don't have an account? Register now</Typography>
                </Link>

              </Grid>
              </Grid>
        </Grid>
      </form>
    </LoginLayout>
  );
};
