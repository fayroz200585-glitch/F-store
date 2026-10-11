import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="featured contact-page">
      <p className="subtitle">WE WOULD LOVE TO HEAR FROM YOU</p>

      <h2>Contact Us</h2>
      <p>Have a question about a product or your shopping experience? Send us a message.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <button type="submit" className="shop-btn">
          Send Message
        </button>
      </form>

      {sent && (
        <p>Thank you, {name}! Your message has been received.</p>
      )}
    </section>
  )
}

export default Contact