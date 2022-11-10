import React from "react";
import "./GitHub.css";
import profil from "../../profil.jpeg";
import github from "../../svg/github.svg";
import twitter from "../../svg/twitter.svg";
import instagram from "../../svg/instagram.svg";
import facebook from "../../svg/facebook.svg";
import lnm from "../../svg/lnm.png";

function GitHub() {
  return (
    <div>
      <img src={lnm} alt="Lipa Na Mpesa" width="200px"></img>
      <br />
      <hr />
      <h3 style={{ color: "green" }}>Request send!</h3>
      <h4 style={{ color: "silver" }}>
        Still working on payment confirmantion.
      </h4>
      <br />
    </div>
  );
}

export default GitHub;
