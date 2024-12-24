import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ChatInterface from './components/ChatInterface'
import Preferences from './components/Preferences'  
import ArchivedChats from './components/ArchivedChats'  
import Notifications from './components/Notifications'  

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/chat" /> : <Login setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/register" element={
            isAuthenticated ? <Navigate to="/chat" /> : <Register setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/chat" element={
            isAuthenticated ? <ChatInterface /> : <Navigate to="/login" />
          } />
          <Route path="/preferences" element={
            isAuthenticated ? <Preferences /> : <Navigate to="/login" />
          } />
          <Route path="/archived-chats" element={
            isAuthenticated ? <ArchivedChats /> : <Navigate to="/login" />
          } />
          <Route path="/notifications" element={
            isAuthenticated ? <Notifications /> : <Navigate to="/login" />
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App