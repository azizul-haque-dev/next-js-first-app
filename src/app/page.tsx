import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0]">
        <HeroSection />
        <FeaturedCourses />
      </main>
    </>
  );
}
//
