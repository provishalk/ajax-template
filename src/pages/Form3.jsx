import { useState } from 'react'
import './Form1.css' // Shared styling

function Form3() {
  const [formData, setFormData] = useState({
    curryChoice: '',
    breadType: '',
    wantsDessert: false,
    drinkChoice: '',
    dinnerNotes: '',
    midnightSnackHabit: '',
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
    alert('Dinner is served! 🍽️ Your preferences have been saved.')
  }

  return (
    <div className="form1-container">
      <h2>🌙 Dinner Preferences</h2>
      <form onSubmit={handleSubmit} className="breakfast-form">

        <label>🍛 Choose your comforting curry:</label>
        <select name="curryChoice" onChange={handleChange} required>
          <option value="">Let the curry magic begin...</option>
          <option value="palak">Palak Paneer – Green, creamy love 💚</option>
          <option value="kadai">Kadai Mushroom – Smoky & bold 🍄</option>
          <option value="chana">Chana Masala – Protein-packed punch 💪</option>
          <option value="dal">Dal Tadka – The OG comfort hug 🥰</option>
        </select>

        <fieldset>
          <legend>🫓 Preferred bread to scoop that curry?</legend>
          <label>
            <input
              type="radio"
              name="breadType"
              value="roti"
              onChange={handleChange}
            />
            Roti – Classic & reliable
          </label>
          <label>
            <input
              type="radio"
              name="breadType"
              value="naan"
              onChange={handleChange}
            />
            Butter Naan – Drama + butter = ❤️
          </label>
          <label>
            <input
              type="radio"
              name="breadType"
              value="paratha"
              onChange={handleChange}
            />
            Paratha – Cheating on diet and proud
          </label>
        </fieldset>
        <fieldset>
        <label className="checkbox">
          <input
            type="checkbox"
            name="wantsDessert"
            checked={formData.wantsDessert}
            onChange={handleChange}
          />
          Do you need dessert to feel alive? 🍨
        </label>
        </fieldset>
        <label>🥤 Drink of choice with dinner:</label>
        <input
          type="text"
          name="drinkChoice"
          placeholder="e.g. Chaach, Coke, Jeera Soda, plain ol' water"
          onChange={handleChange}
        />

        <label>📝 Dinner Notes (Markdown supported):</label>
        <textarea
          name="dinnerNotes"
          placeholder="e.g. *Light* and **spicy** dinner is perfect!"
          onChange={handleChange}
        ></textarea>

        <label>🌃 Midnight snack confession?</label>
        <input
          type="text"
          name="midnightSnackHabit"
          placeholder="e.g. Maggi, leftover biryani, or just vibes?"
          onChange={handleChange}
        />

        <button type="submit">Submit Dinner 🍽️</button>
      </form>
    </div>
  )
}

export default Form3
