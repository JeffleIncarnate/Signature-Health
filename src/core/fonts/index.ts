import { EB_Garamond, Inter, Condiment } from "next/font/google";

export const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const condiment = Condiment({
  variable: "--font-condiment",
  weight: "400",
  subsets: ["latin"],
});
