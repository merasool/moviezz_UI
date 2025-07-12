import React from 'react';
import styles from './Film.module.css';
import captain from '../../assets/captain.jpg';
import avatar from '../../assets/avatar.jpg';
import avengers from '../../assets/avengers.jpeg';
import f1 from '../../assets/f1.jpeg';
import dune from '../../assets/dune.jpg';

const films = [
  { title: 'Captain America', image: captain },
  { title: 'Avatar', image: avatar },
  { title: 'Avengers', image: avengers },
  { title: 'F1', image: f1 },
  { title: 'Dune', image: dune }
];

const Film = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Recently Added</h2>
      <div className={styles.scrollWrapper}>
        <div className={styles.show}>
          {films.map((film, index) => (
            <div key={index} className={styles.card}>
              <img src={film.image} alt={film.title} />
              <div className={styles.title}>
                <h3>{film.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Film;
