import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"



function App() {
  const [userInput, setUserInput,] = useState(
    {
        initialInvestment: 10000,
        annualInvestment: 20000,
        expectedReturn: 4,
        duration: 10
    }
  )

const inputIsValid = userInput.duration >= 1;

  function handleChange(identifierInput, newValue){
    setUserInput((prevData) => {
        return {...userInput,
            [identifierInput]: +newValue}
    })
  }

  return (
    <>
     <Header />
    <UserInput userInput={userInput} OnChangeInput={handleChange}/>
    {!inputIsValid && <p className="center"> Please enter duration greater than 0</p>}
    {inputIsValid && < Results input={userInput} />}
    </>
   
  )
}

export default App
