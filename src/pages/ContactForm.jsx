import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',     // Replace with your actual EmailJS service ID
        'your_template_id',    // Replace with your actual EmailJS template ID
        form.current,
        'your_public_key'      // Replace with your actual EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

      {sent && <p className="text-green-400 mb-4">Message sent successfully!</p>}

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto grid gap-6 text-left">
        <input type="text" name="user_name" placeholder="Your Name" required className="bg-gray-800 px-4 py-3 rounded-lg w-full text-white" />
        <input type="email" name="user_email" placeholder="Your Email" required className="bg-gray-800 px-4 py-3 rounded-lg w-full text-white" />
        <input type="text" name="subject" placeholder="Subject" className="bg-gray-800 px-4 py-3 rounded-lg w-full text-white" />
        <textarea name="message" rows="5" placeholder="Why are you contacting?" required className="bg-gray-800 px-4 py-3 rounded-lg w-full text-white" />
        <button type="submit" className="bg-blue-600 hover:bg-red-600 transition px-6 py-3 rounded-lg font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}
