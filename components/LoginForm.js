import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common/Index';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser,
  networkFailed } from '../actions/Index';

class LoginForm extends Component{
  onEmailChange(text) {
		this.props.emailChanged(text);
  }
  onPasswordChange(text) {
		this.props.passwordChanged(text);
  }
  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input placeholder="user@gmail.com" label="Email"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email} />
        </CardSection>
        <CardSection>
						<Input
							secureTextEntry
							label="Passw"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>
          <CardSection>
            <Text> { this.props.error } </Text>
            <Text> { this.props.networkError } </Text>
          </CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
          </CardSection>
      </Card>
    );
  }
}

mapStateToProps = state => {
	return {
		email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    networkError: state.auth.networkError
	};
};

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser, networkFailed
})(LoginForm);
