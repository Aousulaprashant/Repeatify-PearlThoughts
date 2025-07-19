"use client";
import React from "react";
import RecurringPicker from "../components/RecurringPicker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <RecurringPicker />
      <Footer />
    </main>
  );
}
