import Chai from "./Chai";


function App() {

  const userName = "chai aur code"

  return (
    //   this <></> is called fragment
    <>
    <Chai />
    <h2>Rishabh {userName}</h2>
    {/* {} this is a expression, and {userName} it is evaluated expression, means whatever evaluation we have to done should be done under a variable, and only the variable name will be given inside the expression which holds the return value  */}
    <p>This is react class</p>
    </>
  )
}

export default App
