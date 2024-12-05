const { Web3 } = require('web3');

// List of RPC endpoints from Chainlist
const rpcEndpoints = [
    'https://rpc.xdc.org',
    'https://erpc.xdcrpc.com',
    'https://rpc.ankr.com/xdc',
    'https://rpc1.xinfin.network',
    'https://earpc.xinfin.network',
    'https://rpc.xinfin.network',
    'https://rpc.xdcrpc.com',
    'https://erpc.xinfin.network',
    'https://xdc-mainnet.gateway.tatum.io'
];

async function getLatestBlockAndLatency(rpcUrl) {
    const web3 = new Web3(rpcUrl);
    const start = Date.now();
    try {
        const latestBlock = await web3.eth.getBlockNumber();
        const latency = Date.now() - start; 
        console.log(`RPC: ${rpcUrl}, Latest block: ${latestBlock}, Latency: ${latency} ms`);
        return { rpcUrl, latestBlock, latency };
    } catch (error) {
        console.error(`Failed to fetch block or latency for RPC: ${rpcUrl}. Error: ${error.message}`);
        return { rpcUrl, latestBlock: -1, latency: Infinity }; 
    }
}

async function findBestRPC() {
    try {
        const results = await Promise.all(rpcEndpoints.map(getLatestBlockAndLatency));

        const best = results.reduce((prev, curr) => {
            if (curr.latestBlock > prev.latestBlock) {
                return curr; 
            } else if (curr.latestBlock === prev.latestBlock) {
                return curr.latency < prev.latency ? curr : prev; 
            } else {
                return prev;
            }
        });

        if (best.latestBlock === -1) {
            console.log('No valid RPC responded.');
        } else {
            console.log(`Best RPC: ${best.rpcUrl}`);
            console.log(`Block number: ${best.latestBlock}`);
            console.log(`Latency: ${best.latency} ms`);
        }
    } catch (error) {
        console.error('Error while finding the best RPC:', error.message);
    }
}

// call the function
findBestRPC();
