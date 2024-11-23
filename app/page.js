'use client';

import React from 'react';
import { CardsList } from "./components/CardsList/CardsList"
import { Footer } from "./components/Footer/Footer"


export default function Home() {
  return (
    <main>
      <CardsList/>
      <Footer/>
    </main>
  );
}
