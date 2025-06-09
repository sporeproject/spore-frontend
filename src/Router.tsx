import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MyParticles from './components/Particles/Particles';
import Home from './pages/Home/Home';
import BSCBridge from './pages/BSCBridge/BSCBridge';
import NFT from './pages/NFT/NFT';
import Gallery from './pages/NFT/Gallery/Gallery';
import Charter from './pages/NFT/Gallery/Charter';
import Asciid from './pages/NFT/Gallery/Asciid';
import SporeFairy from './pages/SporeFairy/SporeFairy';
import Vote from './components/Vote/Vote';
import { ViewItem } from './pages/NFT/MarketPlace/ViewItem';
import NotFound from './pages/NotFound/NotFound';
import Identity from './pages/identity/Identity'


const Router = () => {
    return (
        <ReactRouter>
            <Header />
            <Routes>
                <Route path='/' element={(
                    <>
                        <MyParticles />
                        <Home />
                    </>
                )} />
                <Route path='/nft'  element={(<NFT />)} />
                <Route path='/nft/:itemId'  element={(<ViewItem />)} />
                <Route path='/bridge' element={(<BSCBridge />)} />
                <Route path='/gallery' element={(<Gallery />)} />
                <Route path='/charter' element={(<Charter />)} />
                <Route path='/vote' element={(<Vote />)} />
                <Route path='/airdrop' element={(<SporeFairy />)} />
                <Route path='/asciid' element={(<Asciid />)} />
                <Route path='/identity' element={(<Identity />)} />
                <Route path='*' element={(<NotFound />)} />

            </Routes>
            <Footer />
        </ReactRouter>
    );
};

export default Router;
