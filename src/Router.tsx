import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import BSCBridge from './pages/BSCBridge/BSCBridge';
import NFT from './pages/NFT/NFT';
import Gallery from './pages/NFT/Gallery/Gallery';
import SporeFairy from './pages/SporeFairy/SporeFairy';
import MyParticles from './components/Particles/Particles';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Vote from './components/Vote/Vote';

const Router = () => {
  return (
    <ReactRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <>
            <MyParticles />
            <Home />
          </>
        </Route>
        <Route exact path='/nft'>
          <NFT />
        </Route>
        <Route exact path='/bridge'>
          <BSCBridge />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/coming-soon'>
          <ComingSoon />
        </Route>
        <Route exact path='/vote'>
          <Vote />
        </Route>
        <Route exact path='/airdrop'>
          <SporeFairy />
        </Route>
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
