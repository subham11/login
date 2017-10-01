import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={ LoginForm } title="Please Login" />
      </Scene>
      <Scene key = "employee">
        <Scene key="employeeList" component={ EmployeeList } title="Employee List"
        onLeft = { () => Actions.employeeCreate() }
        leftTitle = 'Add'
        rightTitle = 'Logout!'
        onRight = { () => Actions.login({ type: 'reset' }) } intial/>
        <Scene key = "employeeCreate" component = { EmployeeCreate } title = "Add Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
