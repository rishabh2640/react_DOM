
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL) // we can access .env elements like this most of the time... process.env._______ (in ReactApp usually) but sometimes there is different way to have access this .env file as we are using Vite React app.

  // access .env in Vite React app
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })) //this is how we can send action in a particular different variables
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  })






  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 text-center' >
      <div className="w-full block">
        <Header />
        <main>
          TODO : {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
