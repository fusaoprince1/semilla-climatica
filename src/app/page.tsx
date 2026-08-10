import Hero from "@/components/Hero";
import ClimateThermometer from "@/components/ClimateThermometer";
import ExtremeWeather from "@/components/ExtremeWeather";
import Plan from "@/components/Plan";
import TransparencyPreview from "@/components/TransparencyPreview";
import Rewards from "@/components/Rewards";
import LiveDonors from "@/components/LiveDonors";
import DonateCTA from "@/components/DonateCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClimateThermometer />
      <ExtremeWeather />
      <Plan />
      <LiveDonors />
      <TransparencyPreview />
      <Rewards />
      <DonateCTA />
    </>
  );
}
