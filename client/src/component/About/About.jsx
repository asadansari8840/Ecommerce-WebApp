import React from "react";
import "./About.scss";
import { Button, Typography, Avatar } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import dp from "../../images/myDp.jpg";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/a_sad_ansari/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={dp}
              alt="Founder"
            />
            <Typography>Asad Ansari</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is an ecommerce mern stack website for learning purpose only
              . For more queries please mail or dm me !
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect With Me </Typography>
            <a
              href="https://www.facebook.com/profile.php?id=100007413632042"
              target="blank"
            >
              <Facebook className="facebookSvgIcon" />
            </a>

            <a href="https://instagram.com/a_sad_ansari" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
