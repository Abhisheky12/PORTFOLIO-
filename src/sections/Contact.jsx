import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from "../components/icons";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const { email, github, githubHandle, linkedin, leetcode, leetcodeHandle, codeforces, codeforcesHandle } = portfolioData.personalInfo;
  const { service, endpoint, accessKey } = portfolioData.contactForm;

  // State for contact form
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (service === "web3forms" && accessKey) {
        // Real submission via Web3Forms (free, no backend) -> delivered to email
        const payload = new FormData();
        payload.append("access_key", accessKey);
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("message", formData.message);
        payload.append("subject", `Portfolio message from ${formData.name}`);
        payload.append("from_name", formData.name);
        payload.append("botcheck", ""); // honeypot spam protection

        const res = await fetch(endpoint, { method: "POST", body: payload });
        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message || "Submission failed. Please try again.");
        }
      } else {
        // No access key configured yet: open the visitor's mail app with a prefilled message
        const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactChannels = [
    {
      label: "Email Me",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      iconClass: "bg-accent-500/10 text-accent-400",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "Abhishek Yadav",
      href: linkedin,
      icon: LinkedinIcon,
      iconClass: "bg-violetAccent-500/10 text-violetAccent-400",
      external: true,
    },
    {
      label: "GitHub",
      value: githubHandle,
      href: github,
      icon: GithubIcon,
      iconClass: "bg-dark-bg text-dark-textSecondary border border-dark-border",
      external: true,
    },
    {
      label: "LeetCode",
      value: leetcodeHandle,
      href: leetcode,
      icon: LeetCodeIcon,
      iconClass: "bg-accent-500/5 text-accent-300",
      external: true,
    },
    {
      label: "Codeforces",
      value: codeforcesHandle,
      href: codeforces,
      icon: CodeforcesIcon,
      iconClass: "bg-violetAccent-500/5 text-violetAccent-300",
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-16 pb-24 border-t border-dark-border/30 relative bg-[#0a0a0c]">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-violetAccent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          description="Feel free to reach out for internship opportunities, collaborations, or just a chat."
        />

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Get Connected Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-dark-textPrimary mb-4">
                Let's build something great together.
              </h3>
              <p className="text-sm sm:text-base text-dark-textSecondary leading-relaxed">
                I'm actively looking for Software Engineering internships and full-time positions. If you like my projects and competitive coding background, let's connect!
              </p>
            </div>

            {/* Direct Social / Email list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactChannels.map(({ label, value, href, icon: Icon, iconClass, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-dark-card/40 border border-dark-border/80 hover:border-accent-500/20 hover:bg-accent-500/5 transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${iconClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-dark-textSecondary uppercase tracking-wider block">
                      {label}
                    </span>
                    <span className="text-sm font-bold text-dark-textPrimary truncate block">
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Note when using the mail fallback */}
            {(!accessKey) && (
              <p className="text-[11px] text-dark-textSecondary/50 font-mono leading-relaxed">
                Form uses your mail app right now. Add a free Web3Forms access key in
                src/data/portfolio.js to receive submissions directly to your inbox.
              </p>
            )}
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl bg-dark-card/40 border border-dark-border h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-dark-textSecondary uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark-bg/60 border border-dark-border focus:border-accent-500 rounded-lg px-4 py-3 text-sm text-dark-textPrimary placeholder-dark-textSecondary/30 focus:outline-none focus:ring-1 focus:ring-accent-500/30 transition-colors duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-dark-textSecondary uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark-bg/60 border border-dark-border focus:border-accent-500 rounded-lg px-4 py-3 text-sm text-dark-textPrimary placeholder-dark-textSecondary/30 focus:outline-none focus:ring-1 focus:ring-accent-500/30 transition-colors duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-dark-textSecondary uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-dark-bg/60 border border-dark-border focus:border-accent-500 rounded-lg px-4 py-3 text-sm text-dark-textPrimary placeholder-dark-textSecondary/30 focus:outline-none focus:ring-1 focus:ring-accent-500/30 transition-colors duration-300 resize-none"
                        placeholder="Hey Abhishek, let's discuss our project..."
                        required
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-700 disabled:cursor-not-allowed text-dark-bg text-sm font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_28px_rgba(6,182,212,0.3)] focus:outline-none active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/25">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dark-textPrimary">Message Sent!</h4>
                      <p className="text-sm text-dark-textSecondary mt-2 max-w-sm">
                        Thank you for reaching out! I'll get back to you as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 border border-dark-border hover:border-accent-500/30 text-xs font-semibold text-dark-textPrimary rounded-lg bg-dark-bg/60 hover:bg-accent-500/5 transition-colors duration-300 mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
