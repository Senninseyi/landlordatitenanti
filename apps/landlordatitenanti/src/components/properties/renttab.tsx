import PropertyCard from '../cards/propertycard';

import { Select, Button } from 'antd';
function RentPropertyTab({
  searchQuery,
  filters,
}: {
  searchQuery: string;
  filters: any;
}) {
  const rentProperties = [
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
      type: 'Apartment',
      views: 245,
      available: 'Available Now',
    },
    {
      id: 2,
      title: 'Modern 2BR Flat',
      location: 'Ikeja GRA, Lagos',
      price: '₦1,800,000',
      period: 'year',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      type: 'Flat',
      views: 189,
      available: 'Feb 1st',
    },
    {
      id: 3,
      title: 'Spacious 4BR House',
      location: 'Lekki Phase 1, Lagos',
      price: '₦4,200,000',
      period: 'year',
      bedrooms: 4,
      bathrooms: 4,
      area: '2,200 sq ft',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      type: 'House',
      views: 156,
      available: 'Available Now',
    },
    {
      id: 4,
      title: 'Cozy 1BR Studio',
      location: 'Surulere, Lagos',
      price: '₦900,000',
      period: 'year',
      bedrooms: 1,
      bathrooms: 1,
      area: '600 sq ft',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      type: 'Studio',
      views: 98,
      available: 'March 1st',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border">
        <Select placeholder="Property Type" style={{ width: '100%' }}>
          <Select.Option value="apartment">Apartment</Select.Option>
          <Select.Option value="flat">Flat</Select.Option>
          <Select.Option value="house">House</Select.Option>
          <Select.Option value="studio">Studio</Select.Option>
        </Select>
        <Select placeholder="Bedrooms" style={{ width: '100%' }}>
          <Select.Option value="1">1 Bedroom</Select.Option>
          <Select.Option value="2">2 Bedrooms</Select.Option>
          <Select.Option value="3">3 Bedrooms</Select.Option>
          <Select.Option value="4">4+ Bedrooms</Select.Option>
        </Select>
        <Select placeholder="Price Range" style={{ width: '100%' }}>
          <Select.Option value="0-1m">₦0 - ₦1M</Select.Option>
          <Select.Option value="1m-3m">₦1M - ₦3M</Select.Option>
          <Select.Option value="3m-5m">₦3M - ₦5M</Select.Option>
          <Select.Option value="5m+">₦5M+</Select.Option>
        </Select>
        <Button type="primary" block>
          Apply Filters
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            showBedBath={true}
          />
        ))}
      </div>
    </div>
  );
}

export default RentPropertyTab;
