import React from 'react';
import styles from './CarModal.module.css';
import Ride from '../../src/assets/CarModal/Ride.png';
import Field from './TextField.jsx';


const CarModal = () => {
  return (
     <>
        <div className={styles.RideModal}>
              
          <img src={Ride} alt="LayoutCar" /> 
          <div className={styles.Direction}>
            <h3 className={styles.Need}>NEED A RIDE?</h3>
            <h1 className={styles.myRIDE}>Book with <i className={styles.changeColor}><i className={styles.fontStyle}>my</i>RIDE</i> now!</h1>
          </div>

        <form className={styles.BackgroundFormStyle}>

          <div className={styles.justColumn}>

          <h4 className={styles.findStyle}>Find a ride now</h4>
            <Field />
            <button className={styles.btnSearch} type='button'>
              <div className={styles.test}>
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14.3671H14.71L14.43 14.0971C15.41 12.9571 16 11.4771 16 9.86707C16 6.27707 13.09 3.36707 9.5 3.36707C5.91 3.36707 3 6.27707 3 9.86707C3 13.4571 5.91 16.3671 9.5 16.3671C11.11 16.3671 12.59 15.7771 13.73 14.7971L14 15.0771V15.8671L19 20.8571L20.49 19.3671L15.5 14.3671ZM9.5 14.3671C7.01 14.3671 5 12.3571 5 9.86707C5 7.37707 7.01 5.36707 9.5 5.36707C11.99 5.36707 14 7.37707 14 9.86707C14 12.3571 11.99 14.3671 9.5 14.3671Z" fill="white"/>
              </svg> 
              <i className={styles.UpText}>FIND A DRIVER</i>
              </div>
              </button>
          </div>
        </form>
            </div>
    </>

  )
}

export default CarModal