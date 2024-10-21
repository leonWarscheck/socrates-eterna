import type { MetaFunction } from "@remix-run/node";
import CtaBottom from "~/components/index/cta-bottom";
import HeroSectionTop from "~/components/index/hero-top";
import HeroStory from "~/components/index/hero-story";
import PriceTable from "~/components/index/price-table";
import RetreatSection from "~/components/index/retreat-section";

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
      content: "/main/og-title.jpg"
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
