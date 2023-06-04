import React from "react";
import banner from "../images/img1.jpg";

import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";

const About = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Segment style={{ padding: "8em 0em", height: "100%" }} vertical>
                <Container fluid>
                    <Grid container stackable verticalAlign="middle" style={{ height: "100%" }}>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as="h3" style={{ fontSize: "2em" }}>
                                    We Help Companies and Companions
                                </Header>

                                <p style={{ fontSize: "1.33em" }}>
                                    We provide solutions to organizations to make their systems more secure. We provide optimal solutions through pure data analytics.
                                </p>
                                <Header as="h3" style={{ fontSize: "2em" }}>
                                    We Want To Make Our Clients Secure.
                                </Header>
                                <p style={{ fontSize: "1.33em" }}></p>
                            </Grid.Column>

                            <Grid.Column floated="right" width={6}>
                                <Image bordered rounded size="large" src={banner} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}

export default About;
