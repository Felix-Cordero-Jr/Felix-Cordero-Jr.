// src/app/components/Contact.tsx
import React from 'react'; // Ensure React is in scope
// src/app/layout.tsx
import '../styles/globals.css'; // Correct the import path to go up one level


const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-200">
      <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto mt-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
