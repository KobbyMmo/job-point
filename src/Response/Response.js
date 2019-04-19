import React from "react";
import "./Response.css";

const socialMediaHandles = [
  {
    url: "https://github.com/mobilejazz",
    name: "Medium",
    iconClass: "fa-medium"
  },
  {
    url: "https://www.linkedin.com/company/mobilejazz",
    name: "LinkedIn",
    iconClass: "fa-linkedin"
  },
  {
    url: "https://twitter.com/mobilejazzcom",
    name: "Twitter",
    iconClass: "fa-twitter"
  },
  {
    url: "https://www.facebook.com/mobilejazzcom",
    name: "Facebook",
    iconClass: "fa-facebook"
  },
  {
    url: "https://www.instagram.com/mobilejazz/",
    name: "Instagram",
    iconClass: "fa-instagram"
  }
];
const Response = ({ name }) => {
  return (
    <div
      style={{
        maxWidth: "480px",
        textAlign: "center",
        margin: "100px auto",
        padding:"16px",
        background:"#333",
        borderRadius:"8px"
      }}
    >
      <h4>
        Hey {name} thanks for you application, we will contact you shortly,
        until then check us out here.
      </h4>
      {socialMediaHandles.map(handle => {
        return (
          <a
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
            href={handle.url}
          >
            <span className={`fab fa-2x ${handle.iconClass}`} />
          </a>
        );
      })}
    </div>
  );
};

export default Response;
