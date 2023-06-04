import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Cyber Attack Prediction"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />

    <Header
      as="h2"
      content="Using MITRE CVE We Provide you Prediction Insights"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button as="a" primary size="huge">
      <Link to="/login">
        Predict For Your Organisation &nbsp;
        <Icon name="down arrow" />
      </Link>
    </Button>
  </Container>
);


HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
