import * as React from "react";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import styles from './CarModal.module.css';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },

    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#FBA403",
            "--TextField-brandBorderFocusedColor": "#FBA403",
            "& label.Mui-focused": {
              color: "#FBA403",
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "white", 
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray", 
          },
        },
      },   

      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#ffa600",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "#FBA403",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "#FBA403",
            },
            "&.Mui-focused:after": {
              borderBottom: "#FBA403",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr 1fr" },
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField label="Your Pickup" />
        <TextField label="Your Destination" />
      </ThemeProvider>
    </Box>
  );
}
