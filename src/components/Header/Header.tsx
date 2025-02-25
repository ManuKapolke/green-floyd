import { NavLink } from 'react-router-dom';
import styles from './Header.module.less';

export const Header = () => {
    return (
        <header className={styles.root}>
            <a href="/" className={styles.logo}>
                <img src="src/assets/greenfloydlogo.png" alt="Green Floyd Logo" />
            </a>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/konzerte">Konzerte</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Green & Symphonic Floyd</NavLink>
                    </li>
                    <li>
                        <NavLink to="/press">Pressespiegel</NavLink>
                    </li>
                    <li>
                        <NavLink to="/audio">CD & Vinyl</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Galerie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/video">Videos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
