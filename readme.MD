# XDC Network RPC Stability check  - code repository


## Step 1 : Clone the repository

```
 git clone https://github.com/GoPlugin/rpc-stability-check.git

```

## Step 2 : do install packages

```
npm install

```

## Step 3 : run the script

```
node index.js
```

## Results:

```
(base) ➜  rpc-stability git:(main) node index.js                                                            
RPC: https://rpc.ankr.com/xdc, Latest block: 82414874, Latency: 481 ms
Failed to fetch block or latency for RPC: https://xdc-mainnet.gateway.tatum.io. Error: Returned error: 
RPC: https://rpc1.xinfin.network, Latest block: 82414874, Latency: 678 ms
RPC: https://rpc.xinfin.network, Latest block: 82414874, Latency: 789 ms
Failed to fetch block or latency for RPC: https://rpc.xdcrpc.com. Error: invalid json response body at https://rpc.xdcrpc.com/ reason: Unexpected token < in JSON at position 0
RPC: https://erpc.xinfin.network, Latest block: 82414875, Latency: 840 ms
RPC: https://rpc.xdc.org, Latest block: 82414875, Latency: 908 ms
RPC: https://earpc.xinfin.network, Latest block: 82414875, Latency: 914 ms
RPC: https://erpc.xdcrpc.com, Latest block: 82414861, Latency: 1855 ms

Best RPC: https://erpc.xinfin.network
Block number: 82414875
Latency: 840 ms

```
