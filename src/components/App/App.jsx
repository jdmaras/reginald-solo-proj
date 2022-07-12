import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import FanClub from '../FanClub/FanClub';
import Footer from '../Footer/Footer';
import InfoReg from '../InfoReg/InfoReg';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import MerchAdminItemAdd  from '../MerchAdminItemAdd/MerchAdminItemAdd';
import MerchAdminEdit from '../MerchAdminEdit/MerchAdminEdit';
import MerchCartView from '../MerchCartView/MerchCartView';
import MerchStore from '../MerchStore/MerchStore';
import NavigationReg from '../NavigationReg/NavigationReg';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import RegisterPage from '../RegisterPage/RegisterPage';

// API_KEY = 
// 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


function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>

        <NavigationReg />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          <Route
            exact
            path="/home"
          >
              <LandingPage />
          </Route>
          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/inforeg"
          >
            <InfoReg />

          </Route>
          <Route
            exact
            path="/fanclub"
          >
            <FanClub />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>
          <Route
          exact
          path="/merch"
          >
            <MerchStore />
          </Route>
          <Route
          exact
          path="/merchcartview"
          >
            <MerchCartView />
          </Route>
          
          <Route 
          exact 
          path="/merch/:id/edit">
            <MerchAdminEdit />
          </Route>

            <Route
            exact
            path="/merchadd"
            >
              <MerchAdminItemAdd />
            </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>
          
          {/* If none of the other routes matched, we will show a 404.
          <Route>
            <h1>404</h1>
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
