import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {HomeView} from './pages/HomeView'
import {LoginView} from './pages/LoginView'
import {BookDetailsView} from './pages/BookDetailsView'
import {CartView} from './pages/CartView'
import {OrdersView} from './pages/OrdersView'
import {AdminView} from './pages/AdminView'

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={LoginView}/>
                    <Route path='/home' component={HomeView}/>
                    <Route path='/details' component={BookDetailsView}/>
                    <Route path='/cart' component={CartView}/>
                    <Route path='/orders' component={OrdersView}/>
                    <Route path='/admin' component={AdminView}/>
                    <Redirect from="/*" to="/login" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
