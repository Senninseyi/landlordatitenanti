import { Shield, Clock, Users, Star, MapPin, FileCheck } from 'lucide-react';

import { ImageWithFallback } from '../imageWithFallback';

const features = [
  {
    icon: Shield,
    title: 'Verified Properties',
    description:
      'All listings are verified with proper documentation and authentic photos.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description:
      'Properties available across all 36 states in Nigeria, from Lagos to Kano.',
  },
  {
    icon: FileCheck,
    title: 'Document Management',
    description:
      'Secure handling of property documents, land titles, and rental agreements.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Round-the-clock customer support in English, Yoruba, Hausa, and Igbo.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description:
      "Building trust in Nigeria's property market through transparency.",
  },
  {
    icon: Star,
    title: 'Local Expertise',
    description:
      'Deep understanding of Nigerian property laws and market dynamics.',
  },
];

const stats = [
  { number: '50,000+', label: 'Properties Listed' },
  { number: '100,000+', label: 'Happy Users' },
  { number: '36', label: 'States Covered' },
  { number: '4.8/5', label: 'User Rating' },
];

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-secondary/20">
      <div className="container flex flex-col items-center mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="text-left">
              <h2 className="text-3xl font-medium mb-4">
                About Landlord ati Tenant
              </h2>
              <p className="text-muted-foreground">
                Nigeria&apos;s most trusted property platform, connecting
                millions of users across the country. We&apos;re revolutionizing
                how Nigerians find, rent, buy, and sell properties while
                building a community of trust and transparency.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To democratize property access in Nigeria by providing a
                transparent, secure, and efficient platform that serves tenants,
                landlords, agents, and real estate companies nationwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the bustling streets of Lagos to the serene landscapes of
                Plateau State, we&apos;re making property transactions simpler,
                safer, and more accessible for everyone.
              </p>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
              alt="Nigerian cityscape"
              className="rounded-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="w-full max-w-6xl">
          <h3 className="text-2xl font-medium text-center mb-12">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-semibold mb-2">
                  {feature.title}
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
