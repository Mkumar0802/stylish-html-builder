import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  priceType: "sale" | "rent";
  beds: number;
  baths: number;
  sqft: number;
  status?: "FOR SALE" | "FOR RENT" | "FEATURED";
}

const PropertyCard = ({ 
  image, 
  title, 
  address, 
  price, 
  priceType, 
  beds, 
  baths, 
  sqft, 
  status 
}: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {status && (
          <Badge 
            className={`absolute top-3 left-3 ${
              status === "FEATURED" 
                ? "bg-accent text-accent-foreground" 
                : status === "FOR SALE"
                ? "bg-sage-green text-white"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {status}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-card-foreground mb-2">{title}</h3>
        
        <div className="flex items-center text-warm-gray text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{address}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary">
            ${price}
            {priceType === "rent" && <span className="text-sm font-normal text-warm-gray">/month</span>}
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-warm-gray text-sm">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;