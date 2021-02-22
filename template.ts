// The signature provider allows us to sign the request
import { EthereumPrivateKeySignatureProvider } from '@requestnetwork/epk-signature';
// RequestNetwork is the interface we will use to interact with the Request network
import * as RequestNetwork from '@requestnetwork/request-client.js';

import { payRequest, approveErc20IfNeeded } from "@requestnetwork/payment-processor";

import { ethers } from "ethers";

// Payee Identity & Private key
const payeeIdentity = {
  type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
  value: '0x02Eb660017B085B6e33BC4eCa88b545320753501',
};
const payeeSignatureInfo = {
  method: RequestNetwork.Types.Signature.METHOD.ECDSA,
  privateKey: '0x0c5b39501a954ee233dc632149dabb88e2b94f599f0201aafb85012f9b59723b',
};

// Payer Identity & Private key
const payerIdentity = {
  type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
  value: '0xd39e659BDA21Ea7252f75875EB88d9292f5ED95f',
};
const payerSignatureInfo = {
  method: RequestNetwork.Types.Signature.METHOD.ECDSA,
  privateKey: '0x7e1d3bc9732f61fc9ecaa5a2ad2ca50ade7e61f3d29cf17ba41d30634218cd88',
};


// Signature provider

// Initialize RequestNetwok with signature provider and the node connection configuration 

// The main request info (currency, amount, payee identity and payer identity)

// Payment network information

// request creation parameters (main info, payment network, signer)


(async () => {
    // Create the request

    // Accept the request
    
    
    // Ethers provider et Wallet for the payment on ethereum
    const provider = new ethers.providers.InfuraProvider('rinkeby', 'aeae830838614da186df7984467a2d2d');
    const wallet = new ethers.Wallet(payerSignatureInfo.privateKey, provider);

    // Pays the request

})();