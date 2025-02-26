import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import styles from "./Home.module.less";
import { DividerRule } from "../../components/DividerRule/DividerRule";

export const Home = () => {
    return (
        <Card>
            <div className={styles.imageWrapper}>
                <img src="src/assets/GreenFloyd_live.jpg" alt="Green Floyd Banner" />
            </div>

            <div className={styles.textWrapper}>
                <h2>GREEN FLOYD: DIE BAND HINTER SYMPHONIC FLOYD</h2>
                <p>In den letzten Jahren hatte <Link to="/about">GREEN</Link> zusammen mit dem <a href="https://www.theaterhagen.de" target="_blank">Philharmonischen Orchester und dem Opern- und Kinderchor Hagen</a> mit SYMPHONIC FLOYD eine beeindruckende Erfolgsgeschichte geschrieben. Im September 2023 zelebrierten sie ihre Version der großartigen Musik von Pink Floyd bei einem imposanten Open Air Konzert dann erstmals ohne Orchester als reine Rockformation.</p>

                <p>Am 21.09.2024 war es endlich erneut soweit, diesmal in der ehrwürdigen Stadthalle Hagen. Die 9 Musiker boten ihrem Publikum unter dem Namen GREEN FLOYD wie gewohnt einen mitreißenden musikalischen Abend mit vielen Highlights aus dem Werk von Pink Floyd (natürlich wurde auch wieder das komplette <i>Dark Side Of The Moon</i> gespielt). Mit dabei waren auch ein Chor und ein Kinderchor, die das Konzert zu einem ganz besonderen Klangerlebnis werden ließen.</p>

                <p>Eine Feierstunde für alle Liebhaber der Musik von PINK FLOYD!</p>

                <p><b>Vielen Dank an alle, die da waren!!!</b> 😊</p>
            </div>

            <DividerRule />

            <div className={styles.textWrapper}>
                <h2>ÜBER SYMPHONIC FLOYD:</h2>
                <p>SYMPHONIC FLOYD ist ein Konzerterlebnis, das die Musik von Pink Floyd in einer spektakulären sinfonischen Bearbeitung zu neuem Leben erweckt.</p>

                <p>Ein beeindruckendes Crossover-Projekt präsentiert von der Hagener Allstar Band <Link to="/about">GREEN</Link>, bestehend aus Mitgliedern der Kultbands Extrabreit und Ex-Grobschnitt, zusammen mit dem <a href="https://www.theaterhagen.de" target="_blank">Philharmonischen Orchester und dem Opern- und Kinderchor Hagen</a>.</p>

                <p>Auf der Bühne liefern über 100 Akteure ein dreieinhalbstündiges, faszinierendes musikalisches Programm mit aufwändigen Video- und Lichtinstallationen.</p>

                <p>Neben dem selten gespielten Frühwerk <i>Atom Heart Mother</i>, das live ohne Orchester und Chor nicht aufführbar war, bietet das Konzert Ausschnitte aus den verschiedensten Schaffensperioden von Pink Floyd sowie als einen weiteren Höhepunkt das komplette <i>The Dark Side Of The Moon</i> im besonderen orchestralen Arrangement.</p>

                <p>In zehn ausverkauften Konzerten begeisterte das Projekt rund 8.000 Zuschauer im Theater Hagen. Die beiden großartigen Konzerte in der Westfalenhalle in Dortmund wurden mit frenetischem Applaus und „Standing Ovations“ gefeiert.</p>

                <p><b>Wir möchten uns bei unserem wunderbaren Publikum für diese unvergesslichen Abende bedanken. Wir haben jede Sekunde mit euch genossen!</b></p>

                <p>(Weitere Infos, Fotos und Videos findet ihr auch auf <a href="https://www.facebook.com/greenfloyd.band" target="_blank">Facebook</a> und <a href="https://www.instagram.com/symphonicfloyd" target="_blank">Instagram</a>.)</p>
            </div>

            <DividerRule />

            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/326968307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} title="Aftermovie - Symphonic Floyd 2019 (Westfalenhalle Dortmund)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        </Card>
    );
};