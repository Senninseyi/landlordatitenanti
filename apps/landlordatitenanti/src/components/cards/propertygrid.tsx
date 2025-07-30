import { Select, Button } from 'antd';
import PropertyCard from './propertycard';

function PropertyGrid({
  properties,
  showBedBath,
}: {
  properties: any[];
  showBedBath: boolean;
}) {
  return (
    <div className="space-y-6">
      {/* Quick Filters */}
      <div className="grid md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border">
        <Select placeholder="Property Type">
          <Select.Option value="residential">Residential</Select.Option>
          <Select.Option value="commercial">Commercial</Select.Option>
          <Select.Option value="mixed">Mixed Use</Select.Option>
        </Select>
        <Select placeholder="Price Range">
          <Select.Option value="0-50m">₦0 - ₦50M</Select.Option>
          <Select.Option value="50m-100m">₦50M - ₦100M</Select.Option>
          <Select.Option value="100m+">₦100M+</Select.Option>
        </Select>
        <Select placeholder="Sort By">
          <Select.Option value="price-low">Price: Low to High</Select.Option>
          <Select.Option value="price-high">Price: High to Low</Select.Option>
          <Select.Option value="newest">Newest First</Select.Option>
          <Select.Option value="popular">Most Popular</Select.Option>
        </Select>
        <Button>Apply Filters</Button>
      </div>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            showBedBath={showBedBath}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyGrid;
