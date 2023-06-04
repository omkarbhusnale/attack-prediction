
import React from 'react'

import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'  

const Footer = () =>{
    return(
        <Segment inverted vertical
            style={{padding: '2em 1em'}}>
            <Container>
                <Grid divided inverted stackable>

                <Grid.Row>
                    
                    <Grid.Column width={4}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>Contact Us</List.Item>
                        </List>
                    </Grid.Column>
                    
                    <Grid.Column width={4}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>Vulnerability Prediction</List.Item>
                            <List.Item as='a'>MITRE CVE Logs</List.Item>
                            <List.Item as='a'>Security Measure</List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Header as='h4' inverted>
                            Footer Header
                        </Header>
                        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                    </Grid.Column>

                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;