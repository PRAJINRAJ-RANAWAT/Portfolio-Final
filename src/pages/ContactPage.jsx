import React from "react";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoPanel from "../components/contact/ContactInfoPanel";

const ContactPage = () => (
  <section className="py-16">
    <SectionEyebrow>Get in touch</SectionEyebrow>
    <h1 className="text-3xl sm:text-4xl font-black font-mont mb-3">
      Send a <span className="text-accent-ink dark:text-accent">Message</span>
    </h1>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
      Whether it's a project, a role, or just a question — I read every message.
    </p>

    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-7">
        <ContactForm />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <ContactInfoPanel />
      </div>
    </div>
  </section>
);

export default ContactPage;
