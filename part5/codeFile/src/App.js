import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {MainPage} from "./Routes/MainPage/MainPage";
import MyHeader from "./MyHeader/MyHeader";
import MyFooter from "./MyFooter/MyFooter";

class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      isPanorama: false
    };
  }


  render() {
    return (
      <div className="App">
        <MyHeader/>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MainPage}/>
          </Switch>
        </HashRouter>
        <MyFooter/>
      </div>
    );
  }
}

export default App;
