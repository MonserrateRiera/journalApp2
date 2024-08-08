import { LoginLayout } from "../layout/LoginLayout";
import { Link as RouterLink } from "react-router-dom";
import { TextField, Button, Grid, Typography, Link } from "@mui/material";

export const RegisterPage = () => {
  return (
    <LoginLayout title="Register">
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
              label="name"
              type="text"
              placeholder="Your name"
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
                Register
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth color="error">
                <Typography>Cancel</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                <Typography>Already have an acount? Log in!</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </LoginLayout>
  );
};
