import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Plan from "@/components/Plan";
import TransparencyPreview from "@/components/TransparencyPreview";
import Rewards from "@/components/Rewards";
import LiveDonors from "@/components/LiveDonors";
import DonateCTA from "@/components/DonateCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Plan />
      <LiveDonors />
      <TransparencyPreview />
      <Rewards />
      <DonateCTA />
    </>
  );
}
