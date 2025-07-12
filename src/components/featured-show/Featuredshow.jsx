import styles from './Featured.module.css';
import avengers from '../../assets/avengers.jpeg';
import dune from '../../assets/dune.jpg';

const Featuredshow = () => {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.title}>Featured Shows</h2>
      <div className={styles.Featuredshow}>
        <img src={dune} alt="Dune"/>
         <a href='https://youtu.be/n9xhJrPXop4?si=40R6OjJzNASDoXJd'><h3>Dune</h3></a>
        <img src={avengers} alt="Avengers" />
         <a href='https://youtu.be/TcMBFSGVi1c?si=Pfjo6d-uolaKrkvx'><h3>Avengers</h3></a>
      </div>
    </div>
  );
};

export default Featuredshow;
