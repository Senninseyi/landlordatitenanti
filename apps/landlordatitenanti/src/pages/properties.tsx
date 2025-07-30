import { Tabs, Input, Badge, message, Button } from 'antd';
import { Filter } from 'lucide-react';
import { useState } from 'react';

import { AdvancedSearchDialog } from '@/components/modal/advancedSearchModal';

import Layout from '@/components/layout';
import FindFlatmateTab from '@/components/properties/flatmatetab';
import RentPropertyTab from '@/components/properties/renttab';
import ServiceApartmentTab from '@/components/properties/serviceapartmenttab';
import PropertySaleTab from '@/components/properties/propertysaletab';
import HouseSaleTab from '@/components/properties/housesaletab';
import LandSaleTab from '@/components/properties/landsaletab';

function Properties() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [messageApi, contextHolder] = message.useMessage();

  const handleAdvancedSearch = (filters: any) => {
    setActiveFilters(filters);
  };
  return (
    <>
      <Layout>
        <section className="pt-20 pb-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-medium mb-4">
                Find Your Perfect Property
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse through thousands of verified properties across Nigeria.
                From rental apartments to land sales, find exactly what
                you&apos;re looking for.
              </p>
            </div>

            <div className="flex gap-4 mb-6 max-w-4xl mx-auto">
              <div className="flex-1">
                <Input
                  placeholder="Search by location, property type, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="large"
                />
              </div>
              <AdvancedSearchDialog onSearch={handleAdvancedSearch} />
            </div>

            {Object.keys(activeFilters).length > 0 && (
              <div className="mb-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Active Filters:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.location && (
                    <Badge>Location: {activeFilters.location}</Badge>
                  )}
                  {activeFilters.propertyType && (
                    <Badge>Type: {activeFilters.propertyType}</Badge>
                  )}
                  {activeFilters.priceMin > 0 && (
                    <Badge>
                      Min: ₦{(activeFilters.priceMin / 1000000).toFixed(1)}M
                    </Badge>
                  )}
                  {activeFilters.priceMax < 10000000 && (
                    <Badge>
                      Max: ₦{(activeFilters.priceMax / 1000000).toFixed(1)}M
                    </Badge>
                  )}
                  {activeFilters.amenities?.map((amenity: string) => (
                    <Badge key={amenity}>{amenity}</Badge>
                  ))}
                  <Button size="small" onClick={() => setActiveFilters({})}>
                    Clear All
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-7">
              <Tabs
                defaultActiveKey="rent-property"
                tabBarGutter={16}
                type="card"
                className="mb-8"
                centered
              >
                <Tabs.TabPane tab="Rent Property" key="rent-property">
                  <RentPropertyTab
                    searchQuery={searchQuery}
                    filters={activeFilters}
                  />
                </Tabs.TabPane>

                <Tabs.TabPane tab="Find Flatmate" key="find-flatmate">
                  <FindFlatmateTab
                    searchQuery={searchQuery}
                    filters={activeFilters}
                  />
                </Tabs.TabPane>

                <Tabs.TabPane tab="Service Apartment" key="service-apartment">
                  <ServiceApartmentTab
                    searchQuery={searchQuery}
                    filters={activeFilters}
                  />
                </Tabs.TabPane>

                <Tabs.TabPane tab="Property Sale" key="property-sale">
                  <PropertySaleTab
                    searchQuery={searchQuery}
                    filters={activeFilters}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="House Sale" key="house-sale">
                  <HouseSaleTab
                    searchQuery={searchQuery}
                    filters={activeFilters}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Land Sale" key="land-sale">
                  <LandSaleTab
                    searchQuery={searchQuery}
                    filters={activeFilters}
                  />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </section>
      </Layout>
      {contextHolder}
    </>
  );
}

export default Properties;
