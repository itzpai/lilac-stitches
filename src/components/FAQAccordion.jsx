import { useState } from "react";
import { faqs } from "../data/faqData";

function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq, index) => (
                <div key={index} className="py-4">
                    <button
                        onClick={() => toggle(index)}
                        className="flex w-full items-center justify-between text-left cursor-pointer"
                    >
                        <span className="text-base font-semibold text-gray-900">
                            {faq.question}
                        </span>

                        <span className="ml-4 text-2xl font-light text-gray-500">
                            {activeIndex === index ? "−" : "+"}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index
                            ? "mt-3 max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="text-sm leading-relaxed text-gray-600">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
