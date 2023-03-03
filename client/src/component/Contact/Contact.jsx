import React from "react";
import "./Contact.scss";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:asadansari.aa786@gmail.com">
        <Button>Mail Me :- asadansari.aa786@gmail.com </Button>
      </a>
    </div>
  );
};

export default Contact;
