import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import EditStock from './pages/EditStock';
import Report from './pages/Report';
import NewProduct from './pages/NewProduct';
import NewFornecedor from './pages/NewFornecedor';
import NewCategoria from './pages/NewCategoria';
import NewFabricante from './pages/NewFabricante';
import NewUsuario from './pages/NewUsuario';
import Home from './pages/Home';
import Authentictoken from './services/verificationToken'
import EditCategoria from './pages/EditCategoria';
import EditFornecedor from './pages/EditFornecedor';
import EditFabricante from './pages/EditFabricante';
export default function Routes() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            Authentictoken() ? (
                <Component {...props} />
            ) : (

                    <Redirect to={{ pathname: '/', state: { from: props.location } }}></Redirect>
                )
        )} />
    );

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/profile" component={Profile} exact />
                <PrivateRoute path="/product/new" component={NewProduct} />
                <PrivateRoute path="/product/edit" component={EditStock} />
                <PrivateRoute path="/categoria/edit" component={EditCategoria} />
                <PrivateRoute path="/report" component={Report} />
                <PrivateRoute path="/fornecedor/new" component={NewFornecedor} />
                <PrivateRoute path="/fornecedor/edit" component={EditFornecedor} />
                <PrivateRoute path="/categoria/new" component={NewCategoria} />
                <PrivateRoute path="/fabricante/new" component={NewFabricante} />
                <PrivateRoute path="/fabricante/edit" component={EditFabricante} />
                <Route path="/usuario/new" component={NewUsuario} />
                <PrivateRoute path="/app" component={() => (<h1>você está logado</h1>)} />
                <Route component={() => (<h1>404</h1>)}></Route>

            </Switch>
        </BrowserRouter>
    );
}