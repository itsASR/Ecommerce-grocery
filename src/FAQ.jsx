// src/FAQ.js
import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleItem }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
        onClick={toggleItem}
      >
        <span className="font-medium">{question}</span>
        <span className="ml-4">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="pl-4 pb-4">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase if the item is unused and in its original condition.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5-7 business days within the contiguous United States.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 200 countries worldwide. International shipping rates apply.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5-7 business days within the contiguous United States.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5-7 business days within the contiguous United States.',
    },
  ];

  const toggleItem = (index) => {
    if (index === openIndex) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <>
      <div className='w-screen h-80 overflow-hidden'>
        <img src='https://www.amsc-usa.com/wp-content/uploads/2023/10/a-packing-line-for-an-ecommerce-warehouse.jpg' className='w-full h-full object-cover'></img>
      </div>
      <div className="max-w-2xl mx-auto mt-10 bg-white relative p-10 -top-40 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            toggleItem={() => toggleItem(index)}
          />
        ))}
      </div>
    </>
  );
};

export default FAQ;
