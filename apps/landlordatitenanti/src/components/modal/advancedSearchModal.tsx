import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Modal,
  Button,
  Select,
  Checkbox,
  Slider,
  Badge,
  DatePicker,
} from 'antd';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PrimaryButton from '../button/button';

interface SearchFilters {
  location: string;
  propertyType: string;
  priceMin: number;
  priceMax: number;
  bedrooms: string;
  bathrooms: string;
  area: string;
  amenities: string[];
  availableFrom: string;
  furnished: string;
  parking: boolean;
  pets: boolean;
  verification: boolean;
}

interface AdvancedSearchDialogProps {
  onSearch: (filters: SearchFilters) => void;
}

const amenitiesList = [
  'WiFi',
  'Air Conditioning',
  'Gym',
  'Swimming Pool',
  'Security',
  'Generator',
  'Elevator',
  'Balcony',
  'Garden',
  'Garage',
];

const locations = [
  'Victoria Island, Lagos',
  'Lekki, Lagos',
  'Ikeja, Lagos',
  'Yaba, Lagos',
  'Surulere, Lagos',
  'Ikoyi, Lagos',
  'Magodo, Lagos',
  'Ajah, Lagos',
  'Abuja Municipal, FCT',
  'Garki, Abuja',
  'Wuse, Abuja',
  'Maitama, Abuja',
];

export function AdvancedSearchDialog({ onSearch }: AdvancedSearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    priceMin: 0,
    priceMax: 10000000,
    bedrooms: '',
    bathrooms: '',
    area: '',
    amenities: [],
    availableFrom: '',
    furnished: '',
    parking: false,
    pets: false,
    verification: false,
  });

  const handleAmenityToggle = (amenity: string) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
    setOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      propertyType: '',
      priceMin: 0,
      priceMax: 10000000,
      bedrooms: '',
      bathrooms: '',
      area: '',
      amenities: [],
      availableFrom: '',
      furnished: '',
      parking: false,
      pets: false,
      verification: false,
    });
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    }
    return `₦${(price / 1000).toFixed(0)}K`;
  };

  return (
    <>
      <PrimaryButton
        type="dashed"
        size="large"
        onClick={() => setOpen(true)}
        className="gap-2"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Advanced Search
      </PrimaryButton>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={handleSearch}
        footer={
          <div className="flex justify-between gap-3">
            <Button onClick={resetFilters}>Reset Filters</Button>
            <div className="flex gap-3">
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="primary" onClick={handleSearch}>
                Search Properties
              </Button>
            </div>
          </div>
        }
        width={700}
        title={
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Advanced Property Search
          </div>
        }
      >
        <div className="mb-2 text-gray-500">
          Use these filters to find exactly what you&apos;re looking for.
        </div>

        <div className="grid gap-6 py-4">
          {/* Location and Property Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-medium">Location</div>
              <Select
                value={filters.location || undefined}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, location: value }))
                }
                placeholder="Select location"
                style={{ width: '100%' }}
                options={locations.map((location) => ({
                  label: location,
                  value: location,
                }))}
                allowClear
              />
            </div>
            <div className="space-y-2">
              <div className="font-medium">Property Type</div>
              <Select
                value={filters.propertyType || undefined}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, propertyType: value }))
                }
                placeholder="Select type"
                style={{ width: '100%' }}
                options={[
                  { value: 'apartment', label: 'Apartment' },
                  { value: 'house', label: 'House' },
                  { value: 'flat', label: 'Flat' },
                  { value: 'studio', label: 'Studio' },
                  { value: 'duplex', label: 'Duplex' },
                  { value: 'bungalow', label: 'Bungalow' },
                ]}
                allowClear
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <div className="font-medium">Price Range (Annual Rent)</div>
            <div className="px-4">
              <Slider
                range
                value={[filters.priceMin, filters.priceMax]}
                onChange={(value: number | number[]) => {
                  if (Array.isArray(value)) {
                    const [min, max] = value;
                    setFilters((prev) => ({
                      ...prev,
                      priceMin: min,
                      priceMax: max,
                    }));
                  }
                }}
                max={10000000}
                min={0}
                step={100000}
                style={{ width: '100%' }}
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatPrice(filters.priceMin)}</span>
              <span>{formatPrice(filters.priceMax)}</span>
            </div>
          </div>

          {/* Bedrooms and Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-medium">Bedrooms</div>
              <Select
                value={filters.bedrooms || undefined}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, bedrooms: value }))
                }
                placeholder="Any"
                style={{ width: '100%' }}
                options={[
                  { value: 'studio', label: 'Studio' },
                  { value: '1', label: '1 Bedroom' },
                  { value: '2', label: '2 Bedrooms' },
                  { value: '3', label: '3 Bedrooms' },
                  { value: '4', label: '4 Bedrooms' },
                  { value: '5+', label: '5+ Bedrooms' },
                ]}
                allowClear
              />
            </div>
            <div className="space-y-2">
              <div className="font-medium">Bathrooms</div>
              <Select
                value={filters.bathrooms || undefined}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, bathrooms: value }))
                }
                placeholder="Any"
                style={{ width: '100%' }}
                options={[
                  { value: '1', label: '1 Bathroom' },
                  { value: '2', label: '2 Bathrooms' },
                  { value: '3', label: '3 Bathrooms' },
                  { value: '4', label: '4 Bathrooms' },
                  { value: '5+', label: '5+ Bathrooms' },
                ]}
                allowClear
              />
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <div className="font-medium">Amenities</div>
            <div className="grid grid-cols-3 gap-3">
              {amenitiesList.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                  >
                    {amenity}
                  </Checkbox>
                </div>
              ))}
            </div>
            {filters.amenities.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {filters.amenities.map((amenity) => (
                  <Badge
                    key={amenity}
                    style={{
                      background: '#f0f0f0',
                      color: '#222',
                      padding: '0 8px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {amenity}
                    <Button
                      type="text"
                      size="small"
                      style={{ marginLeft: 4, padding: 0, height: 20 }}
                      onClick={() => handleAmenityToggle(amenity)}
                      icon={<X className="w-3 h-3" />}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Additional Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-medium">Furnished</div>
              <Select
                value={filters.furnished || undefined}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, furnished: value }))
                }
                placeholder="Any"
                style={{ width: '100%' }}
                options={[
                  { value: 'furnished', label: 'Furnished' },
                  { value: 'semi-furnished', label: 'Semi-Furnished' },
                  { value: 'unfurnished', label: 'Unfurnished' },
                ]}
                allowClear
              />
            </div>
            <div className="space-y-2">
              <div className="font-medium">Available From</div>
              <DatePicker
                style={{ width: '100%' }}
                value={
                  filters.availableFrom
                    ? dayjs(filters.availableFrom)
                    : undefined
                }
                onChange={(_, dateString) =>
                  setFilters((prev) => ({
                    ...prev,
                    availableFrom: Array.isArray(dateString)
                      ? dateString[0]
                      : dateString || '',
                  }))
                }
                format="YYYY-MM-DD"
                allowClear
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={filters.parking}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    parking: !!e.target.checked,
                  }))
                }
              >
                Parking Available
              </Checkbox>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={filters.pets}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, pets: !!e.target.checked }))
                }
              >
                Pet Friendly
              </Checkbox>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={filters.verification}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    verification: !!e.target.checked,
                  }))
                }
              >
                Verified Properties Only
              </Checkbox>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
