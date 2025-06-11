import { useState } from 'react'
import './Home.css'

function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    personality: '',
    fruit: '',
    breakfastTime: '',
    mood: '',
    fightChoice: '',
    mailmodoThoughts: '',
    emailExperience: '',
    hobbies: [],
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value),
      }))
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleResubmit = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      personality: '',
      fruit: '',
      breakfastTime: '',
      mood: '',
      fightChoice: '',
      mailmodoThoughts: '',
      emailExperience: '',
      hobbies: [],
    })
    setSubmitted(false)
  }

  return (
    <div className="home-container">
      <h2>🎉 Let’s break the ice a little...</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="fun-form">
          <input
            name="name"
            placeholder="👤 Your full name?"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="📬 Email?"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="📞 Phone number?"
            onChange={handleChange}
            required
          />

          <label>🦉 Morning bird or night owl?</label>
          <select name="personality" onChange={handleChange}>
            <option value="">Pick one</option>
            <option value="owl">Night Owl 🦉</option>
            <option value="bird">Early Bird 🐤</option>
            <option value="sloth">Professional Sloth 🦥</option>
          </select>

          <label>🍉 If you were a fruit, you'd be:</label>
          <input
            name="fruit"
            placeholder="Pineapple? Grape? Durian?"
            onChange={handleChange}
          />

          <label>⏰ What’s your dream breakfast time?</label>
          <input
            type="time"
            name="breakfastTime"
            onChange={handleChange}
          />

          <label>🌦️ Mood check!</label>
          <select name="mood" onChange={handleChange}>
            <option value="">How are you feeling?</option>
            <option value="sunny">🌞 Sunny & productive</option>
            <option value="cloudy">☁️ Meh... just meh</option>
            <option value="stormy">🌩 Existential crisis?</option>
            <option value="rainbow">🌈 On top of the world!</option>
          </select>

          <label>🦆⚔️ Would you rather fight...</label>
          <select name="fightChoice" onChange={handleChange}>
            <option value="">This defines you.</option>
            <option value="ducks">100 duck-sized horses 🐎🐤</option>
            <option value="horse">1 horse-sized duck 🦆🦖</option>
            <option value="neither">I'd rather meditate 🧘</option>
          </select>

          <label>📬 What’s your experience with email marketing?</label>
          <input
            name="emailExperience"
            placeholder="Like Mailchimp? Mailmodo? etc."
            onChange={handleChange}
          />

          <label>📧 What do you think of Mailmodo?</label>
          <textarea
            name="mailmodoThoughts"
            placeholder="Be honest — but not too honest 😉"
            onChange={handleChange}
          ></textarea>

          <label>🎨 Pick your hobbies:</label>
          <div className="checkbox-group">
            {['Gaming', 'Cooking', 'Reading', 'Coding', 'Meme-making'].map(
              (hobby) => (
                <label key={hobby}>
                  <input
                    type="checkbox"
                    name="hobbies"
                    value={hobby}
                    checked={formData.hobbies.includes(hobby)}
                    onChange={handleChange}
                  />
                  {hobby}
                </label>
              )
            )}
          </div>

          <button type="submit">🚀 Blast Off</button>
        </form>
      ) : (
        <div className="thank-you-card">
          <h3>Thanks for the laughs, {formData.name}! 🤗</h3>
          <p>Your responses have been stored in our ultra-secure 🤖 AI vault.</p>
          <ul>
            <li>Fruit spirit: <strong>{formData.fruit}</strong></li>
            <li>Battle plan: <strong>{formData.fightChoice}</strong></li>
            <li>Mailmodo feedback: <em>“{formData.mailmodoThoughts}”</em></li>
            <li>Hobbies: <strong>{formData.hobbies.join(', ')}</strong></li>
          </ul>
          <button onClick={handleResubmit}>🔄 Wanna go again?</button>
        </div>
      )}
    </div>
  )
}

export default Home
