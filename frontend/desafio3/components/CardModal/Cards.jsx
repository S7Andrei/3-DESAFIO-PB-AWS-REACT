import React from 'react';
import styles from './cards.module.css';

import card from '../../src/assets/CardModal/card.png';
import card1 from '../../src/assets/CardModal/card1.png';
import card2 from '../../src/assets/CardModal/card2.png';
import card3 from '../../src/assets/CardModal/card3.png';

const Cards = () => {
  return (
    <>

    <div className={styles.ridesTitleContainer}>

    <ul className="">

    <li>
        <h2 className={styles.yTitle}>WHY SHOULD YOU RIDE WITH US?</h2>
    </li>
    <li>
        <h1 className={styles.wTitle}>BEST IN CLASS RIDES</h1>
    </li>

    </ul>

    </div>

    <div className={styles.cards}>

        <section className={styles.card}>
            <div className={styles.icon}>
            <img src={card} />
            </div>
            <div className={styles.txtCard}>
            <h3 className={styles.titleCard}>Basic</h3>
            <span className={styles.descCard}>The best balance of price and comfort.<br/>You will not go wrong with our basic<br/>rides.</span>
            </div>
            <button className={styles.btnLearn}>LEARN MORE</button>
        </section>
        <section className={styles.card}>
        <div className={styles.icon}>
            <img src={card1} />
        </div>
        <div className={styles.txtCard}>
            <h3 className={styles.titleCard}>Comfort</h3>
            <span className={styles.descCard}>If comfort is your priority, this is the<br/> ride for you. It’s spacious and packed<br/>with features.</span>
        </div>
            <button className={styles.btnLearn}>LEARN MORE</button>
        </section>
        <section className={styles.card}>
        <div className={styles.icon}>
            <img src={card2} />
        </div>
        <div className={styles.txtCard}>
            <h3 className={styles.titleCard}>Business</h3>
            <span className={styles.descCard}>Do you want to travel around the city in<br/>style? Make sure to select or business<br/>class rides.</span>
        </div>
            <button className={styles.btnLearn}>LEARN MORE</button>
        </section>
        <section className={styles.card}>
        <div className={styles.icon}>
            <img src={card3} />
        </div>
        <div className={styles.txtCard}>
            <h3 className={styles.titleCard}>Deluxe</h3>
            <span className={styles.descCard}>The best ride for luxury and comfort.<br/>No compromises here. You’ll surely get<br/>what you pay for.</span>
        </div>
        <a id="learnMoreBtn">
            <button className={styles.btnLearn}>LEARN MORE</button>
        </a>
        </section>
    
    </div>
    </>
  )
}

export default Cards