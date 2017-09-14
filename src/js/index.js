import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";

import Layout from "./pages/Layout.js";
import UserList from "./pages/UserList.js";
import UserDetails from "./pages/UserDetails.js";
import UserCreate from "./pages/UserCreate.js";
import UserEdit from "./pages/UserEdit.js";
import Header from "./components/Header.js";
import Overview from "./components/fakepages/Overview.js";
import Sites from "./components/fakepages/Sites.js";
import Credits from "./components/fakepages/Credits.js";
import Payment from "./components/fakepages/Payment.js";
import Logout from "./components/fakepages/Logout.js";

const App = React.createClass({
  render: () => {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/user/:id/edit" component={UserEdit} />
            <Route path="/user/:id" component={UserDetails} />
          </Switch>
          <Route exact path="/new" component={UserCreate} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/sites" component={Sites} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/credits" component={Credits} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={UserList} />
        </Layout>
      </BrowserRouter>
    );
  }
});

export default App;
