import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { contactTarget, emailjsConfig } from "../../data/site";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env[emailjsConfig.serviceIdEnv];
    const templateId = import.meta.env[emailjsConfig.templateIdEnv];
    const publicKey = import.meta.env[emailjsConfig.publicKeyEnv];

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      toast.error("Contact form isn't configured yet — add EmailJS keys to .env (see .env.example).");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: contactTarget.name,
          from_email: form.email,
          to_email: contactTarget.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thanks! I'll get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="brutal-input"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="brutal-input"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What would you like to build?"
          className="brutal-input resize-none h-32"
        />
      </label>

      <button type="submit" disabled={loading} className="brutal-btn bg-accent text-black disabled:opacity-60">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
