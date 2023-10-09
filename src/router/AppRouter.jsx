import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../home/pages/Home"
import { App } from "../app/pages/App"
import { useAuthStore } from '../hooks/useAuthStore'
import { useEffect } from "react"
import { AppAdmin } from "../admin/pages/AppAdmin"


export const AppRouter = () => {
  const { status, tokensito, user } = useAuthStore();
  const { rol } = user;
  useEffect(() => {
    tokensito()

  }, [])

  if(status === 'cheking'){
    return ( <div>cargando..............</div> )
  
  }
  

  return (
    <>
        <Routes>

            {( status === 'nelauth' )?(
              <>
                <Route path="home" element={<Home/>} />
                <Route path="/*" element={<Navigate to="/home" />} />
              </>
            )
            :(status === 'sisauth' && rol === 'Usuario')?
            <>
              <Route path="app" element={<App/>} />
              <Route path="home" element={<Navigate to="/app" />} />
              <Route path="/*" element={<Navigate to="/app" />} />
              <Route path="app/*" element={<Navigate to="/app" />} />
            </>
            :(status === 'sisauth' && rol === 'Administrador')?
            <>
            <Route path="admin" element={<AppAdmin/>}/>
            <Route path="home" element={<Navigate to="/admin" />} />
            <Route path="/*" element={<Navigate to="/admin" />} />
            <Route path="admin/*" element={<Navigate to="/admin" />} />
            
            </>
            :''
          }



        </Routes>
    
    </>
  )
}
