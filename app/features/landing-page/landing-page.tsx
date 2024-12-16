import type { MetaFunction } from "@remix-run/node";
import CtaBottom from "~/features/landing-page/cta-bottom";
import HeroSectionTop from "~/features/landing-page/hero-top";
import HeroStory from "~/features/landing-page/hero-story";
import PriceTable from "~/features/landing-page/price-table";
import RetreatSection from "~/features/landing-page/retreat-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Socrates Eterna | PANTHEON" },
    {
      property: "og:title",
      content: "PANTHEON - Exclusive Insight and Fellowship!",
    },
    {
      name: "description",
      content: "Find Out What Happened to Socrates...",
    },
    {
      property: "og:image",
      content: "/main/og-title.jpg",
    },
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
    </main>
  );
}
