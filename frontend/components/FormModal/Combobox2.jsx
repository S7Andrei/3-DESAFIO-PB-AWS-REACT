import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import styles from './FormModal.module.css';
import { red } from '@mui/material/colors';
import * as S from './styles'


export default function InputMUI2({error}) {

  return (
    <>
    <S.StyledAutoComplete
      disablePortal
      error
      sx={{ width: 1265  }}
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
    {
      error && 
      <span  className={styles.error}>{error}</span>}
    </>
  );
}


const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
];