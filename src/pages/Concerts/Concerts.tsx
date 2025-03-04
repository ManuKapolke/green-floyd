import { AboveTheFoldImage } from "../../components/AboveTheFoldImage/AboveTheFoldImage";
import { Card } from "../../components/Card/Card";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";

export const Concerts = () => {
    return (
        <>
            <AboveTheFoldImage src="src/assets/img/Symphonic Floyd Still IV - Franz Wüstenberg.jpg" alt="Green Floyd live" onClickScrollTo="konzerthistorie" />
            <Card>
                <h2 id="konzerthistorie">Konzerthistorie</h2>
                <h3 className={styles.headline}>GREEN FLOYD</h3>
                <table className={styles.concertTable}>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Stadt</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {concerts.greenFloyd.map((concert) => (
                            <tr>
                                <td>{concert.date}</td>
                                <td>{concert.city}</td>
                                <td>{concert.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <h3 className={styles.headline}>SYMPHONIC FLOYD</h3>
                <table className={styles.concertTable}>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Stadt</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {concerts.symphonicFloyd.map((concert) => (
                            <tr>
                                <td>{concert.date}</td>
                                <td>{concert.city}</td>
                                <td>{concert.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </>
    );
};