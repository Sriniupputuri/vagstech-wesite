"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_jc3eid8";
    const templateID = "template_d9e1zfb";

    const templateParams = {
      from_email: email,
      message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, {
        publicKey: 'fEQl5GrVjLKmB1eMF',
      });
      toast.success("Message sent successfully! We'll get back to you soon.");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-[var(--dark-color)] mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Have a project in mind or want to learn more about our games and apps? We&apos;d love to hear from you.
      </p>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact form + info */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 mb-10">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full h-32"
                placeholder="How can we help you?"
              />
            </div>

            <Button
              type="submit"
              className="text-white w-full bg-[var(--accent-color)] hover:bg-[var(--accent-hover)]"
            >
              Send Message
            </Button>
          </form>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-600">
              <Mail className="h-5 w-5 mt-0.5 text-[var(--accent-color)] flex-shrink-0" />
              <span>admin@vagstech.com</span>
            </div>
            <div className="flex items-start gap-3 text-gray-600">
              <Phone className="h-5 w-5 mt-0.5 text-[var(--accent-color)] flex-shrink-0" />
              <span>+91 72072 76792</span>
            </div>
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin className="h-5 w-5 mt-0.5 text-[var(--accent-color)] flex-shrink-0" />
              <span>
                8-2-611/10, Road No 10, Banjara Hills,<br />
                Hyderabad, Telangana, India — 500034
              </span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=Road+No+10+Banjara+Hills+Hyderabad+Telangana+500034&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "460px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VAGSTECH Office Location"
          />
        </div>
      </div>
    </div>
  );
}
