import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How many devices can I stream on with one account?",
      answer: "You can stream on up to three devices simultaneously with just one account. Whether you're at home, at work, or on the go, you can easily switch between your devices without interruptions."
    },
    {
      question: "Can I watch movies on multiple devices at once?",
      answer: "Yes, you can stream on three devices simultaneously using one account. Whether you're on your TV, laptop, or phone, you can enjoy your entertainment across different screens."
    },
    {
      question: "How can I stay updated on new releases from my favorite producers?",
      answer: "To stay up-to-date with new content from your favorite producers, simply turn on notifications. You'll never miss a release and can enjoy fresh stories as soon as they're available."
    },
    {
      question: "Can I watch movies offline?",
      answer: "Yes, you can download movies and series to your mobile device and enjoy them offline whenever you want. It's perfect for watching on the go, even without an internet connection."
    },
    {
      question: "How do I download movies and series for offline viewing?",
      answer: "To download content for offline viewing, simply select the movie or series you want to watch and tap the download option. Once the download is complete, you can enjoy it anytime, even without an internet connection."
    },
    {
      question: "Are there any cinema releases available on the app?",
      answer: "Yes, but it is restricted. You can only watch movies produced by producers who are registered on our app. If a producer registered on our app premieres a movie in cinemas, they can choose to make it available on our app. Ultimately, the choice is left to the producer."
    },
    {
      question: "How long can I watch a movie after purchasing it?",
      answer: "Once you purchase a movie, you have five days to enjoy it. Make sure to watch it within that time frame before it expires."
    },
    {
      question: "Can I watch movies on my phone while travelling?",
      answer: "Absolutely! You can download movies and series to your phone and enjoy them offline, wherever you go. Whether you're travelling, commuting, or just relaxing, entertainment is always available to you."
    },
    {
      question: "Is there a limit to how many movies I can download?",
      answer: "While there's no set limit to how many movies you can download."
    },
    {
      question: "Can I switch between devices while watching a movie?",
      answer: "Yes, you can seamlessly switch between devices. Start watching on your TV, then continue on your laptop or phone. Your entertainment follows you, so you never have to stop enjoying it."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#222222] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#161616] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-white font-medium text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-white w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </div>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;