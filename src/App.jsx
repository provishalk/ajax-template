import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3'
import './App.css'

function App() {
  return (
    <div className="container">
      <nav>
        <h1>🍽️ My Meal Planner</h1>
        <Link to="/">🏠 Home</Link> | <Link to="/form1">🥞 Breakfast</Link> |{' '}
        <Link to="/form2">🍛 Lunch</Link> | <Link to="/form3">🍲 Dinner</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
      </Routes>
    </div>
  )
}

export default App
