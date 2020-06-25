import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute } from './utils/AuthRouter';
import { LoginRoute } from './utils/LoginRouter'
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
                <LoginRoute path='/login' component={LoginView}/>
                <LoginRoute path='/registration' component={RegisterView}/>
                <AuthRoute path='/home' component={HomeView}/>
                <AuthRoute path='/details' component={BookDetailsView}/>
                <AuthRoute path='/cart' component={CartView}/>
                <AuthRoute path='/orders' component={OrdersView}/>
                <AuthRoute path='/profile' component={ProfileView}/>
                <AuthRoute path='/statistic' component={OwnStatisticView}/>
                <Route path='/admin' component={AdminRoute}/>
                <Redirect from="/*" to="/login" />
            </Switch>
        </Router>
    )
}