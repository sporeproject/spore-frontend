import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MyParticles from './components/Particles';
import Information from './components/Information';
import BSCBridge from './components/BSCBridge';
import NFT from './components/NFT/NFT';
import NFTGallery from './components/NFT/NFTGallery';
import ComingSoon from './components/ComingSoon';

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
        <Route exact path='/nft' render={() => <NFT />} />
        <Route exact path='/bridge' render={() => <BSCBridge />} />
        <Route exact path='/gallery' render={() => < NFTGallery/>} />
        <Route exact path='/coming-soon' render={() => < ComingSoon/>} />
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
