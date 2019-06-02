import React from 'react';
import MainDisplay from './Components/MainDisplay'
import EditTodo from './Components/EditTodo'
import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
        <Route component={MainDisplay} path='/' exact />
        <Route component={EditTodo} path='/edit' />
    </Switch>
)