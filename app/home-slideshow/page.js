"use client";
import Counter from "@/components/Counter";
import Price from "@/components/Price";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import VideoResume from "@/components/VideoResume";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_type_function } = useContext(context);
  useEffect(() => {
    banner_type_function("slider");
  }, []);
  return (
    <TrueManLayout>
      {/* stats */}
      <Counter />
      {/* stats end */}
      {/* text */}
      <Story />
      {/* text end */}
      {/* video resume */}
      <VideoResume />
      {/* video resume end */}
      {/* services */}
      <Services />
      {/* services end */}
      {/* price plans */}
      <Price />
      {/* price plans end */}
      {/* testimonials */}
      <Testimonials />
      <Publications />
    </TrueManLayout>
  );
};
export default Index;
