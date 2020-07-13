import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom"
import BooksManageView from "./BooksManageView";
import OrdersManageView from "./OrdersManageView";
import UsersManageView from './UsersManageView'
import SaleStatisticView from "./SaleStatisticView";
import ConsumeRecordView from "./ConsumeStatisticView"
import OwnConsumeRecordChart from './OwnStatisticView'

export function AdminRoute() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/manage/book`}>
                <BooksManageView/>
            </Route>
            <Route path={`${match.path}/manage/order`}>
                <OrdersManageView/>
            </Route>
            <Route path={`${match.path}/manage/user`}>
                <UsersManageView/>
            </Route>
            <Route path={`${match.path}/statistic/sale`}>
                <SaleStatisticView/>
            </Route>
            <Route path={`${match.path}/statistic/consume`}>
                <ConsumeRecordView/>
            </Route>
            <Route path={`${match.path}/statistic/own`}>
                <OwnConsumeRecordChart/>
            </Route>
        </Switch>
    )
}