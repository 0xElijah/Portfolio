import React, { useEffect, useState } from 'react';
import * as solanaWeb3 from '@solana/web3.js';
import Wallet from './walletConnector';

export default function Gallery() {
  // console.log(solanaWeb3);

  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = (walletAddress) => {
    setWalletAddress(walletAddress);
  };

  useEffect(() => {
    console.log('hi!');
  });

  return (
    <div>
      nft viewer
      <Wallet connectWallet={connectWallet} />
    </div>
  );
}
