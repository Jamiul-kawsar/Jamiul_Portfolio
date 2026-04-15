import React, { useState } from 'react'
import SectionHeader from "./SectionHeader";
import { ComputerIcon, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0a04e565-823e-4468-acc5-800a8b0bb3ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Sent!");
      event.target.reset();
      setTimeout(() => setResult(""), 3000); // Reset after 3 seconds
    } else {
      setResult("Error");
      setTimeout(() => setResult(""), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 text-white bg-gray-950">
      <div className='max-w-6xl mx-auto'>
        <SectionHeader
          label="// get in touch"
          title="Let's"
          highlight="Connect"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5 items-start">
            <p className="text-slate-500 mb-4 leading-relaxed text-sm">I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Reach out!</p>

            {/* mail */}
            <a
              href="mailto:jamiul.kawsar35@gmail.com"
              className="group w-full flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 no-underline backdrop-blur-sm">

              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-lg shrink-0 bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">

                <Mail />
              </div>

              <div >
                <div className="text-sm text-gray-400 group-hover:text-gray-600 font-mono" >Email</div>
                <div className="text-sm text-slate-500 group-hover:text-[#00d4ff] transition-colors duration-300">
                  jamiul.kawsar35@gmail.com
                </div>

              </div>
            </a>
            {/* Phone */}
            <a
              href="tel:+8801913959039"
              className="group w-full flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 no-underline backdrop-blur-sm">

              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-lg shrink-0 bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">

                <Phone />
              </div>

              <div >
                <div className="text-sm text-gray-400 group-hover:text-gray-600 font-mono" >Phone</div>
                <div className="text-sm text-slate-500 group-hover:text-[#00d4ff] transition-colors duration-300">
                  +8801913959039
                </div>

              </div>
            </a>

            {/* github */}
            <a
              href="https://github.com/jamiul-kawsar"
              className="group w-full flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 no-underline backdrop-blur-sm">

              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-lg shrink-0 bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">

                <ComputerIcon />
              </div>

              <div >
                <div className="text-sm text-gray-400 group-hover:text-gray-600 font-mono" >GitHub</div>
                <div className="text-sm text-slate-500 group-hover:text-[#00d4ff] transition-colors duration-300">
                  github.com/jamiul-kawsar
                </div>

              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1.5 mb-3">
              <label htmlFor="name"
                className="text-sm font-mono text-gray-400 uppercase tracking-wide">
                Name
              </label>
              <input type="text" id="name" name="name" placeholder='Your name' required className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-[#00d4ff]" />
            </div>

            <div className="flex flex-col gap-1.5 mb-3">
              <label htmlFor="email"
                className="text-sm font-mono text-gray-400 uppercase tracking-wide">
                E-mail
              </label>
              <input type="email" id="email" name="email" placeholder='your@gmail.com' required className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-[#00d4ff]" />
            </div>

            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="message"
                className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                Message
              </label>

              <textarea name="message" required
                placeholder='Tell me about your project...'
                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-y min-h-[110px] placeholder:text-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"></textarea>
            </div>

            <button
              type="submit"
              className={`${result === "Message Sent!" ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-r from-[#7c3aed] to-[#00d4ff]"} text-white py-3 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(79,70,229,0.4)]`}>
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact