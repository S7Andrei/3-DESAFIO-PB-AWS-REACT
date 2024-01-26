import React from 'react';
import styles from './CarModal.module.css';
import Ride from '../../src/assets/CarModal/Ride.png';

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

          <h4 className={styles.findStyle}>Find a ride now</h4>

        </form>


        </div>
      
    </>

  )
}

export default CarModal