"use client";

import { useState } from "react";
import faqsData from "@/data/faqs.json";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="faqs-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <header className="faqs-page__header text-center mb-12">
          <h1 className="font-accent text-4xl md:text-5xl text-[#ED9BB8] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services, ordering, and delivery.
          </p>
        </header>

        {/* FAQ List */}
        <div className="faq-list space-y-4">
          {faqsData.map((faq: FAQ) => (
            <div
              key={faq.id}
              className="faq-item border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question Button */}
              <button
                className="faq-item__question w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`faq-item__icon w-5 h-5 text-[#ED9BB8] transition-transform duration-200 flex-shrink-0 ${
                    openId === faq.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-item__answer px-6 py-4 bg-gray-50 border-t border-gray-200"
                  role="region"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="faqs-page__cta mt-12 text-center p-8 bg-[#FFF5F8] rounded-lg">
          <h2 className="font-accent text-2xl text-[#ED9BB8] mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Get in touch and we'll respond as soon as possible.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-3 bg-[#ED9BB8] text-white rounded-md font-medium hover:bg-[#E88AAC] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
