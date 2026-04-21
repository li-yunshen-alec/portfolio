import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Cerevolt from "@/components/Cerevolt";
import Cuttr from "@/components/Cuttr";
import Project1 from "@/components/Project1";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Cuttr />
        <Cerevolt />
        <Project1 />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
