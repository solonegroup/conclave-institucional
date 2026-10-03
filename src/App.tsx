/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './i18n/LanguageContext';
import { Hero, Essence, Units, Principles, Footer } from './components/Sections';

export default function App() {
  return (
    <LanguageProvider>
    <main className="bg-black min-h-screen">
      <Hero />
      <Essence />
      <Units />
      <Principles />
      <Footer />
    </main>
    </LanguageProvider>
  );
}
