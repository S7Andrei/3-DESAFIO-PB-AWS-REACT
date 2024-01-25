import React from 'react';
import styles from '../../../components/FormModal/UI/SelectCarType.module.css';


const SelectCarType = ({children, ...props}) => {
  return (
    <>
    <label htmlFor="radio">
        <input type="radio" className={styles.InputRadio}/>
    </label>

    </>
  );
}

export default SelectCarType;
