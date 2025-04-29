"use client";

import { sendEmail } from "@/lib/utils";
import type React from "react";

import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: formData.subject,
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setSubmitStatus(null);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold text-blue-800 mb-6">Get In Touch</h3>
        <p className="text-gray-600 mb-8">
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
              <FiMapPin size={20} />
            </div>
            <div>
              <h4 className="font-medium text-blue-800">Location</h4>
              <p className="text-gray-600">Irvine, CA</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
              <FiMail size={20} />
            </div>
            <div>
              <h4 className="font-medium text-blue-800">Email</h4>
              <p className="text-gray-600">anhtp5@uci.edu</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
              <FiPhone size={20} />
            </div>
            <div>
              <h4 className="font-medium text-blue-800">Phone</h4>
              <p className="text-gray-600">+1 (408) 609-6660</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="p-3 bg-green-100 text-green-700 rounded-md">
              Your message has been sent successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
