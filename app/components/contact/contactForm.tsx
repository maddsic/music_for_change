import { useState } from 'react';
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// FOR SUCCESS STATE
interface ContactFormProps {
  onSuccess?: () => void;
}

// If form is successfully submitted then the onSuccess function would run and be TRUE and then in the contactModal we receive the props onSuccess and set the SENT state to true.


export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false);


  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        serviceId!,
        templateId!,
        form,
        publicKey!,

      )
      // Reset form
      form.reset();
      // Trigger form success
      onSuccess?.();
    } catch (error) {
      console.log("Email Sent Error:", error)
      // alert("Failed to send message. Try again.")
    }
    setLoading(false)
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Let&apos;s Create Change</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-xl border px-4 py-3"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full rounded-xl border px-4 py-3"
        />

        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your message"
          className="w-full rounded-xl border px-4 py-3"
        />

        <button
          type="submit"
          className={"w-full rounded-xl bg-secondary py-3 text-white font-semibold hover:bg-primary transition"}
        >
          {loading ? "Sending" : "Send Message"}
        </button>

      </form>
    </>
  );
}
