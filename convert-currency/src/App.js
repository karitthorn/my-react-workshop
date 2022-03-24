import "./components/CurrencyComponent";
import money from "./img/money.png";
import { useEffect, useState } from "react";

import CurrencyComponent from "./components/CurrencyComponent";

function App() {
  const [currencyChoice, setCurrencyChoice] = useState([]);

  const [fromCurrency, SetFromCurrency] = useState("USD");
  const [toCurrency, SetToCurrency] = useState("THB");

  const [amount, setAmount] = useState(1);
  const [exchangerate, setexchangerate] = useState(0);

  const [checkFromCurrency, setcheckFromCurrency] = useState(true);

  let fromAmount, toAmount;

  if (checkFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangerate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangerate).toFixed(2);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyChoice([...Object.keys(data.rates)]);
        setexchangerate(data.rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]);

  const amountFromCurrency =(e)=>{
      setAmount(e.target.value)
      setcheckFromCurrency(true);
  }
  const amountToCurrency =(e)=>{
    setAmount(e.target.value)
    setcheckFromCurrency(false);
  }

  return (
    <>
      <img src={money} alt="logo" className="money-img" />
      <h1>เเปลงสกุลเงิน</h1>
      <div className="container">
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => SetFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency}
        />
        <div className="equal"> = </div>
        <CurrencyComponent
          currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e) => SetToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency}

        />
      </div>
    </>
  );
}

export default App;
