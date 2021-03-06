import React, { useEffect, useState } from 'react';
import * as solanaWeb3 from '@solana/web3.js';
import Wallet from './walletConnector';

export default function Gallery() {
  // console.log(solanaWeb3);

  const connectNet = async () => {
    const connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl('devnet'),
      'confirmed'
    );

    const publicKey = connection.getTokenLargestAccounts(
      new solanaWeb3.PublicKey('AFYUdT42DtrBZXEoFazcjcWnxc9CvkKX1hSwYca7Ecis')
    );

    let block = await connection.getBalance(
      'AFYUdT42DtrBZXEoFazcjcWnxc9CvkKX1hSwYca7Ecis'
    );
    console.log(block);
  };

  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = (walletAddress) => {
    setWalletAddress(walletAddress);
  };

  useEffect(() => {
    console.log('hi!');
  });

  connectNet();
  return (
    <div>
      nft viewer
      <Wallet connectWallet={connectWallet} />
    </div>
  );
}
