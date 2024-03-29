import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'


const HomePage = ({}: {}) => {
  return (
    <div className={styles.fullpage}>
        <h1 className={`${styles.title} ${font.className}`}> Elevated Website Design <br/> & Branding Development</h1>
        <h3 className={`${styles.heading} ${font.className}`}>Custom Websites for everyone, tailored to you and your needs.</h3>
        <button className={styles.ctabutton}> Start Application</button>
        
    </div>
  );
};

export default HomePage;