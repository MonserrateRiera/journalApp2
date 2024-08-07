

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main:'#E9F1FA'
        },
        secondary: {
            main: '#faf2e9'
        },
        error: {
            main: red.A400,
        },
    },
});

