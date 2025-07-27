import Layout from '@/components/layout';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';
import { Form, Input, Select, FormProps, Collapse, CollapseProps } from 'antd';
import PrimaryButton from '@/components/button/button';

const { TextArea } = Input;
const { Option } = Select;

interface FieldType {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const initialValues: FieldType = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const contactMethods = [
  {
    id: 'phone',
    label: 'Call Us',
    details: '(555) 123-4567',
    Icon: Phone,
  },
  {
    id: 'email',
    label: 'Email Us',
    details: 'support@rentpro.com',
    Icon: Mail,
  },
  {
    id: 'chat',
    label: 'Live Chat',
    details: 'Available 24/7',
    Icon: MessageSquare,
  },
  {
    id: 'response',
    label: 'Response Time',
    details: '< 24 hours',
    Icon: Clock,
  },
];

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

const faqItems: CollapseProps['items'] = faqs.map((faq, index) => ({
  key: String(index + 1),
  label: faq.question,
  children: <p>{faq.answer}</p>,
}));

function Contact() {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <div className="pt-20 h-[450px] contactBackgroundImage pb-12 flex flex-col justify-center items-center text-left md:text-center">
        <div className="container flex items-center justify-center mx-auto px-4">
          <div className="w-full md:max-w-2xl">
            <div className="space-y-6 w-full">
              <div className="space-y-4 text-white">
                <h1 className="text-4xl lg:text-5xl font-medium leading-tight">
                  Get In Touch
                  <span className="block">
                    We&apos;re Here to <span className="text-accent">Help</span>
                  </span>
                </h1>
                <p className="text-white text-lg leading-relaxed">
                  Have questions about our platform? Need assistance with your
                  rental journey? Our dedicated support team is ready to assist
                  you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 gap-10 justify-center">
        <div className="grid container w-full max-w-6xl mx-auto px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black gap-4">
          {contactMethods.map(({ id, label, details, Icon }) => (
            <div
              key={id}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{label}</div>
                <div className="text-sm text-muted-foreground">{details}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <h3 className="font-medium">Send Us a Message</h3>
              <p className="text-sm">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={initialValues}
              className="space-y-6"
              requiredMark={false}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[
                    { required: true, message: 'Please enter your full name' },
                  ]}
                >
                  <Input placeholder="John Doe" size="large" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Enter a valid email',
                    },
                  ]}
                >
                  <Input placeholder="john@example.com" size="large" />
                </Form.Item>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Form.Item name="phone" label="Phone Number">
                  <Input placeholder="(555) 123-4567" size="large" />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[
                    { required: true, message: 'Please select a subject' },
                  ]}
                >
                  <Select placeholder="Select a topic" size="large">
                    <Option value="general">General Inquiry</Option>
                    <Option value="tenant">Tenant Support</Option>
                    <Option value="landlord">Landlord Support</Option>
                    <Option value="technical">Technical Issue</Option>
                    <Option value="partnership">Partnership</Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: 'Please enter your message' },
                ]}
              >
                <TextArea
                  rows={5}
                  size="large"
                  placeholder="Tell us how we can help you..."
                />
              </Form.Item>

              <Form.Item>
                <PrimaryButton htmlType="submit" className="bg-accent">
                  Send Message
                </PrimaryButton>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 py-0 w-full max-w-6xl">
          <h3 className="text-xl font-semibold mb-6">
            Frequently Asked Questions
          </h3>
          <Collapse items={faqItems} defaultActiveKey={['1']} size="large" />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
