import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'



const LoginForm = () => (


    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' id="login">
      <Grid.Column style={{ maxWidth: 450 }}>

        <Form size='large'>
          <Segment stacked>
            <Header as='h2' color='blue' textAlign='center'> Login to your account</Header>

            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='blue' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <p>Don't Have Account </p> 
          <a href='https://www.gmail.com'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
)

export default LoginForm