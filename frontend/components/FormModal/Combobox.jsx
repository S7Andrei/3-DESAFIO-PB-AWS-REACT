import * as React from 'react';
 import TextField from '@mui/material/TextField';

import styles from './FormModal.module.css';

import * as S from './styles'
import { Autocomplete, Switch, styled } from '@mui/material';



export default function InputMUI({error,id, options,onChange, label, name, control, ...props}) {

  return (
    <>
    <S.StyledAutoComplete
      {...props}
      disablePortal
      error
   onChange={(e, value) =>onChange(value.label)}
      id={id}
      options={options}
      getOptionLabel={(option)=> option.label}
      renderInput={(params) => <TextField {...params} label={label}  /> } 
   />
   {
     error && 
     <span  className={styles.error}>{error}</span>}
   
    </>
    
  );
}

