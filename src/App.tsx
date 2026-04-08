import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './pages/Login/LoginPage'
import { DashboardPage } from './pages/Dashboard/DashboardPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Placeholder routes */}
        <Route path="/watchlist"  element={<DashboardPage />} />
        <Route path="/portfolio"  element={<DashboardPage />} />
        <Route path="/markets"    element={<DashboardPage />} />
        <Route path="/alerts"     element={<DashboardPage />} />
        <Route path="/settings"   element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
