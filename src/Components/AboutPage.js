import React from "react";
import { ImInfo } from "react-icons/im";
import logo from "../images/fundamental-logo.png";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <ImInfo size="3.7rem" className="info-icon" />
      <h1>Apie Mus</h1>
      <hr className="hr top" />
      <img src={logo} alt="logo" />
      <p className="about-p">
        Aš esu Povilas Mackevičius, „Fundamental“ prekinio ženklo įkūrėjas.
        Būtent šį brand'ą pasirinkau dėl idėjos, kuri slypi jo pavadinime.
        „Fundamental“ - pamatinis, pagrindinis, esminis.
      </p>
      <blockquote>
        Success is neither magical, nor mysterious. Success is the natural
        consequence of consistently applying the basic fundamentals.
        <br />
        <span>-Jim Rohn</span>
      </blockquote>
      <p className="about-p">
        Taigi, tikėjimas fundamentaliais principais mane čia ir atvedė.
        Naudodamasis šiuo brand'u sieksiu kurti paprastus, tačiau taip pat ir
        unikalius drabužius bei aksesuarus. Tikiuosi, jog šio prekinio ženklo
        idėja atkreips žmonių dėmesį į esminius dalykus.
      </p>
      <hr className="hr bottom" />
    </div>
  );
};

export default AboutPage;
