import styles from './Feature.module.css'
import Featuredshow from '../featured-show/Featuredshow'

const Features = () => {
  return (
    <div>
        <section className={styles.Feature}>
            <h1>New Movies🤩 </h1>
          <div className={styles.shows}>
            <Featuredshow/>
            <Featuredshow/>
            <Featuredshow/>
            <Featuredshow/>
          </div>

        </section>
      
    </div>
  )
}

export default Features
