import React, { useState, useEffect } from 'react';
import web3 from './web3';

function Balance() {
const [balance, setBalance] = useState('');

useEffect(() => {
const getBalance = async () => {
const accounts = await web3.eth.getAccounts();
const token = new web3.eth.Contract(ABI, address);
const balance = await token.methods.balanceOf(accounts[0]).call();
setBalance(balance);
};
getBalance();
}, []);

return (
<div>
<h2>Your Token Balance: {balance}</h2>
</div>
);
}

export default Balance;