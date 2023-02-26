
import React from 'react'
import banner from "../images/img1.jpg"

import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

import ResponsiveContainer from './ResponsiveContainer';
import BarChart from './BarChart';
import LoginForm from './LoginForm';
import HistogramPlot from './HistogramPlot';
import Footer from './Footer'


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
              
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={banner} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Container>
      <HistogramPlot />
      <BarChart />
    </Container>


    <LoginForm />


    <Footer />
   
  </ResponsiveContainer>
)

export default HomePage
