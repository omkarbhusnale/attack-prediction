
import React from 'react'

import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

import Footer from './Footer'
import ResponsiveContainer from './ResponsiveContainer';



const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>

      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>

            <p style={{ fontSize: '1.33em' }}>
              We provide solution to the organisations to make their system more secure.
              We provide optimal solution through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Want To Make Our Clients Secure.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              ipsum
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='src/images/img1.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


      <Footer />
   
  </ResponsiveContainer>
)

export default HomePage
