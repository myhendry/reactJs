import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../common/TextInput";
// import { login, socialLogin } from '../authActions'
// import SocialLogin from '../SocialLogin/SocialLogin'

// const actions = {
//   login,
//   socialLogin
// }

const LoginForm = ({ login, handleSubmit, error }) => {
  return (
    <Form size="large">
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        {/* <SocialLogin socialLogin={socialLogin} /> */}
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  null
)(reduxForm({ form: "loginForm" })(LoginForm));
