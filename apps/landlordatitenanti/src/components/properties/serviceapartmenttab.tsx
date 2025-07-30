import { Select, Button, Row, Col } from 'antd';
import ServiceApartmentCard from '../cards/serviceaprartmentcard';

function ServiceApartmentTab({
  searchQuery,
  filters,
}: {
  searchQuery: string;
  filters: any;
}) {
  const serviceApartments = [
    {
      id: 201,
      title: 'Executive Service Apartment',
      location: 'Victoria Island, Lagos',
      price: '₦450,000',
      period: 'month',
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      type: 'Executive',
      views: 234,
      available: 'Available Now',
      amenities: ['WiFi', 'Cleaning', 'Parking', 'Security'],
    },
    {
      id: 202,
      title: 'Luxury Short Stay Apartment',
      location: 'Lekki Phase 1, Lagos',
      price: '₦650,000',
      period: 'month',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      type: 'Luxury',
      views: 189,
      available: 'Available Now',
      amenities: ['WiFi', 'Gym', 'Pool', 'Cleaning', 'Parking'],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="grid md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border">
        <Select placeholder="Stay Duration" style={{ width: '100%' }}>
          <Select.Option value="daily">Daily</Select.Option>
          <Select.Option value="weekly">Weekly</Select.Option>
          <Select.Option value="monthly">Monthly</Select.Option>
          <Select.Option value="longterm">Long Term</Select.Option>
        </Select>

        <Select placeholder="Apartment Type" style={{ width: '100%' }}>
          <Select.Option value="standard">Standard</Select.Option>
          <Select.Option value="executive">Executive</Select.Option>
          <Select.Option value="luxury">Luxury</Select.Option>
        </Select>

        <Select placeholder="Amenities" style={{ width: '100%' }}>
          <Select.Option value="wifi">WiFi</Select.Option>
          <Select.Option value="gym">Gym</Select.Option>
          <Select.Option value="pool">Pool</Select.Option>
          <Select.Option value="parking">Parking</Select.Option>
        </Select>

        <Button type="primary" block>
          Apply Filters
        </Button>
      </div>

      {/* Service Apartments Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {serviceApartments.map((apartment, index) => (
          <ServiceApartmentCard key={index} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}

export default ServiceApartmentTab;
