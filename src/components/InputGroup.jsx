import { useState } from 'react'

function SimpleForm({ id }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Example AJAX POST request
    fetch('https://example.com/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, input })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {id} Input:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button type="submit">Submit {id}</button>
    </form>
  )
}

export default SimpleForm
