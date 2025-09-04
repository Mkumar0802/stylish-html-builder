import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Skyper Pool Apartment",
      address: "1020 Bloomingdale Ave",
      price: "280,000",
      priceType: "sale" as const,
      beds: 4,
      baths: 2,
      sqft: 450,
      status: "FOR SALE" as const
    },
    {
      id: 2,
      image: property2,
      title: "North Dillard Street",
      address: "4330 Bell Shoals Rd",
      price: "250",
      priceType: "rent" as const,
      beds: 4,
      baths: 2,
      sqft: 400,
      status: "FOR RENT" as const
    },
    {
      id: 3,
      image: property3,
      title: "Eaton Garth Penthouse",
      address: "7722 18th Ave, Brooklyn",
      price: "190,000",
      priceType: "sale" as const,
      beds: 4,
      baths: 2,
      sqft: 450,
      status: "FEATURED" as const
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Homes For You
          </h2>
          <p className="text-warm-gray text-lg">
            Based on your view history
          </p>
        </div>

        {/* Properties Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                address={property.address}
                price={property.price}
                priceType={property.priceType}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                status={property.status}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-warm-gray-light hover:bg-warm-gray-light hover:border-warm-gray"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-warm-gray-light hover:bg-warm-gray-light hover:border-warm-gray"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;