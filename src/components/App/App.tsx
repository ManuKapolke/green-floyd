
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "../../pages/Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { Concerts } from "../../pages/Concerts/Concerts";
import { About } from "../../pages/About/About";
import { Press } from "../../pages/Press/Press";
import { Audio } from "../../pages/Audio/Audio";
import { Gallery } from "../../pages/Gallery/Gallery";
import { Video } from "../../pages/Video/Video";
import { Contact } from "../../pages/Contact/Contact";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="konzerte" element={<Concerts />} />
          <Route path="about" element={<About />} />
          <Route path="press" element={<Press />} />
          <Route path="audio" element={<Audio />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="video" element={<Video />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
