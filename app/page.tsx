"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/dashboard");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      My Home Screen
    </main>
  );
}
