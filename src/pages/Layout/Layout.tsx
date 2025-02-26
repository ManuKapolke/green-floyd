import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.less';

export const Layout = () => {
    return (
        <div className={styles.mainGrid}>
            <Header />
            {/* <div>
        <div style={{ display: 'grid', placeContent: 'center', padding: '100px' }}>
          <img alt="Green Floyd Poster" src="src/assets/greenfloyd2025.jpeg" className='filter' />
        </div>
      </div> */}
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
