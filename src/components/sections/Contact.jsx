import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  // * clear input after submit
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // * PRIVATE_KEYS
  const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

  // * handler when user click on "SEND" button
  const handleSubmitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        toast.success("Successfully sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Something happened!"));
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmitForm}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="resize-none w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message..."
            />
          </div>

          <button
            className="w-full bg-blue-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/10 before:transition-all before:duration-300 hover:before:left-0"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <Toaster
          toastOptions={{
            style: {
              background: "#1f1f1f",
              color: "#fff",
              fontFamily: "inherit",
            },
          }}
        />
      </div>
    </section>
  );
}
