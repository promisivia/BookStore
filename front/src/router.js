import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRouter';
import { AdminRoute } from "./pages/admin/AdminRouter";
import { history } from './utils/HistoryUtils'
import HomeView from './pages/HomeView'
import LoginView from './pages/role/LoginView'
import RegisterView from './pages/role/RegisterView'
import BookDetailsView from './pages/BookDetailsView'
import CartView from './pages/CartView'
import OrdersView from './pages/OrdersView'
import ProfileView from './pages/ProfileView';
import OwnStatisticView from './pages/admin/OwnStatisticView';

export default function BasicRouter() {
    return(
        <Router history={history}>
            <Switch>
                <Route path='/login' component={LoginView}/>
                <Route path='/registration' component={RegisterView}/>
                <PrivateRoute path='/home' component={HomeView}/>
                <PrivateRoute path='/details' component={BookDetailsView}/>
                <PrivateRoute path='/cart' component={CartView}/>
                <PrivateRoute path='/orders' component={OrdersView}/>
                <PrivateRoute path='/profile' component={ProfileView}/>
                <PrivateRoute path='/statistic' component={OwnStatisticView}/>
                <Route path='/admin' component={AdminRoute}/>
                <Redirect from="/*" to="/login" />
            </Switch>
        </Router>
    )
}