import React from 'react';
import Home from "./Home";
import Router from "./Router"
import ClientLists from "./ClientLists";

import { Route, Redirect, Switch } from 'react-router-dom';
function Body() {
    return (
        <div>
            <Switch>
                <Route path="/OpenwrtDwash" exact component={Home} />
                <Route path="/OpenwrtDwash/clientlists" exact component={ClientLists} />
                <Route path="/OpenwrtDwash/router" exact component={Router} />
                <Redirect from="/" to="/OpenwrtDwash/home" />
            </Switch>
        </div>
    );
}

export default Body;