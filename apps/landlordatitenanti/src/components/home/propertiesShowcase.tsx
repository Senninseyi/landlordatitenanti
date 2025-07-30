import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';
import { Badge } from 'antd';

import { ImageWithFallback } from '../imageWithFallback';
import PrimaryButton from '../button/button';

const properties = [
  {
    id: 1,
    title: 'Luxury 3BR Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦2,500,000',
    period: 'year',
    bedrooms: 3,
    bathrooms: 3,
    area: '1,500 sq ft',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    type: 'Rent',
    featured: true,
    views: 245,
  },
  {
    id: 3,
    title: 'Service Apartment',
    location: 'Ikeja GRA, Lagos',
    price: '₦450,000',
    period: 'month',
    bedrooms: 1,
    bathrooms: 1,
    area: '800 sq ft',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    type: 'Service Apt',
    featured: true,
    views: 156,
  },
  {
    id: 4,
    title: 'Commercial Land',
    location: 'Asokoro, Abuja',
    price: '₦120,000,000',
    period: 'sale',
    bedrooms: null,
    bathrooms: null,
    area: '2,000 sqm',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    type: 'Land',
    featured: false,
    views: 98,
  },
];

const typeColors = {
  Rent: 'bg-blue-500 text-white',
  Sale: 'bg-green-500 text-white',
  'Service Apt': 'bg-purple-500 text-white',
  Land: 'bg-orange-500 text-white',
};

export function PropertiesShowcase() {
  return (
    <section id="properties" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Featured Properties</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover premium properties across Nigeria&apos;s major cities. From
            luxury apartments in Lagos to commercial lands in Abuja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div
              className="flex border rounded-2xl overflow-hidden flex-col"
              key={property.id}
            >
              <div className="relative">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-5 left-4 flex gap-2 z-10">
                  <Badge
                    className={`${
                      typeColors[property.type as keyof typeof typeColors]
                    } px-2.5 py-0.5 rounded-full text-sm`}
                  >
                    {property.type}
                  </Badge>
                  {property.featured && (
                    <Badge className="bg-yellow-500 px-2.5 py-0.5 rounded-full text-sm text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4  right-4 flex gap-2 z-10">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                    <Eye className="w-3 h-3" />
                    {property.views}
                  </div>
                </div>
              </div>

              <div className="flex justify-between p-4 items-start mb-2">
                <div>
                  <div className="text-xl font-semibold">{property.title}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-medium text-primary">
                    {property.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {property.period === 'sale'
                      ? 'for sale'
                      : `per ${property.period}`}
                  </div>
                </div>
              </div>

              <div className="px-4 py-2">
                {property.bedrooms ? (
                  <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.bedrooms} bed
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {property.bathrooms} bath
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      {property.area}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Square className="w-4 h-4" />
                    {property.area}
                  </div>
                )}
              </div>

              <div className="flex px-4 pb-4 gap-3">
                <PrimaryButton className="flex-1">View Details</PrimaryButton>
                <PrimaryButton
                  variant="outlined"
                  className="flex-1"
                  type="default"
                >
                  {property.type === 'Land'
                    ? 'Contact Seller'
                    : 'Schedule Tour'}
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton size="large" ghost>
            View All Properties
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
