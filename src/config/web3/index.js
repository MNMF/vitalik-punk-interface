import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

const connector = new InjectedConnector({
     supportedChainIds: [
         1, 3, 4, 5, 42
        ]
     })



const getLibrery = (provider) => {
    return new Web3(provider);

}

export { connector, getLibrery };