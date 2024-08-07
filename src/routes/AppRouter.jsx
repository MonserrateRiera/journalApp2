import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () =>{




    return (
        <Routes>
            {/* Rutas para el login */}
            <Route path="/auth/*" element = { <AuthRoutes /> } />

            {/* Rutas para la página en general  */}
            <Route path="/*" element = { <JournalRoutes /> } />
        </Routes>
    )
}