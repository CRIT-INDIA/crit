import ContactForm from "./contactform-c";
import ConnectWithUs from "./connect";
import ContactSection from "./contactus";

export default function Contact() {
  return (
    <>
    <div className="bg-gradient-to-br from-[#081020] via-[#0d1a34] to-[#1a3468] text-white font-inter overflow-hidden bg-fixed">
    <ContactSection />
    <div>
      
      <ContactForm />
      <ConnectWithUs />
      
      </div>
    </div>
    </>
  );
}