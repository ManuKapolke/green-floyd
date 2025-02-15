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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Konzerte</a>
                    </li>
                    <li>
                        <a href="#">Green & Symphonic Floyd</a>
                    </li>
                    <li>
                        <a href="#">Pressespiegel</a>
                    </li>
                    <li>
                        <a href="#">CD & Vinyl</a>
                    </li>
                    <li>
                        <a href="#">Galerie</a>
                    </li>
                    <li>
                        <a href="#">Videos</a>
                    </li>
                    <li>
                        <a href="#">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
