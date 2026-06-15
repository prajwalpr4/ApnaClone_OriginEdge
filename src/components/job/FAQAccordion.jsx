import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "What is the interview process like?",
      answer: "The interview process typically involves an initial screening call, a technical round, and a final HR interview."
    },
    {
      question: "Is there a work-from-home option?",
      answer: "This specific role requires working from the office as mentioned in the job tags, but the company offers flexible working hours."
    },
    {
      question: "What is the expected notice period?",
      answer: "The company prefers candidates who can join immediately or within 15-30 days."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 mb-8 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 focus:outline-none"
      >
        <h2 className="text-[16px] font-bold text-gray-900">FAQs about this job</h2>
        <span className="text-[14px] text-brand-primary font-semibold flex items-center">
          {isOpen ? 'Hide all' : 'Show all'} 
          {isOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <h4 className="text-[14px] font-semibold text-gray-800 mb-1">{faq.question}</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
