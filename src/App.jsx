import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import About from "./screen/About";
import Projects from "./screen/Projects";
import Reviews from "./screen/Reviews";
import WorkExperience from "./screen/Experience";
import Contact from "./screen/Contact";
import Footer from "./components/Footer";
import ThreeDModel from "./components/ThreeDModel";

const queryClient = new QueryClient();

const App = () => {
  return (
<QueryClientProvider client={queryClient}>
<TooltipProvider>
  <Toaster />
  <Sonner />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<main className="max-w-7xl mx-auto relative">
      <Navbar />
      <div id="banner">
      </div>
      <div className="section" id="banner">
        <Home />
      </div>
      <div className="section" id="intro">
      {/* <ThreeDModel/> */}
      <About />
      </div>
      <Projects />
      <div className="section" id="description">
      <WorkExperience />
      </div>
      <Reviews/>
      <div className="section" id="contact">
      <Contact />
      </div>
      <Footer />

    </main>} />
      <Route path="/reviews" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
</TooltipProvider>
</QueryClientProvider>
  );
};

export default App;