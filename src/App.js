import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/portfolio" element={<PortfolioPage />}></Route>
                <Route path="/portfolio/:category" element={<PortfolioPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
