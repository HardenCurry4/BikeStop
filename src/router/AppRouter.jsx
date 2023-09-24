import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../home/pages/Home"
import { App } from "../app/pages/App"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="/*" element={<Navigate to="/home" />} />


            <Route path="app" element={<App/>} />
            <Route path="app/*" element={<Navigate to="/app" />} />
        </Routes>
    
    </>
  )
}
