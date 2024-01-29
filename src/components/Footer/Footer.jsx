import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="mail">
          <div><MailOutlineIcon /></div>
          <div>ratan.120375@gmail.com</div>
        </div>
        <div className="num">
          <div><WhatsAppIcon /></div>
          <div>+919897120375</div>
        </div>
        <div className="f-icons">

          <a href="https://github.com/RatanSinghYadav?tab=repositories">
            <Gitub color="black" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/ratan-singh-yadav-5214901b5/">
            <LinkedIn color="black" size={"3rem"} />
          </a>
          <Facebook color="black" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
