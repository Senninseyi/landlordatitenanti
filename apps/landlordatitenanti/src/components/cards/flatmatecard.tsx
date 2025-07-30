import { Eye, Heart, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from '../imageWithFallback';
import PrimaryButton from '../button/button';
import { Badge, message } from 'antd';
import { useState } from 'react';

function FlatmateCard({ listing }: { listing: any }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { isAuthenticated, addToFavorites, removeFromFavorites, isFavorite } =
    useApp();

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      messageApi.error('Please sign in to save favorites');
      return;
    }

    if (isFavorite(listing.id)) {
      removeFromFavorites(listing.id);
      messageApi.success('Removed from favorites');
    } else {
      addToFavorites(listing);
      messageApi.success('Added to favorites');
    }
  };

  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-purple-500 text-white">{listing.type}</Badge>
          <Badge>{listing.available}</Badge>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 backdrop-blur-sm rounded-full hover:bg-background transition-colors ${
              isFavorite(listing.id)
                ? 'bg-red-500 text-white'
                : 'bg-background/80'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite(listing.id) ? 'fill-current' : ''
              }`}
            />
          </button>
          <div className="flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
            <Eye className="w-3 h-3" />
            {listing.views}
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl font-semibold mb-2">{listing.title}</div>
            <div className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
              <MapPin className="w-4 h-4" />
              {listing.location}
            </div>
            <div className="text-sm text-muted-foreground">
              Posted by: {listing.poster}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-medium text-primary">
              {listing.price}
            </div>
            <div className="text-sm text-muted-foreground">
              per {listing.period}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {listing.area}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {listing.preferences.map((pref: string, index: number) => (
            <Badge key={index} className="text-xs">
              {pref}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <PrimaryButton className="flex-1">Contact</PrimaryButton>
          <PrimaryButton variant="outlined" className="flex-1">
            View Profile
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default FlatmateCard;

function useApp(): {
  isAuthenticated: boolean;
  addToFavorites(listing: any): void;
  removeFromFavorites(id: any): void;
  isFavorite(id: any): boolean;
} {
  // For demonstration, assume the user is authenticated.
  const isAuthenticated = true;
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToFavorites = (listing: any) => {
    setFavorites((prev) => [...prev, listing]);
  };

  const removeFromFavorites = (id: any) => {
    setFavorites((prev) => prev.filter((listing) => listing.id !== id));
  };

  const isFavorite = (id: any): boolean => {
    return favorites.some((listing) => listing.id === id);
  };

  return { isAuthenticated, addToFavorites, removeFromFavorites, isFavorite };
}
