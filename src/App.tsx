import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import AdminPage from './components/AdminPage';
import ClientPage from './components/ClientPage';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config'


const App = () => {

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <Switch>
        <Route exact path={"/"} component={MainPage}></Route>
        <Route exact path={"/about"} component={AboutPage}></Route>
        <Route exact path={"/admin"} component={AdminPage}></Route>
        <Route exact path={"/client"} component={ClientPage}></Route>
      </Switch>
      {/* </ThemeProvider> */}
      {/* <MainPage/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
