import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseus";
import MusicSchoolTestimonials from "@/components/ui/TestimonialCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <MusicSchoolTestimonials/>
       <UpcomingWebinar/>
       <Instructors/>
    </main>
  );
}
