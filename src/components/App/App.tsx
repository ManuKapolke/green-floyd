import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './App.module.less';

export const App = () => {
  return (
    <div className={styles.mainGrid}>
      <Header />
      <div>
        <div style={{ display: 'grid', placeContent: 'center', padding: '100px' }}>
          <img alt="Green Floyd Poster" src="src/assets/greenfloyd2025.jpeg" className='filter' />
        </div>
      </div>
      <Footer />
    </div>
  );
};
