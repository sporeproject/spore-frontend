import React from 'react';

import './BSCBridge.css';

export default class BSCBridge extends React.Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "/bscbridge.js";
        script.async = true;
        document.body.appendChild(script);
    }

  render() {
    return (
        <div class="container py-5" id="bridge">
            <div class="row py-5">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-8">
                            <h2>BSC / SPORE Bridge</h2>
                        </div>
                        <div class="col-lg-4 text-right">
                            <button class="btn btn-light">Connect wallet</button>
                        </div>
                    </div>
                    <div class="wrapBridge pt-2">
                        <div class="row rowBridge">
                            <div class="col-lg-6 col-coin pr-lg-0">
                                <div class="card px-lg-5 rounded-0 h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>FROM</span>  Binance Smart Chain</h5>
                                        <p class="card-text">Balance : <span id="balance">2.67</span></p>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select...</button>
                                                <div class="dropdown-menu">
                                                    <button role="menuitem" class="dropdown-item" tabindex="-1" ><img src="logos/bnb.png" alt="BNB" /> BNB</button>
                                                    <button role="menuitem" class="dropdown-item" tabindex="-1" ><img src="logos/cake.png" alt="BNB" /> CAKE</button>
                                                    <button role="menuitem" class="dropdown-item" tabindex="-1" ><img src="logos/grt.png" alt="BNB" /> GRT</button>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="0.0" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button">MAX</button>
                                            </div>
                                        </div>
                                        <label class="py-2"><input type="checkbox" name="pay-fees-spore" value="1" /> Pay AVAX fees with SPORE</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-coin pr-lg-0 d-none">
                                <div class="card px-lg-5 rounded-0 h-100"  id="reverted-1">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>TO  (estimated)</span>  Binance Smart Chain</h5>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select...</button>
                                                <div class="dropdown-menu">
                                                    <button role="menuitem" class="dropdown-item" tabindex="-1" ><img src="logos/bnb.png" alt="BNB" /> BNB</button>
                                                    <button role="menuitem" class="dropdown-item" tabindex="-1" ><img src="logos/cake.png" alt="BNB" /> CAKE</button>
                                                    <button role="menuitem" class="dropdown-item" tabindex="-1" ><img src="logos/grt.png" alt="BNB" /> GRT</button>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="0.0" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button">MAX</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="arrow"><button class="btn btn-outline-light inverted" id="btn-arrow"><i class="fa fa-arrow-right"></i></button></div>
                            <div class="col-lg-6 col-coin pl-lg-0" id="reverted-2">
                                <div class="card px-lg-5 rounded-0 h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>TO (estimated)</span> Spore</h5>
                                        <p>Price : 7775920000000 SPORE per BNB</p>
                                        <p><img src="spore_128.png" class="logo" alt="Spore Finance" height="32"/> <span class="final-spores">45351634825845.951432785</span> SPORE</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-coin pl-lg-0 d-none">
                                <div class="card px-lg-5 rounded-0 h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>FROM</span> Spore</h5>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="0.0" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button">MAX</button>
                                            </div>
                                        </div>
                                        <label class="py-2"><input type="checkbox" name="pay-fees-spore" value="1" /> Pay AVAX fees with SPORE</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="offset-lg-3 col-lg-6 text-center py-4">
                                <button class="btn btn-primary btn-lg w-100" id="swap-btn">TRANSFER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}
