import "./App.css"
import { Vocab } from "./vocabList"
import { useState } from "react";
function App() {
	const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length))
    const [price, setPrice ] = useState();
	const [currency, setCurrency] = useState();
	const [stockName, setStockName] = useState();
	const [cryptoName, setCryptoName] = useState();
	fetch(`https://alpha-vantage.p.rapidapi.com/query?from_currency=${cryptoName}&function=CURRENCY_EXCHANGE_RATE&to_currency=${currency}`, {
			"method": "GET",
			"headers": {
			"x-rapidapi-key": "insert your key here",
			"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
	})
	.then(response => {
	return response = response.json();
	})
	.then(data => {
		const tempPrice = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
		setPrice(tempPrice)
	})
	.catch(err => {
	console.error(err);
	})

	const [name, setName] = useState();
	const [curr, setCurr] = useState();

	const handleSubmit = () =>{
		// e.preventDefault();
		console.log("name is" +  name +  "curr is" + curr);
		setCryptoName(name);
		setCurrency(curr);
	}

	const changeName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	}
	const changeCurrency = (e) => {
		setCurr(e.target.value);
	}
	
	return (
		<div className="App">
		<form onSubmit = {handleSubmit}>
			
				<input type="text" name="cryptoName" placeholder = "Input crypto or stock name" onChange = {(e) => changeName(e)}/>
				<input type="text" name="currency" placeholder = "Currency" onChange = {(e) => changeCurrency(e)}/>
				<input type="submit" value="Submit" />
		</form>
		
			<h1>{Vocab[randomNum].wordName}</h1>
			<h3>{Vocab[randomNum].wordMeaning}</h3>
			<h1>Current Price is:</h1>
		    <h3>{price}</h3>
			
		</div>
	)
}

export default App
