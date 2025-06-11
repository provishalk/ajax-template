import { useState } from 'react'
import './Form1.css' // Reuse the same styling

function Form2() {
  const [formData, setFormData] = useState({
    thaliChoice: '',
    rotiCount: '2',
    likeBaingan: false,
    lunchMood: 3,
    tiffinExcuse: '',
    foodDream: '',
  })

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your lunch vote has been thali-fied! 🍱')
  }

  return (
    <div className="form1-container">
      <h2>🍱 Indian Lunch Preferences</h2>
      <form onSubmit={handleSubmit} className="breakfast-form">

        <label>🥗 Pick your Thali of Choice:</label>
        <select name="thaliChoice" onChange={handleChange} required>
          <option value="">I’m feeling like...</option>
          <option value="north">North Indian Thali (Dal, Roti, Sabzi, Sweet)</option>
          <option value="south">South Indian Thali (Sambar, Rice, Rasam, Poriyal)</option>
          <option value="gujarati">Gujarati Thali (Sweet Kadhi, Thepla, Farsan)</option>
          <option value="bengali">Bengali Thali (Shukto, Bhaat, Mishti Doi)</option>
          <option value="fusion">Fusion - Mom made, Insta worthy ✨</option>
        </select>

        <fieldset>
          <legend>🍞 How many rotis can you actually handle?</legend>
          <label>
            <input
              type="radio"
              name="rotiCount"
              value="1"
              onChange={handleChange}
            />
            Just 1. Dieting (sorta) 🥲
          </label>
          <label>
            <input
              type="radio"
              name="rotiCount"
              value="2"
              onChange={handleChange}
              defaultChecked
            />
            2. Balanced AF 😌
          </label>
          <label>
            <input
              type="radio"
              name="rotiCount"
              value="4"
              onChange={handleChange}
            />
            4. Feed me like I just ran a marathon 🏃
          </label>
        </fieldset>
        <fieldset>
        <label className="checkbox">
          <input
            type="checkbox"
            name="likeBaingan"
            checked={formData.likeBaingan}
            onChange={handleChange}
          />
          Be honest: Do you like Baingan Bharta? 😬
        </label>
        </fieldset>
        <label>📉 How’s your lunch mood today?</label>
        <input
          type="range"
          name="lunchMood"
          min="1"
          max="5"
          value={formData.lunchMood}
          onChange={handleChange}
        />
        <div className="spice-level">Mood Level: {formData.lunchMood} (1 = Sad Tiffin 😭, 5 = Royal Bhoj 👑)</div>

        <label>🧾 If you forget your tiffin, what's your usual excuse?</label>
        <input
          type="text"
          name="tiffinExcuse"
          placeholder="e.g. Dog ate it... again."
          onChange={handleChange}
        />

        <label>🌈 Describe your dream lunch plate</label>
        <textarea
          name="foodDream"
          placeholder="Unlimited paneer, mango lassi fountain, papad rain?"
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Lunch 🥘</button>
      </form>
    </div>
  )
}

export default Form2
