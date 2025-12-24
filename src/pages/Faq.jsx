import FAQAccordion from "../components/FAQAccordion";

function Faq() {
  return (
    <div className="min-h-screen bg-[#EEF5FF] px-4 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-600">
        Frequently Asked Questions
      </h2>
      <FAQAccordion />
    </div>
  )
}

export default Faq