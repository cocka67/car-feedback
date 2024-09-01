'use client';

import React from 'react';
import { CardsList } from "./components/CardsList/CardsList"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"



export default function Home() {
  return (
    <main>
      <CardsList/>
      <Footer/>
    </main>
  );
}
