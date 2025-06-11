import { useState } from 'react'
import './Form1.css'

function Form1() {
  const [formData, setFormData] = useState({
    chaiOrCoffee: '',
    dosaStyle: '',
    likePoha: false,
    spiceTolerance: '',
    allergies: '',
    morningRant: '',
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
    alert(`Your breakfast preferences are locked and loaded! 🍽️`)
  }

  return (
    <div className="form1-container">
      <h2>🍽️ Indian Breakfast Preferences</h2>
      <form onSubmit={handleSubmit} className="breakfast-form">

        <label>☕ Morning ritual first: Chai or Coffee?</label>
        <select name="chaiOrCoffee" onChange={handleChange} required>
          <option value="">Select your soul fuel</option>
          <option value="chai">Masala Chai 🫖</option>
          <option value="coffee">Filter Coffee ☕</option>
          <option value="both">Both. I’m unstoppable 🚀</option>
          <option value="none">I run on chaos 🌪️</option>
        </select>

        <fieldset >
          <legend>🧇 What kind of dosa person are you?</legend>
          <label>
            <input
              type="radio"
              name="dosaStyle"
              value="plain"
              onChange={handleChange}
            />
            Plain but classy
          </label>
          <label>
            <input
              type="radio"
              name="dosaStyle"
              value="masala"
              onChange={handleChange}
            />
            Masala Loaded 🥔
          </label>
          <label>
            <input
              type="radio"
              name="dosaStyle"
              value="paper"
              onChange={handleChange}
            />
            Paper Thin & Proud 📜
          </label>
          <label>
            <input
              type="radio"
              name="dosaStyle"
              value="cheese"
              onChange={handleChange}
            />
            Cheese Burst 🤤
          </label>
        </fieldset>
        <fieldset>
        <label className="checkbox">
          <input
            type="checkbox"
            name="likePoha"
            checked={formData.likePoha}
            onChange={handleChange}
          />
          Do you secretly judge people who hate Poha? 😏
        </label>
        </fieldset>

        <fieldset>
          <legend>🌶️ Spice Tolerance – Choose your warrior:</legend>
          <label>
            <input
              type="radio"
              name="spiceTolerance"
              value="mild"
              onChange={handleChange}
            />
            🍼 "Is black pepper too much?"
          </label>
          <label>
            <input
              type="radio"
              name="spiceTolerance"
              value="medium"
              onChange={handleChange}
            />
            🌶️ "I like a lil' drama in my food"
          </label>
          <label>
            <input
              type="radio"
              name="spiceTolerance"
              value="spicy"
              onChange={handleChange}
            />
            🔥 "I sneeze, I cry, I love it"
          </label>
          <label>
            <input
              type="radio"
              name="spiceTolerance"
              value="extreme"
              onChange={handleChange}
            />
            🚒 "I once fought a dragon for extra chili"
          </label>
        </fieldset>

        <label>🚫 Any food allergies or weird dislikes?</label>
        <input
          type="text"
          name="allergies"
          placeholder="e.g. lactose, coriander"
          onChange={handleChange}
        />

        <label>🗯️ Morning rant zone (optional)</label>
        <textarea
          name="morningRant"
          placeholder="Share your deepest breakfast frustrations..."
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Breakfast 🍛</button>
      </form>
    </div>
  )
}

export default Form1
