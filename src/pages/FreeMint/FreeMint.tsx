
// // import { useState, useEffect } from 'react';
// // import { ContractAddresses } from '../../utils/addresses';
// import UnlockMetamask from '../../components/UnlockMetamask/UnlockMetamask';
// import InstallMetamask from '../../components/InstallMetamask/InstallMetamask';
// import { Helmet } from 'react-helmet';
// import { useAccount, useChainId } from 'wagmi';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// // import { readContract  } from "@wagmi/core";
// // import { wagmiConfig } from '../../wagmi-config';

// import './FreeMint.scss';



// // const AvaxChainId = 43114;
// // const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.sporeproject.com";

// const FreeMint = () => { 
//     const { address } = useAccount();
//     const chainId = useChainId();


//   const Metadata = () => (
//     <Helmet>
//       <title>Spore Free Mint - Spore</title>
//       <meta
//         name='description'
//         content='Mint an NFT if you are a spore holder. Free minting is available for all spore holders for a limited time.'
//       />
//       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//       <link rel="manifest" href="/site.webmanifest" />
//       <meta name="msapplication-TileColor" content="#da532c" />
//       <meta name="theme-color" content="#ffffff" />
//     </Helmet>
//   );

//     return (
//         <>
//           <Metadata />
//           <div className='container information overflow-hidden position-relative'>
//             <h2 className='feature pb-4 py-5 text-center'>Spore NFT Marketplace</h2>
    
//             <div className='row pb-5'>
//               <div className='col-md-4'>
//                   <span>Last traded price:</span>
//                   <h4>
                   
//                     <img
//                       className='mr-2'
//                       id='cur-logo'
//                       height='28px'
//                       width='28px'
//                       src='avalanche-logo.png'
//                       alt='Avalanche Network'></img>
//                   </h4>

//               </div>
    

    
 
//             </div>
//           </div>
    
//           <section className='bg-white-darker'>
//             <div className='container information py-5'>
//               <div className='row pb-5 buttons-wrap'>
//                 <div>
//                   <ConnectButton />
//                 </div>
//                 <UpdateBox onClick={() => update_nft_db(true)} circleColor={colorStatus} >{textStatus}</UpdateBox>
//               </div>
//               <div className='row'>
//                 <div className='col-md-12'>
//                   <div className='row pb-5'>
//                     <MarketPlaceView
//                       bazaar={bazaar}
//                       isLoading={loading}
                    
//                     />
//                   </div>
//                   <p className='text-muted'>
//                     <b>*Note: </b>Default is 10 million SPORE, that will be burned
//                     whenever any NFT is bought.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
    
//           {address ? (
//             <section className='bg-white'>
//               <div className='container informations py-5'>
//                 <div className='row py-5'>
//                   <div className='col-md-12 text-center'>
//                     <h2>
//                       Your NFTs{' '}
//                       <small className='text-muted font-italic'>
//                         ({chainId ? balance : 0})
//                       </small>
//                     </h2>
//                   </div>
//                   {isNetworkAvalanche() ? (
//                     <div className='row'>
//                       {balance > 0n ? (
//                         <ReturnTokenURI
//                           tokensOfOwner={tokensOfOwner}
//                           chainId={chainId}
//                           address={address!}
//                           onUpdate={getBalance}
//                         />
//                       ) : (
//                         <> You dont own any NFTs yet! </>
//                       )}
//                     </div>
//                   ) : (
//                     <div className='col-md-12 text-center'>
//                       {' '}
//                       <UnlockMetamask message='Wrong Network, please switch' />{' '}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </section>
//           ) : (
//             <InstallMetamask />
//           )}
//         </>
//       );


// }

// export default FreeMint;