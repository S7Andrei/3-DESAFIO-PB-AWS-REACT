import React from 'react';
import styles from './FormModal.module.css';
import Popup from '../../src/assets/formModal/Popupimage.png';

//MaterialUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Combobox from './Combobox';
import Combobox2 from './Combobox2';

// Yup
import * as yup from 'yup';

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

  code: yup.string().required()
  .matches(/^[A-Za-z]{3}-\d{3}$/, "Invalid code")
  .transform((value) => value ? value.toUpperCase() : value),
});

const FormModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);


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
          <label htmlFor="country">
          </label>
          <Combobox id="country" error={errors?.country?.message} {...register('country')} />
        </div>

        <div className="form-group">
          <label htmlFor="city">
          </label>
          <Combobox2 id="city" error={errors?.city?.message} {...register('city')} />
        </div>

        <div className="form-group">
          <label htmlFor="code" for="a"></label>
          <input className={styles.stylebox} type="text" id="code" {...register('code')} placeholder='Referral Code' />
          <span className={styles.error}>{errors?.code?.message}</span>
        </div>
        <button className={styles.submit} type="submit" >SUBMIT</button>
      </form>
    </>
  );
};

export default FormModal;
