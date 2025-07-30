import { Select, Button } from 'antd';
import FlatmateCard from '../cards/flatmatecard';

function FindFlatmateTab({
  searchQuery,
  filters,
}: {
  searchQuery: string;
  filters: any;
}) {
  const flatmateListings = [
    {
      id: 101,
      title: 'Looking for Female Flatmate',
      location: 'Yaba, Lagos',
      price: '₦600,000',
      period: 'year',
      bedrooms: 2,
      bathrooms: 2,
      area: 'Shared 2BR Apartment',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      type: 'Female Only',
      views: 123,
      available: 'Available Now',
      poster: 'Sarah A.',
      preferences: ['Non-smoker', 'Professional', 'Clean'],
    },
    {
      id: 102,
      title: 'Male Roommate Needed',
      location: 'Ikeja, Lagos',
      price: '₦800,000',
      period: 'year',
      bedrooms: 3,
      bathrooms: 2,
      area: 'Shared 3BR Flat',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      type: 'Male Only',
      views: 89,
      available: 'Feb 15th',
      poster: 'Emeka O.',
      preferences: ['Student/Professional', 'Quiet', 'Respectful'],
    },
    {
      id: 103,
      title: 'Co-ed Apartment Sharing',
      location: 'Victoria Island, Lagos',
      price: '₦1,200,000',
      period: 'year',
      bedrooms: 3,
      bathrooms: 3,
      area: 'Luxury 3BR Apartment',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      type: 'Co-ed',
      views: 156,
      available: 'Available Now',
      poster: 'Kemi L.',
      preferences: ['Professional', 'Social', 'Clean'],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Filters */}
      <div className="grid md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border">
        <Select placeholder="Gender Preference" style={{ width: '100%' }}>
          <Select.Option value="female">Female Only</Select.Option>
          <Select.Option value="male">Male Only</Select.Option>
          <Select.Option value="coed">Co-ed</Select.Option>
        </Select>
        <Select placeholder="Lifestyle" style={{ width: '100%' }}>
          <Select.Option value="student">Student</Select.Option>
          <Select.Option value="professional">Professional</Select.Option>
          <Select.Option value="any">Any</Select.Option>
        </Select>
        <Select placeholder="Budget Range" style={{ width: '100%' }}>
          <Select.Option value="0-500k">₦0 - ₦500K</Select.Option>
          <Select.Option value="500k-1m">₦500K - ₦1M</Select.Option>
          <Select.Option value="1m+">₦1M+</Select.Option>
        </Select>
        <Button type="primary" block>Apply Filters</Button>
      </div>

      {/* Flatmate Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {flatmateListings.map((listing) => (
          <FlatmateCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default FindFlatmateTab;
