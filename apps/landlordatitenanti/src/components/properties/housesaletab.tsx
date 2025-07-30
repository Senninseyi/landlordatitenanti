import PropertyGrid from '../cards/propertygrid';

function HouseSaleTab({
  searchQuery,
  filters,
}: {
  searchQuery: string;
  filters: any;
}) {
  const housesForSale = [
    {
      id: 401,
      title: '5BR Detached Duplex',
      location: 'Lekki Phase 2, Lagos',
      price: '₦120,000,000',
      period: 'sale',
      bedrooms: 5,
      bathrooms: 5,
      area: '3,500 sq ft',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      type: 'Detached',
      views: 289,
      available: 'Available Now',
    },
    {
      id: 402,
      title: '4BR Semi-Detached House',
      location: 'Magodo, Lagos',
      price: '₦85,000,000',
      period: 'sale',
      bedrooms: 4,
      bathrooms: 4,
      area: '2,800 sq ft',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      type: 'Semi-Detached',
      views: 167,
      available: 'Available Now',
    },
  ];

  return <PropertyGrid properties={housesForSale} showBedBath={true} />;
}
export default HouseSaleTab;
