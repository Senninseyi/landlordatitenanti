import React from 'react';
import { Collapse, CollapseProps } from 'antd';

const faqs = [
  {
    question: 'How do I list my property?',
    answer:
      "To list your property, sign up for a landlord account, complete your profile, and use our property listing wizard. You'll need to provide property details, photos, and rental terms. Our team reviews all listings within 24 hours.",
  },
  {
    question: 'What documents do I need to rent a property?',
    answer:
      "Typically, you'll need government-issued ID, proof of income (pay stubs or employment letter), bank statements, and references from previous landlords. Some properties may require additional documentation.",
  },
  {
    question: 'How does the application process work?',
    answer:
      "After finding a property you like, submit an online application with required documents. The landlord will review your application and may request additional information. You'll receive a decision within 2-3 business days.",
  },
  {
    question: 'What are your fees?',
    answer:
      'For tenants, our platform is completely free. For landlords, we charge a small percentage of the monthly rent only when you successfully rent out your property. No upfront fees or hidden costs.',
  },
  {
    question: 'How do I schedule a property viewing?',
    answer:
      "You can schedule viewings directly through the property listing page. Choose from available time slots or request a custom time. You'll receive confirmation and viewing details via email and SMS.",
  },
];

const FaqSection: React.FC = () => {
  const faqItems: CollapseProps['items'] = faqs.map((faq, index) => ({
    key: String(index + 1),
    label: faq.question,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <div className="container mx-auto px-4 lg:px-0 w-full max-w-6xl">
      <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
      <Collapse items={faqItems} defaultActiveKey={['1']} size="large" />
    </div>
  );
};

export default FaqSection;