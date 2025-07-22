'use client';
import ContactForm from "./components/contactform-c";
import ConnectWithUs from "./components/connect";
import ContactSection from "./components/contactus";
import "./contactus.css";

export default function ContactPage() {
  return (
    <>
      <section className="hero-section bg-gradient-to-br from-white to-red-50" bg-fixed>
        <ContactSection />
      
        <div>
          <ContactForm />
          <ConnectWithUs />
        </div>
        </section>
      
    </>
  );
}