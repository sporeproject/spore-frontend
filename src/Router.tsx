import React from 'react';
import { HashRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MyParticles from './components/Particles';
import ComingSoon from './components/ComingSoon';
import Information from './components/Information';

const Router = () => {
  return (
    <ReactRouter>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <MyParticles />
              <Information />
            </>
          )}
        />
        <Route exact path='/nft' render={() => <ComingSoon />} />
        <Route exact path='/bsc-bridge' render={() => <ComingSoon />} />
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
