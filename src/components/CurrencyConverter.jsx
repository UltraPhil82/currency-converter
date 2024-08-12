import AppContext from '../AppContext'
import './CurrencyStyling.css'
import { useEffect, useState, useContext } from 'react'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(5)
    const [output, setOutput] = useState(3)

    const { fromCurrency, toCurrency } = useContext(AppContext)

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/cc62d6e02ce320c8d60cefd7/pair/${fromCurrency}/${toCurrency}/${amount}`)
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data)
            setOutput(data.conversion_result)
        })
    }, [amount, fromCurrency, toCurrency])

    const handleChange = (event) => {
        setAmount(event.target.value)
    }

    return (
        <div className='container'>
            <input 
                value={amount}
                placeholder="Enter amount"
                id="currencyInput"
                onChange={handleChange}
            >
            </input>
            <p>{fromCurrency}</p>
            <p>=</p>
            <p id='currencyOutput'>{output}</p>
            <p>{toCurrency}</p>
        </div>
    )

}

export default CurrencyConverter
