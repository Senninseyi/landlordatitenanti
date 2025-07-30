import PropertyGrid from '../cards/propertygrid';

function LandSaleTab({
  searchQuery,
  filters,
}: {
  searchQuery: string;
  filters: any;
}) {
  const landForSale = [
    {
      id: 501,
      title: 'Residential Plot',
      location: 'Ibeju-Lekki, Lagos',
      price: '₦15,000,000',
      period: 'sale',
      bedrooms: null,
      bathrooms: null,
      area: '1,000 sqm',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      type: 'Residential',
      views: 198,
      available: 'Available Now',
    },
    {
      id: 502,
      title: 'Commercial Land',
      location: 'Abuja Municipal, FCT',
      price: '₦180,000,000',
      period: 'sale',
      bedrooms: null,
      bathrooms: null,
      area: '5,000 sqm',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      type: 'Commercial',
      views: 234,
      available: 'Available Now',
    },
  ];

  return <PropertyGrid properties={landForSale} showBedBath={false} />;
}
export default LandSaleTab;
