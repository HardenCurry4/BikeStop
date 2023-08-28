import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../home/pages/Home"
import { Login } from "../auth/pages/Login"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={<Home/>} />


            <Route path="login" element={<Login/>} />
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    
    </>
  )
}
