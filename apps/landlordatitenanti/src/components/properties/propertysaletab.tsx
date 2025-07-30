import PropertyGrid from '../cards/propertygrid';

function PropertySaleTab({
  searchQuery,
  filters,
}: {
  searchQuery: string;
  filters: any;
}) {
  const propertyForSale = [
    {
      id: 301,
      title: 'Commercial Office Space',
      location: 'Victoria Island, Lagos',
      price: '₦250,000,000',
      period: 'sale',
      bedrooms: null,
      bathrooms: null,
      area: '5,000 sq ft',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      type: 'Commercial',
      views: 345,
      available: 'Available Now',
    },
    {
      id: 302,
      title: 'Retail Shop Space',
      location: 'Ikeja, Lagos',
      price: '₦45,000,000',
      period: 'sale',
      bedrooms: null,
      bathrooms: 2,
      area: '1,200 sq ft',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      type: 'Retail',
      views: 123,
      available: 'Available Now',
    },
  ];

  return <PropertyGrid properties={propertyForSale} showBedBath={false} />;
}

export default PropertySaleTab;
