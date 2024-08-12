import './CurrencyStyling.css'
import { useEffect, useState, useContext } from 'react'
import AppContext from '../AppContext'

const CurrencyDropdown = () => {
    const [currencyCodes, setCurrencyCodes] = useState([])

    const { setFromCurrency, setToCurrency } = useContext(AppContext)

    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/cc62d6e02ce320c8d60cefd7/codes')
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data)
            setCurrencyCodes(data.supported_codes)
        })

        const data = {
            "result": "success",
            "documentation": "https://www.exchangerate-api.com/docs",
            "terms_of_use": "https://www.exchangerate-api.com/terms",
            "supported_codes": [
                [
                    "AED",
                    "UAE Dirham"
                ],
                [
                    "AFN",
                    "Afghan Afghani"
                ],
                [
                    "SYP",
                    "Syrian Pound"
                ],
                [
                    "SZL",
                    "Eswatini Lilangeni"
                ],
                [
                    "THB",
                    "Thai Baht"
                ],
            ]
        }
        setCurrencyCodes(data.supported_codes)
    }, [])

    const handleFromCurrencyChange = (event) => {
        console.log(event.target.value)
        setFromCurrency(event.target.value)
    }

    const handleToCurrencyChange = (event) => {
        console.log(event.target.value)
        setToCurrency(event.target.value)
    }

    return (
        <div className="container">
            <p>I want to convert</p>
            <select name="currency" id="currencySelect" onChange={handleFromCurrencyChange}>
                {
                    currencyCodes.map(code => {
                        return <option value={code[0]}>{code[0]}</option>
                    })
                }
            </select>
            <p>to</p>
            <select name="currency" id="currencySelect" onChange={handleToCurrencyChange}>
                {
                    currencyCodes.map(code => {
                        return <option value={code[0]}>{code[0]}</option>
                    })
                }
            </select>
        </div>
    )
}

export default CurrencyDropdown
