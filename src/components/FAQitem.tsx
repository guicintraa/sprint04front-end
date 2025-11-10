type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold">{question}</h3>
      <p>{answer}</p>
    </div>
  );
}
