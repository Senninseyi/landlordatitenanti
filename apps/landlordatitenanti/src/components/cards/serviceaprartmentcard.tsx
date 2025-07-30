import { Badge, message } from 'antd';
import { useState, useCallback } from 'react';
import { ImageWithFallback } from '../imageWithFallback';
import {
  BarChart3,
  Bath,
  Bed,
  Car,
  Eye,
  Heart,
  MapPin,
  Shield,
  Square,
  Wifi,
} from 'lucide-react';
import PrimaryButton from '../button/button';

function ServiceApartmentCard({ apartment }: { apartment: any }) {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    isAuthenticated,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    addToCompare,
    removeFromCompare,
    isInCompareList,
    compareList,
  } = useApp();

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      messageApi.error('Please sign in to save favorites');
      return;
    }

    if (isFavorite(apartment.id)) {
      removeFromFavorites(apartment.id);
      messageApi.success('Removed from favorites');
    } else {
      addToFavorites(apartment);
      messageApi.success('Added to favorites');
    }
  };

  const handleCompareClick = () => {
    if (isInCompareList(apartment.id)) {
      removeFromCompare(apartment.id);
      messageApi.success('Removed from comparison');
    } else {
      if (compareList.length >= 3) {
        messageApi.warning(
          'Maximum 3 properties can be compared. Oldest property will be replaced.'
        );
      }
      addToCompare(apartment);
      messageApi.success('Added to comparison');
    }
  };

  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={apartment.image}
          alt={apartment.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-purple-500 text-white">{apartment.type}</Badge>
          <Badge>{apartment.available}</Badge>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 backdrop-blur-sm rounded-full hover:bg-background transition-colors ${
              isFavorite(apartment.id)
                ? 'bg-red-500 text-white'
                : 'bg-background/80'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite(apartment.id) ? 'fill-current' : ''
              }`}
            />
          </button>
          <button
            onClick={handleCompareClick}
            className={`p-2 backdrop-blur-sm rounded-full hover:bg-background transition-colors ${
              isInCompareList(apartment.id)
                ? 'bg-blue-500 text-white'
                : 'bg-background/80'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
            <Eye className="w-3 h-3" />
            {apartment.views}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">{apartment.title}</h3>
            <p className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {apartment.location}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-medium text-primary">
              {apartment.price}
            </div>
            <div className="text-sm text-muted-foreground">
              per {apartment.period}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            {apartment.bedrooms} bed
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {apartment.bathrooms} bath
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            {apartment.area}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.amenities.map((amenity: string, index: number) => (
            <Badge key={index} className="text-xs">
              {amenity === 'WiFi' && <Wifi className="w-3 h-3 mr-1" />}
              {amenity === 'Parking' && <Car className="w-3 h-3 mr-1" />}
              {amenity === 'Security' && <Shield className="w-3 h-3 mr-1" />}
              {amenity}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <PrimaryButton className="flex-1">Book Now</PrimaryButton>
          <PrimaryButton variant="outlined" className="flex-1">
            View Details
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default ServiceApartmentCard;
function useApp() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<any[]>([]);
  const isAuthenticated = true; // For example purposes, assume the user is authenticated

  const addToFavorites = useCallback((apartment: any) => {
    setFavorites((prev) => [...prev, apartment.id]);
  }, []);

  const removeFromFavorites = useCallback((id: number) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  }, []);

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  );

  const addToCompare = useCallback((apartment: any) => {
    setCompareList((prev) => {
      // If already in compareList, return unchanged
      if (prev.some((item) => item.id === apartment.id)) return prev;
      // Maximum 3 properties allowed; remove the oldest if needed
      if (prev.length >= 3) {
        return [...prev.slice(1), apartment];
      }
      return [...prev, apartment];
    });
  }, []);

  const removeFromCompare = useCallback((id: number) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const isInCompareList = useCallback(
    (id: number) => compareList.some((item) => item.id === id),
    [compareList]
  );

  return {
    isAuthenticated,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    addToCompare,
    removeFromCompare,
    isInCompareList,
    compareList,
  };
}
