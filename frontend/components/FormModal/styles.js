import { Autocomplete } from '@mui/material'
import styled from 'styled-components'

export const StyledAutoComplete = styled(Autocomplete)`
&&{
    label{
        color:#666666;
    }


    .MuiOutlinedInput-notchedOutline {
        border-color: white !important;
    }


    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #FBA403 !important;
    }


    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #FBA403!important;
    }

   .Mui-focused {
        color:#FBA403 !important;
   }


   .MuiInputLabel-shrink{
        color:#FBA403 !important;
   }

   .error-outline {
    border-color: red !important;
   }

}
`