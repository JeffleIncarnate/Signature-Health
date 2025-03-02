import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Signature Health",
};

import { Splash } from "@/core/components/splash";
import { HomeMain } from "@/core/components/home";

export default function Home() {
  return (
    <>
      <Splash />
      <HomeMain />
    </>
  );
}
