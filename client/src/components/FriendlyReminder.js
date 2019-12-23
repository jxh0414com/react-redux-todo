import React, { Fragment } from "react";
import { Message, Responsive } from "semantic-ui-react";

const FriendlyReminder = () => {
  return (
    <Fragment>
      <Responsive maxWidth={767}>
        <Message warning style={{ width: "100%" }}>
          <Message.Header>Thank You for visiting the site</Message.Header>
          <p>You can test out the site, but please delete after</p>
        </Message>
      </Responsive>

      <Responsive minWidth={768}>
        <Message warning style={{ width: 200, margin: "0 0 25px 25px" }}>
          <Message.Header>Thank You for visiting the site</Message.Header>
          <p>You can test out the site, but please delete after</p>
        </Message>
      </Responsive>
    </Fragment>
  );
};

export default FriendlyReminder;
