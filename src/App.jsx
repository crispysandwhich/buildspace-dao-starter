import { useEffect, useMemo, useState } from "react";

// import thirdweb
import { useWeb3 } from '@3rdweb/hooks';

const App = () => {

  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("Address", address);

  // This is the case where we will handle the page when user hasnt connected their wallet
  // and are able to use the connectWallet function

  if(!address){
    return (
      <div className="landing">
        <h1>Welcome to NobleFarmerDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">Connect your wallet</button>
      </div>
    )
  }


  return (
    <div className="landing">
      <h1>Wallet connected ☑</h1>
    </div>
  );
};

export default App;
