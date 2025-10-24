import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About GetMePizza!</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          At <strong>GetMePizza!</strong>, we believe that a small act of generosity can make a big difference. Whether it’s brightening someone’s day, supporting a friend in need, or rallying together for a good cause, our platform makes it easy to contribute and share the love — literally over a slice of pizza.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p>
          We provide a simple and transparent way for people to raise funds and receive support from friends, family, and kind strangers. Our users can create personalized pages where supporters can donate money, leave encouraging messages, and celebrate their community.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Pizza?</h2>
        <p>
          Pizza isn’t just food — it’s a symbol of sharing, friendship, and joy. It’s a universal language of comfort and connection. By choosing pizza as our symbol, we remind ourselves and our community that generosity can be fun, delicious, and heartwarming.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Create Your Page:</strong> Start your own GetMePizza! page to share your story and goal.</li>
          <li><strong>Receive Support:</strong> Friends and supporters can donate securely and leave uplifting messages.</li>
          <li><strong>Celebrate Together:</strong> See your supporters grow, share your journey, and enjoy the collective impact.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p>
          Whether you’re here to give or receive, thank you for being part of our community. Together, we can build a culture of generosity, kindness, and connection — one pizza slice at a time.
        </p>
      </section>
    </div>
  )
}

export default About

export const metadata = {
  title: "About - Get Me A Pizza",
}