import React, { useState } from 'react';
import web3 from './web3';

function Airdrop() {
const [address, setAddress] = useState('');
const [amount, setAmount] = useState('');

const handleAddressChange = (event) => {
setAddress(event.target.value);
};

const handleAmountChange = (event) => {
setAmount(event.target.value);
};

const handleSubmit = async (event) => {
event.preventDefault();
const accounts = await web3.eth.getAccounts();
const token = new web3.eth.Contract(ABI, address);
await token.methods.transfer(accounts[0], amount).send({ from: accounts[0] });
};

return (
<form onSubmit={handleSubmit}>
<div>
<label>Token Address:</label>
<input type="text" onChange={handleAddressChange} value={address} />
</div>
<div>
<label>Airdrop Amount:</label>
<input type="text" onChange={handleAmountChange} value={amount} />
</div>
<button type="submit">Airdrop Tokens</button>
</form>
);
}

export default Airdrop;