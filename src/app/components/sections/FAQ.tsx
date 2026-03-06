"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do all your websites are custom coded?",
    answer:
      "Yes.Every website we deliver is custom coded made to meet neiche spwicif requirments, a mixture of what client wants and what actually works!",
  },    
  {
    question: "What does SER mean?",
    answer:
      "SER stands for Search Engine Recognition, a boarder term including on page and off page SEO Geo and Google business ranking making sure search engine recognizes you brand names, it comes free with most of our services.",
  },
  {
    question: "Do you deliver ready-to-use web applications?",
    answer:
      "Yes. Most of time our websites are simple website they are Web 2.0 or Web 3.0, capable of handling simple. To complex Web app features.",
  },   
  {
    question:
      "What if we are genuinely interested in having a website of RSI Studio standards but don't have proper budget or want some sort of gurantte?",
    answer:
      "For such prospects we have a lock in payment method in which you put 10 % of quoted price as down-payment and then give us royalty on you sales every month till rest 90 percent + 15% (intrest) is achieved in this what you only pay when you get results.",
  },    

  {
    question: "What's the earliest we can expect result?",
    answer:
      "We have capbitly to deliver a simple website within 48 hours with complex website ranging from 5 to 15 days depending upon complexity and size of project.Early you enroll early you start seeing results.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-5 py-2 rounded-full border border-[#FF6B6B] text-[#FF6B6B] text-sm tracking-wide">
            Frequently Asked Questions
          </span>
        </div>

        {/* Headings */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans">
            Your Questions
          </h2>
          <p className="text-4xl md:text-5xl font-serif italic mt-2">
            Answered!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-zinc-800">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-zinc-800 py-6"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-lg md:text-xl font-medium text-white">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#A1A1AA] mt-4 leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}