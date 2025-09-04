import CryptoHeader from "@/components/CryptoHeader";
import CryptoHero from "@/components/CryptoHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureSection from "@/components/FeatureSection";
import CryptoFooter from "@/components/CryptoFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CryptoHeader />
      <CryptoHero />
      <HowItWorksSection />
      
      <FeatureSection 
        title="If It Stops the Scroll,"
        subtitle="It Pumps"
        description="Scroll-stopping content is the key signal that a coin might go viral. Our AI analyzes engagement patterns to spot the next big meme coin before everyone else jumps on board."
        buttonText="Download App"
      />
      
      <FeatureSection 
        title="Virality is the Signal"
        subtitle="Early Detection"
        description="Monitor social media buzz and identify meme coins with viral potential. Track momentum and find investment opportunities with lightning-fast signals."
        buttonText="Start Trading"
        imageLeft={true}
      />
      
      <FeatureSection 
        title="The Feed is Your Alpha"
        subtitle="Social Intelligence"
        description="Scroll our feed and spot viral content before anyone else. Every scroll can be a signal for the next explosive meme coin movement."
        buttonText="Join Community"
      />
      
      <CryptoFooter />
    </main>
  );
};

export default Index;
