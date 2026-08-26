"use client";

import { useState, FormEvent } from "react";
import { STUDIO_INFO } from "@/data/studio";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    location: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-40 bg-para-charcoal text-para-ivory relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column Statement & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <span className="font-sans text-xs tracking-ultra uppercase text-para-sandstone font-bold block mb-4">
                13 — BEGIN A CONVERSATION
              </span>

              <h2 className="font-serif text-section-title font-light text-para-ivory leading-[1.02] mb-6">
                LET'S CREATE <br />
                <span className="italic text-para-sandstone font-normal">SOMETHING THAT</span> <br />
                BELONGS.
              </h2>

              <p className="font-sans text-base text-para-ivory/70 font-light leading-relaxed max-w-md">
                We accept a select number of residential, commercial, hospitality, and interior projects each year to maintain uncompromised architectural devotion.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 border-t border-para-charcoal-muted pt-8">
              <div>
                <span className="font-sans text-[10px] tracking-ultra text-para-sandstone uppercase block mb-1">
                  CALL THE STUDIO
                </span>
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="font-serif text-2xl text-para-ivory hover:text-para-sandstone transition-colors"
                  data-cursor="cta"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>

              <div>
                <span className="font-sans text-[10px] tracking-ultra text-para-sandstone uppercase block mb-1">
                  EMAIL THE STUDIO
                </span>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="font-serif text-2xl text-para-ivory hover:text-para-sandstone transition-colors"
                  data-cursor="cta"
                >
                  {STUDIO_INFO.email}
                </a>
              </div>

              <div>
                <span className="font-sans text-[10px] tracking-ultra text-para-sandstone uppercase block mb-1">
                  WHATSAPP DIRECT
                </span>
                <a
                  href={`https://wa.me/${STUDIO_INFO.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-sans text-xs tracking-widest text-para-sandstone hover:text-para-ivory uppercase"
                  data-cursor="cta"
                >
                  <span>CHAT ON WHATSAPP</span>
                  <span>→</span>
                </a>
              </div>

              <div>
                <span className="font-sans text-[10px] tracking-ultra text-para-sandstone uppercase block mb-1">
                  STUDIO ATELIER
                </span>
                <p className="font-sans text-xs text-para-ivory/70 font-light">
                  {STUDIO_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Minimal Form */}
          <div className="lg:col-span-7 bg-para-charcoal-light/60 border border-para-charcoal-muted p-8 sm:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <span className="font-serif text-4xl text-para-sandstone italic">Thank you.</span>
                <p className="font-sans text-base text-para-ivory/80 font-light max-w-md">
                  Your project enquiry has been received by Ar. Urval Dhruve. We will respond within 24–48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-sans text-xs tracking-ultra uppercase text-para-sandstone underline pt-4"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <h3 className="font-serif text-2xl font-light text-para-ivory border-b border-para-charcoal-muted pb-4">
                  Project Brief Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Shri Rajesh Patel"
                      className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@example.com"
                      className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                      PROJECT TYPE
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                    >
                      <option value="Residential">Residential Architecture</option>
                      <option value="Commercial">Commercial Building</option>
                      <option value="Resort & Farmhouse">Resort & Farmhouse</option>
                      <option value="Interior Design">Interior Architecture</option>
                      <option value="Vastu Audit">Vastu & Energy Audit</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                      PROJECT LOCATION
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Rajkot, Ahmedabad, Surat"
                      className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                      APPROXIMATE BUDGET
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹50 Lakhs - ₹2 Cr"
                      className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-para-sandstone block mb-2">
                    TELL US ABOUT YOUR VISION & REQUIREMENTS
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your spatial aspirations, plot dimensions, family requirements..."
                    className="w-full bg-para-charcoal border border-para-charcoal-muted text-para-ivory px-4 py-3 text-sm focus:outline-none focus:border-para-sandstone font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-para-ivory text-para-charcoal font-sans text-xs tracking-ultra uppercase font-bold py-4 hover:bg-para-sandstone transition-colors duration-300 border border-para-ivory"
                  data-cursor="cta"
                >
                  BEGIN THE CONVERSATION →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
