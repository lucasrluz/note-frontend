"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { TopElement } from "./components/top/topElement";
import { BottomElement } from "./components/bottom/bottomElement";

export default function IndexPage() {
  return (
    <main className="flex h-screen flex-col">
      <TopElement />
      <BottomElement />
    </main>
  );
}
