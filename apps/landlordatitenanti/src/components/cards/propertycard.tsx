import { Badge, message } from 'antd';
import { BarChart3, Bath, Bed, Eye, Heart, MapPin, Square } from 'lucide-react';
import PrimaryButton from '../button/button';
import { ImageWithFallback } from '../imageWithFallback';
import { useState, useCallback } from 'react';

function PropertyCard({
  property,
  showBedBath,
}: {
  property: any;
  showBedBath: boolean;
}) {
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

    if (isFavorite(property.id)) {
      removeFromFavorites(property.id);
      messageApi.success('Removed from favorites');
    } else {
      addToFavorites(property);
      messageApi.success('Added to favorites');
    }
  };

  const handleCompareClick = () => {
    if (isInCompareList(property.id)) {
      removeFromCompare(property.id);
      messageApi.success('Removed from comparison');
    } else {
      if (compareList.length >= 3) {
        messageApi.warning(
          'Maximum 3 properties can be compared. Oldest property will be replaced.'
        );
      }
      addToCompare(property);
      messageApi.success('Added to comparison');
    }
  };

  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-primary text-primary-foreground">
            {property.type}
          </Badge>
          {property.available && (
            <Badge className="">{property.available}</Badge>
          )}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 backdrop-blur-sm rounded-full hover:bg-background transition-colors ${
              isFavorite(property.id)
                ? 'bg-red-500 text-white'
                : 'bg-background/80'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite(property.id) ? 'fill-current' : ''
              }`}
            />
          </button>
          <button
            onClick={handleCompareClick}
            className={`p-2 backdrop-blur-sm rounded-full hover:bg-background transition-colors ${
              isInCompareList(property.id)
                ? 'bg-blue-500 text-white'
                : 'bg-background/80'
            }`}
            title={
              isInCompareList(property.id)
                ? 'Remove from comparison'
                : 'Add to comparison'
            }
          >
            <BarChart3 className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
            <Eye className="w-3 h-3" />
            {property.views}
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl mb-2">{property.title}</div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {property.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-medium text-primary">
              {property.price}
            </div>
            <div className="text-sm text-muted-foreground">
              {property.period === 'sale'
                ? 'for sale'
                : `per ${property.period}`}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        {showBedBath && property.bedrooms && (
          <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              {property.bedrooms} bed
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              {property.bathrooms} bath
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              {property.area}
            </div>
          </div>
        )}
        {!showBedBath && (
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Square className="w-4 h-4" />
            {property.area}
          </div>
        )}

        <div className="flex gap-3">
          <PrimaryButton className="flex-1">
            {property.period === 'sale' ? 'View Details' : 'Contact Owner'}
          </PrimaryButton>
          <PrimaryButton variant="outlined" className="flex-1">
            {property.period === 'sale' ? 'Make Offer' : 'Schedule Tour'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

function useApp(): {
  isAuthenticated: boolean;
  addToFavorites: (property: any) => void;
  removeFromFavorites: (id: any) => void;
  isFavorite: (id: any) => boolean;
  addToCompare: (property: any) => void;
  removeFromCompare: (id: any) => void;
  isInCompareList: (id: any) => boolean;
  compareList: any[];
} {
  // Simulate user authentication (in a real app, this would come from context or a hook)
  const [isAuthenticated] = useState(true);

  // State for favorites and compare list
  const [favorites, setFavorites] = useState<any[]>([]);
  const [compareList, setCompareList] = useState<any[]>([]);

  const addToFavorites = useCallback((property: any) => {
    setFavorites((prev) => [...prev, property]);
  }, []);

  const removeFromFavorites = useCallback((id: any) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const isFavorite = useCallback(
    (id: any) => favorites.some((item) => item.id === id),
    [favorites]
  );

  const addToCompare = useCallback((property: any) => {
    setCompareList((prev) => {
      // If the property is already in compare list, don't add it again.
      if (prev.some((item) => item.id === property.id)) {
        return prev;
      }
      // Limit to a maximum of 3 properties by replacing the oldest property.
      if (prev.length >= 3) {
        return [...prev.slice(1), property];
      }
      return [...prev, property];
    });
  }, []);

  const removeFromCompare = useCallback((id: any) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const isInCompareList = useCallback(
    (id: any) => compareList.some((item) => item.id === id),
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
