"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Loader from "./Loader"; // Import the loader

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay, for example, simulating data fetching
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can adjust the delay

    // Clean up timeout if the component unmounts
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* Show loader if loading is true */}
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Approach />
          <Footer />
        </div>
      )}
    </main>
  );
}
