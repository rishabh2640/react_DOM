import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import './App.css'

function App() {
    const [amount, setAmount] = useState(0)
    const [fromValue, setFromValue] = useState("usd")
    const [toValue, setToValue] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(fromValue) // use Hook 'useCurrencyInfo', taking its return value into variable

    const options = Object.keys(currencyInfo)

    const swap = () => {
    setFromValue(toValue)
    setToValue(fromValue)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
    }

    const convert = () => {
    setConvertedAmount( amount * currencyInfo[toValue])
    }
    
    const BackgroundImage = 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 

    return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-300 p-10 flex flex-wrap flex-row">

            <img className='m-10 mx-auto h-75 rounded-2xl' src="https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" />
            <div className="w-full max-w-md mx-auto my-auto border border-gray-60 rounded-lg p-4 backdrop-blur-xs bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox // using Input Component 
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFromValue(currency)}
                            selectCurrency={fromValue}
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-3">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setToValue(currency)}
                            selectCurrency={toValue}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromValue.toUpperCase()} to {toValue.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
