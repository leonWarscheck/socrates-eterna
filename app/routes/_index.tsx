import type { MetaFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import CtaBottom from "~/components/Index/CtaBottom";
import HeroSectionTop from "~/components/Index/HeroSectionTop";
import HeroStory from "~/components/Index/HeroStory";
import PriceTable from "~/components/Index/PriceTable";
import RetreatSection from "~/components/Index/RetreatSection";
import { initScrollHeader } from "~/utils/scrollHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Socrates Eterna | PANTHEON" },
    {
      property: "og:title",
      content: "PANTHEON - Exclusive Insight and Fellowship!"
    },
    {
      name: "description",
      content: "Find Out What Happened to Socrates..."
    },
    {
      property: "og:image",
      content: "/main/lp2-lg-cmyk-crop4.jpg"
    }
  ];
};

export default function Index() {

  return (
    <main className="">
      <HeroSectionTop />
      <HeroStory />
      <PriceTable />
      <RetreatSection />
      <CtaBottom />
    </main >
  );
}
