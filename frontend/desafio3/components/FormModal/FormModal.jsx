import React from 'react';
import styles from './FormModal.module.css'

import MaiscI from './Requisits'

// React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register('name')} />
          <span className={styles.error}>{errors?.name?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="surname">Sobrenome</label>
          <input type="text" id="email" {...register('email')} />
          <span className={styles.error}>{errors?.email?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="code">Senha</label>
          <input type="text" id="code" {...register('code')}  />
          <span className={styles.error}>{errors?.code?.message}</span>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default FormModal;
