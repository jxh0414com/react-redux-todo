import React from "react";
import { Responsive } from "semantic-ui-react";

const Footer = () => {
  return (
    <Responsive minWidth={768}>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          padding: "10px 0",
          background: "rgba(77,143,240,1)",
          textAlign: "center"
        }}
      >
        <p>Juhuang Xue &copy; 2019. React-Redux-Todo</p>
      </div>
    </Responsive>
  );
};

export default Footer;
