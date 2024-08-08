

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main:'#6891ed'
        },
        secondary: {
            main: '#ab8a6c'
        },
        error: {
            main: red.A400,
        },
    },
});

