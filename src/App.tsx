import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from  './components/Home';
import Author from  './components/Author';


export interface IProps {}

export interface IState {}

class App extends React.Component<IProps, IState> {

  public componentDidMount() {
    
    this.setLogin();
  }

  public setLogin() {

    const isLogin = localStorage.getItem('isLogin');

    const pathname = window.location.pathname;

    if((isLogin === 'false' && pathname !== '/login' && pathname !== '/author') || (isLogin === 'false' && pathname === '/author')) {
        window.location.pathname = '/login';
    } else if(isLogin === 'true' && pathname !== '/home' && pathname !== '/author') {
      window.location.pathname = '/home';
    }
  }


  public render() {
      return (
        <Router>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path='/' key='0'><Redirect to="/login" /></Route>
              <Route exact path='/login' component={Login} key='1' />
              <Route exact path='/home' component={Home} key='2' />
              <Route exact path='/author' component={Author} key='3' />
            </Switch>
          </Suspense>
        </Router>
      );
  }
}

export default App;
