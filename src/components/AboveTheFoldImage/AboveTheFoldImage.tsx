import styles from './AboveTheFoldImage.module.less';

type Props = {
    src: string;
    alt?: string;
    onClickScrollTo?: string;
};

export const AboveTheFoldImage = ({ src, alt, onClickScrollTo }: Props) => {
    return (
        <div className={styles.root}>
            <img src={src} alt={alt} />
            <a href={`#${onClickScrollTo}`} className={styles.banner}>Konzerte</a>
        </div>
    );
};