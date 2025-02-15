import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App ! function calling </h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = " Rishabh is on field work"
const reactElement = React.createElement( // syntax to create element within variable
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser  // evaluated expression 
)

// const AnotherElement = ( //  same variable as ReactElement container but with correct syntax
//   <a href="hhttps://google.com" target='_blank'>Visit Google</a>
// )


ReactDOM.createRoot(document.getElementById('root')).
render(
  // reactElement
  // <App />

)
