import styles from './Channels.module.css'
import channel1 from'../../assets/channel-1.png'
import channel2 from'../../assets/channel-2.png'
import channel3 from'../../assets/channel-3.png'
import channel4 from'../../assets/channel-4.png'
import channel5 from'../../assets/channel-5.png'
import channel6 from'../../assets/channel-6.png'
import channel7 from'../../assets/channel-7.png'
const Channels = () => {
  return (
    <div>
        <div className={styles.channel}>
            <img src={channel1} alt="channel-1"  />
            <img src={channel2} alt="channel-2"  />
            <img src={channel3} alt="channel-3"  />
            <img src={channel4} alt="channel-4"  />
            <img src={channel5} alt="channel-5"  />
            <img src={channel6} alt="channel-6"  />
            <img src={channel7} alt="channel-7"  />


        </div>
      
    </div>
  )
}

export default Channels
