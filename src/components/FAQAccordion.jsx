import { useState } from "react";

const faqs = [
    {
        question: "How do I place an order?",
        answer:
            "You can place an order by selecting your desired crochet item, choosing colors or custom options, and submitting the order form. Our team will contact you to confirm the details before production starts.",
    },
    {
        question: "Do you accept custom crochet designs?",
        answer:
            "Yes, we accept custom orders. You can request size, color, pattern, or design changes. Custom items may take longer to complete.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept KBZPay, Wave Money, AYA Pay, and COD. Full or partial payment may be required before production starts.",
    },
    {
        question: "How long does it take to make a crochet item?",
        answer:
            "Ready-made items take 1–3 days. Custom orders usually take 5–10 days depending on the design.",
    },
    {
        question: "How long does shipping take?",
        answer:
            "Yangon delivery usually takes 2–4 business days. Other cities may take 4–7 business days.",
    },
    {
        question: "Can I return or exchange my order?",
        answer:
            "Returns or exchanges are accepted only for damaged or incorrect items. Custom-made items are non-refundable.",
    },
];


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
