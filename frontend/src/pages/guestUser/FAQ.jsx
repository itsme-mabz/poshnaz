import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import GuestNavbar from '../../components/guestUser/GuestNavbar';
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to receive my custom garment?",
      answer: "The typical turnaround time for a custom garment is 2-3 weeks from the date of order confirmation. This includes tailoring time and shipping. Rush orders may be available for an additional fee."
    },
    {
      question: "What if my garment doesn't fit perfectly?",
      answer: "We offer a Perfect Fit Guarantee! If your garment doesn't fit exactly as you'd like, we'll provide free alterations. Simply contact our customer service team within 14 days of receiving your order."
    },
    {
      question: "Can I modify the design elements of a garment?",
      answer: "Yes! Our customization platform allows you to modify various design elements including collar style, cuff design, pocket placement, and more. Each garment can be personalized to your preferences."
    },
    {
      question: "What type of fabrics do you use?",
      answer: "We use premium quality fabrics sourced from renowned manufacturers. Our collection includes pure cotton, silk, linen, and wool blends. Each fabric is carefully selected for durability and comfort."
    },
    {
      question: "How do I care for my custom garment?",
      answer: "Care instructions are provided with each garment and vary based on the fabric type. Generally, we recommend dry cleaning for formal wear and gentle machine washing for cotton items. Specific care instructions will be included with your order."
    },
    {
      question: "What is your return policy?",
      answer: "While we don't accept returns on custom-made garments, we offer free alterations under our Perfect Fit Guarantee. If there's a defect in craftsmanship, we'll repair or remake the garment at no additional cost."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! International shipping rates vary by location. Delivery typically takes 5-10 business days after the garment is completed, depending on the destination."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package through our website or the carrier's tracking system."
    }
  ];

  return (
    <div className=" min-h-screen bg-gray-50">
      <GuestNavbar /> 
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 text-gold mr-3" />
            <h1 className="text-3xl inter text-gray-900 font-bold">Frequently Asked Questions</h1>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  className="w-full py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-gold" />
                  ) : (
                    <Plus className="h-5 w-5 text-gold" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Still have questions?</h2>
            <p className="text-gray-600 mb-4">
              Our customer service team is here to help! Contact us through any of these channels:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> support@tailormade.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> Monday - Friday, 9am - 6pm EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;