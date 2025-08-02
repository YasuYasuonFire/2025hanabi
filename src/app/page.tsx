import { Hero } from "@/components/Hero";
import { LocationRecommendation } from "@/components/LocationRecommendation";
import { EventHighlights } from "@/components/EventHighlights";
import { AccessGuide } from "@/components/AccessGuide";
import { ViewingGuide } from "@/components/ViewingGuide";
import { EventStatus } from "@/components/EventStatus";
import { InteractiveMap } from "@/components/InteractiveMap";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LocationRecommendation />
      <EventHighlights />
      <AccessGuide />
      <ViewingGuide />
      <EventStatus />
      <InteractiveMap />
      <FAQ />
      <Contact />
    </main>
  );
}