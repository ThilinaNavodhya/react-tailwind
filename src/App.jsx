import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Nevbar from './components/Nevbar';
import Sidebar from './components/Sidebar';
import Footer from './components/footer';
import { ThemeProvider } from './components/ThemeContext'; 


function App() {
  return (
    <ThemeProvider> 
      <div>
        <Nevbar />
        <Sidebar />
        <Dashboard />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App
