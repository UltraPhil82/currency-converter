import './App.css'
import CurrencyDropdown from './components/CurrencyDropdown'
import CurrencyConverter from './components/CurrencyConverter';
import { useState } from 'react'
import AppContext from './AppContext';

function App() {
  const [fromCurrency, setFromCurrency] = useState("SGD")
  const [toCurrency, setToCurrency] = useState("USD")

  return (
    <>
      <AppContext.Provider value={{
        fromCurrency,
        toCurrency,
        setFromCurrency,
        setToCurrency
      }}>
        <h1>Currency Converter</h1>
        <CurrencyDropdown />
        <CurrencyConverter />
      </AppContext.Provider>
    </>
  )
}

export default App;
