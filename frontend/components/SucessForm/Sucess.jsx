import React, { useEffect, useState } from "react";
import styles from './Sucess.module.css';
import checkIcon from '../../src/assets/SucessForm/checkicon1.png';

const SucessForm = () => {
  const [data, setData] = useState();

    console.log(data);

  useEffect(() => {
    async function getRegister() {
      async function getData() {
        const res = await fetch("http://localhost:3000/post/1");
        const data = await res.json();
        return data;
      }
      const data = await getData();
      setData(data);
    }
    getRegister();
  }, []);

  useEffect(() => {
    if (data) {
      try {
        fetch("http://localhost:3000/post/1", {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [data]);

  return (
    <>
      {
        data && <>
        
        <form className={styles.sucessBackground}>

        <div className={styles.formatText}>

            <h1 className={styles.welcomeTitle}>
              <div className={styles.alignIcon}>
              <img className={styles.Checked} src={checkIcon} alt="Checked Icon" />
             Welcome, {data.name.split(" ")[0]}!
              </div>
            </h1>
      
      <div className={styles.espaco}>
        
      <div className={styles.line}></div>

          <div className={styles.classItens}>
            <p className={styles.infoTitle}>
              Email:
            </p>
            <p>
              {data.email}
            </p>
          </div>

      <div className={styles.line}></div>

        <div className={styles.classItens}>
        <p className={styles.infoTitle}>
              Country:
            </p>
            <p>
              {data.country}
            </p>
        </div>
      <div className={styles.line}></div>
        
        <div className={styles.classItens}>
        <p className={styles.infoTitle}>
              City:
            </p>
            <p>
              {data.city}
            </p>
        </div>

      <div className={styles.line}></div>  

        <div className={styles.classItens}>
        <p className={styles.infoTitle}>
        Referral Code:
            </p>
            <p>
              {data.code}
            </p>
        </div>

      <div className={styles.line}></div>

            <p>
              {data.switchY}
            </p>
            </div>
      </div>

      </form>

        </>
      }
    </>
  );
};

export default SucessForm;
