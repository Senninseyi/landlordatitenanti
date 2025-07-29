import { User, Crown, Briefcase, Building } from 'lucide-react';
import PrimaryButton from '../button/button';

const userRoles = [
  {
    icon: User,
    title: 'Tenant',
    subtitle: 'Find Your Perfect Home',
    features: [
      'Rent properties (flat, service apartment, house)',
      'Search for compatible flatmates',
      'Browse and buy properties or land',
      'Access verified listings with photos',
      'Direct contact with landlords and agents',
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-blue-500',
  },
  {
    icon: Crown,
    title: 'Landlord',
    subtitle: 'Maximize Your Property Value',
    features: [
      'List properties for rent or sale',
      'Manage incoming tenant requests',
      'Upload property documents and images',
      'Screen potential tenants',
      'Track property performance analytics',
    ],
    badge: 'Verified',
    badgeColor: 'bg-green-500',
  },
  {
    icon: Briefcase,
    title: 'Agent',
    subtitle: 'Grow Your Real Estate Business',
    features: [
      'List and manage multiple properties',
      'Facilitate buyer/tenant acquisition',
      'Professional profile and credentials',
      'Commission tracking and management',
      'Lead generation and client management',
    ],
    badge: 'Professional',
    badgeColor: 'bg-purple-500',
  },
  {
    icon: Building,
    title: 'Real Estate Company',
    subtitle: 'Enterprise Property Management',
    features: [
      'Buy and sell houses, lands, and properties',
      'Upload verified documents for listings',
      'Manage large-scale property portfolios',
      'Advanced analytics and reporting',
      'Dedicated account management support',
    ],
    badge: 'Enterprise',
    badgeColor: 'bg-orange-500',
  },
];

function HomeUserRolesSection() {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Join as...</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your role and get access to tailored features designed for
            your specific needs in the Nigerian property market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userRoles.map((role, index) => (
            <div
              key={index}
              className="border bg-white rounded-xl p-6 flex flex-col gap-3 justify-between hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <role.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div
                    className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${role.badgeColor} text-white px-2 py-0.5 rounded text-xs`}
                  >
                    {role.badge}
                  </div>
                </div>
                <div className="text-xl font-semibold">{role.title}</div>
                <div className="font-medium text-sm text-muted-foreground">
                  {role.subtitle}
                </div>
              </div>

              <ul className="space-y-2 ">
                {role.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#717182] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <PrimaryButton
                variant={index % 2 === 0 ? 'primary' : 'outlined'}
                className="mt-4"
                block
              >
                {`Join as ${role.title}`}
              </PrimaryButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeUserRolesSection;
