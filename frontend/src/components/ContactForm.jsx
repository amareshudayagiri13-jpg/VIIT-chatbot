import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <p className="text-green-600 text-xs font-semibold text-center py-2">
        ✅ Thank you! We'll contact you soon.
      </p>
    );
  }

  return (
    <div className="mt-2 flex flex-col gap-2">
      <p className="font-semibold text-xs text-center">
        Could you please provide your contact information?
      </p>
      <p className="text-xs text-center text-gray-500">
        Please share your preferred email and phone number so our expert can reach out to you
      </p>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        className="border rounded px-2 py-1.5 text-xs outline-none focus:border-yellow-400"
        placeholder="👤 Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        className="border rounded px-2 py-1.5 text-xs outline-none focus:border-yellow-400"
        placeholder="✉️ Email"
      />
      <input
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        className="border rounded px-2 py-1.5 text-xs outline-none focus:border-yellow-400"
        placeholder="📞 +91 Mobile Number"
      />
      <button
        onClick={() => setSubmitted(true)}
        className="bg-yellow-400 text-xs font-bold py-1.5 rounded hover:bg-yellow-500 transition"
      >
        Submit
      </button>
    </div>
  );
}