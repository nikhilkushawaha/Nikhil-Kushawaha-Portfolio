import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Spline from "@splinetool/react-spline";

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();
  const splineRef = useRef();
  const splineWrapperRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nikhil Kushawaha",
          from_email: form.email,
          to_email: "9ikhilkushawaha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  // Match Spline height to form
  useEffect(() => {
    const resizeSpline = () => {
      if (formRef.current && splineWrapperRef.current) {
        const formHeight = formRef.current.offsetHeight;
        splineWrapperRef.current.style.height = `${formHeight}px`;
      }
    };

    resizeSpline();
    window.addEventListener("resize", resizeSpline);
    return () => window.removeEventListener("resize", resizeSpline);
  }, [form]);

  // Hide Spline watermark/logo
  useEffect(() => {
    const interval = setInterval(() => {
      const logo = document.querySelector("a[href*='spline.design']");
      if (logo) {
        logo.style.display = "none";
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="section-padding relative">
      {alert.show && <Alert {...alert} />}

      <div className="w-full h-full md:px-10 px-5">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="hero-badge">
            <p>💬 Have questions or ideas? Let’s talk! 🚀</p>
          </div>
          <h1 className="head-text">Get in Touch – Let’s Connect</h1>
          <p className="text-lg text-white-600">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
        </div>

        <div className="grid-12-cols mt-16 flex flex-col xl:flex-row gap-10">
          {/* Contact Form */}
          <div className="xl:col-span-5 flex-1">
            <div className="flex-center border border-black-300 bg-black-100 rounded-xl p-10 h-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <label className="space-y-3">
                  <span className="field-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Full Name"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="example@gmail.com"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Your Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Share your thoughts or inquiries..."
                  />
                </label>

                <button type="submit" disabled={loading}>
                  <div className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white rounded-xl shadow-md group">
                    <span className="absolute inset-0 w-full h-full bg-white-600 group-hover:scale-110 scale-0 transition-all duration-500 ease-out rounded-xl z-0" />
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? "Sending..." : "Send Message"}
                      <img
                        src="/assets/arrow-up.png"
                        alt="arrow"
                        className="w-4 h-4"
                      />
                    </span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Spline Animation */}
          <div className="xl:col-span-7 flex-1">
            <div
              ref={splineWrapperRef}
              className="relative w-full rounded-3xl overflow-hidden transition-all"
            >
              <Spline
                ref={splineRef}
                scene="https://prod.spline.design/2cQPoyxq9cApjoGw/scene.splinecode"
                className="w-full h-full"
              />

              {/* Get in Touch Button */}
              <button
                className="absolute bottom-4 right-5 z-50 px-6 py-2 border border-fuchsia-500 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-2xl"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


{
  /* <Spline scene="https://prod.spline.design/2cQPoyxq9cApjoGw/scene.splinecode" /> */
}
