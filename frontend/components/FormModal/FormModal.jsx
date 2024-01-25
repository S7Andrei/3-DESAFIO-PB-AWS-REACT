import React, { useState } from 'react';
import styles from './FormModal.module.css';
import Popup from '../../src/assets/formModal/Popupimage.png';
import json from '../../../backend/others/country-city.json';

//MaterialUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Combobox from './Combobox';
import ColorSwitches from './ColorSwitches';

// Yup
import * as yup from 'yup';
import { Switch } from '@mui/material';

const schema = yup.object({
    name: yup
    .string()
    .required()
    .min(5, 'O nome deve ter pelo menos 5 caracteres')
    .matches(/^[^\d]+ [^\d]+$/, 'Invalid Name'),

    email: yup
    .string()
    .required()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email"),

    country: yup
    .string()
    .required(),

    city: yup
    .string()
    .required(),

    code: yup.string().required()
    .matches(/^[A-Za-z]{3}-\d{3}$/, "Invalid code")
    .transform((value) => value ? value.toUpperCase() : value),
});

const FormModal = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

const [citiesOptions, setCitiesOptions] = React.useState([])

  function handleSearchCity() {

    const normalizeJson = Object.entries(json).map(([country, valor]) => ({
      country,
      ...valor,
    }))
    const getCity = normalizeJson.find(({country}) => country === watch().country)

    const filteredCityValues = Object.values(getCity).filter((value) => value !== watch().country)
    const tst = Object.values(filteredCityValues).map((cities) => ({label:cities, value:cities}))
    setCitiesOptions(tst)
  }  

  React.useEffect(() => {
    if (!watch().country) return
    handleSearchCity()
  }, [watch().country] )
  


  const onSubmit = (data) => {
    console.log({data});
  };

  const [selectedCountry, setSelectedCountry] = useState("") 

  const countries = Object.keys(json).map((country, i) => ({label:country, value:country}))

  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.PopupContainer}>
          <img src={Popup} alt="PopupImage" />
          <ul className={styles.textFormContainer}>
            <li>
                <h1 className={styles.titleDrive}>Drive with MyRide</h1>
            </li>
            <li>
                <p className={styles.descDrive}>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
            </li>
          </ul>
        </div>

        <div className="form-group">
          <label htmlFor="name"></label>
          <input className={styles.stylebox} type="text" id="name" {...register('name')} placeholder='Full Name' onfocus="clearPlaceholder()" onblur="restorePlaceholder()" />
          <span className={styles.error}>{errors?.name?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email"></label>
          <input className={styles.stylebox} type="text" id="email" {...register('email')} placeholder='Email Adress' />
          <span className={styles.error}>{errors?.email?.message}</span>
        </div>

      <div className="form-group">
          
          <Controller   
            control={control} 
            name='country'  
            render={({field}) => (
              <Combobox  
               {...field}
                options={countries} 
                error={errors?.country?.message} 
                id="country" 
                label="Country" 
           />
          )} />
        </div>
        <div className="form-group">
        <Controller   
            control={control} 
            name='city'  
            render={({field}) => (
              <Combobox  
               {...field}
               disabled={!citiesOptions.length}
                options={citiesOptions} 
                error={errors?.country?.message} 
                id="city" 
                label="city" 
           />
          )} />
</div>
        <div className="form-group">
          <label htmlFor="city">
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="code" for="a"></label>
          <input className={styles.stylebox} type="text" id="code" {...register('code')} placeholder='Referral Code' />
          <span className={styles.error}>{errors?.code?.message}</span>
        </div>

        <ColorSwitches />

        <button className={styles.submit} type="submit" >SUBMIT</button>
      </form>
    </>
  );
};

export default FormModal;
