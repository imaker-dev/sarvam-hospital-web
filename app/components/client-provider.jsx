"use client";

import { Suspense } from "react";
import CustomCursor from "./custom-cursor";
import AppLayout from "./app-layout";
import SplashScreen from "../views/layouts/splash-screen";

export default function ClientProviders({ children }) {
  return (
      <Suspense fallback={<SplashScreen />}>
        <CustomCursor />
        <AppLayout>{children}</AppLayout>
      </Suspense>
  );
}
