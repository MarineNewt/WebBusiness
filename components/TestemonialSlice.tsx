import styles from '@/styles/Home.module.css'
import font from '@/components/fonts'

const TestemonialSlice = ({}: {}) => {
  return (
    <div className={`${styles.slice} ${font.className}`}>
       <h2 className={styles.testtitle}>❝ My website has helped me introduce hundereds of people to my business ❞</h2>
       <p className={styles.testheading}>&quot;Working together has been an amazingly smooth experience and I am happy to recommend you to anyone looking to build their brand.&quot;</p>
    </div>
  );
};

export default TestemonialSlice;