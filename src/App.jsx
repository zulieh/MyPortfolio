import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
	return (
		<Router>
			<div className='app'>
				<Navbar />

				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/About' exact element={<About />} />
					<Route path='/Skills' exact element={<Skills />} />
					<Route path='/Work' exact element={<Work />} />
					<Route path='/Contact' exact element={<Contact />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	)
}

export default App
