import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import BSCBridge from './pages/BSCBridge/BSCBridge';
import NFT from './pages/NFT/NFT';
import Gallery from './pages/NFT/Gallery/Gallery';
import Charter from './pages/NFT/Gallery/Charter';
import Asciid from './pages/NFT/Gallery/Asciid';
import SporeFairy from './pages/SporeFairy/SporeFairy';
import MyParticles from './components/Particles/Particles';
import Vote from './components/Vote/Vote';
import { ViewItem } from './pages/NFT/MarketPlace/ViewItem';
import NotFound from './pages/NotFound/NotFound';


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
        <Route exact path='/nft' >
          <NFT/>
        </Route>
        <Route exact path='/nft/:itemId' >
          <ViewItem/>
        </Route>
        <Route exact path='/bridge'>
          <BSCBridge />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/charter'>
          <Charter/>
        </Route>
        <Route exact path='/vote'>
          <Vote />
        </Route>
        <Route exact path='/airdrop'>
          <SporeFairy />
        </Route>
        <Route exact path='/asciid'>
          <Asciid />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
