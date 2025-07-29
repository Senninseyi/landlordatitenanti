import {
  Home,
  Users,
  Building2,
  House,
  ShoppingBag,
  Building,
  TreePine,
} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PrimaryButton from '../button/button';

const features = [
  {
    icon: Home,
    title: 'Rent a Flat',
    description:
      'Browse verified flats with detailed filters for bedrooms, price, and location. Contact landlords directly or schedule viewings.',
    action: 'Browse Flats',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Users,
    title: 'Find a Flatmate',
    description:
      'Connect with users looking to share accommodation. View roommate preferences and profiles, send in-app messages.',
    action: 'Find Roommates',
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Building2,
    title: 'Book Service Apartment',
    description:
      'Furnished apartments for short/long stays with amenities like cleaning services and Wi-Fi. Perfect for professionals and travelers.',
    action: 'Book Now',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: House,
    title: 'Rent a House',
    description:
      'Discover full residential homes including bungalows, duplexes, and detached houses with virtual tours and direct contact.',
    action: 'View Houses',
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: ShoppingBag,
    title: 'Buy or Sell a House',
    description:
      'Complete property sales with pricing, documents, and inspection requests. End-to-end sale support with status updates.',
    action: 'Explore Sales',
    color: 'bg-red-500/10 text-red-600',
  },
  {
    icon: Building,
    title: 'Buy or Sell Property',
    description:
      'Commercial and residential properties including office spaces, shops, and warehouses with advanced filters and documentation.',
    action: 'View Properties',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    icon: TreePine,
    title: 'Land Sales',
    description:
      'List and buy plots of land with detailed location, size, and title documents. Direct seller contact and negotiation support.',
    action: 'Browse Land',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
];

function FeaturesSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive property solutions for every need in Nigeria. From
            finding your dream home to connecting with the perfect flatmate, we
            provide everything you need in one platform.
          </p>
        </div>

        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-2">
              <div className="p-4 border rounded-lg flex flex-col justify-between gap-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xl">{feature.title}</span>
                </div>
                <div>
                  <p className="leading-relaxed">{feature.description}</p>
                </div>
                <div>
                  <PrimaryButton
                    variant={index % 2 === 0 ? 'outlined' : 'primary'}
                    block
                  >
                    {feature.action}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection;
