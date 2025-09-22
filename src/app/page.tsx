'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email registrata:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#F2EFDC] text-[#2A3244] font-sans">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-[#003366] drop-shadow-lg"
        >
          Rogers Peet Company
        </motion.h1>
        <p className="mt-4 text-xl md:text-2xl italic text-[#C53346]">
          Respectable, Conservative and Clean
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-2xl border border-[#003366] w-72 focus:outline-none"
          />
          <Button type="submit" className="bg-[#003366] text-white px-6 py-3 rounded-2xl hover:bg-[#2A3244] transition">
            Iscriviti Ora
          </Button>
        </form>
        <p className="mt-2 text-sm text-[#2A3244]">
          Sii il primo a scoprire la collezione esclusiva
        </p>
      </section>

      {/* STORIA */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#003366]">Dal 1874 a Oggi</h2>
          <p className="text-lg leading-relaxed mb-6">
            Rogers Peet nasce a New York nel 1874, rivoluzionando l’abbigliamento maschile
            con qualità accessibile, innovazione e trasparenza. Oggi il brand rinasce in chiave digitale,
            con un’eredità americana e una produzione Made in Italy.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md text-[#2A3244]">
            <li>✔ Primo brand a introdurre etichette con la composizione dei tessuti.</li>
            <li>✔ Prezzi fissi e trasparenti per costruire fiducia con i clienti.</li>
            <li>✔ Politica di rimborso innovativa per l’epoca.</li>
            <li>✔ Pubblicità illustrata pionieristica nel settore moda.</li>
            <li>✔ Fornitore esclusivo di uniformi ufficiali per l’esercito americano.</li>
          </ul>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/building.jpg"
          alt="Palazzo Rogers Peet a New York"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* FUN FACTS */}
      <section className="bg-[#F2EFDC] py-20 px-6">
        <h2 className="text-3xl font-semibold text-center text-[#003366] mb-12">Curiosità sul Brand</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#C53346] mb-2">Etichette Rivoluzionarie</h3>
            <p className="text-md text-[#2A3244]">Primi ad aggiungere etichette con la composizione dei tessuti, un gesto di trasparenza unico per l’epoca.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#C53346] mb-2">Pubblicità Illustrata</h3>
            <p className="text-md text-[#2A3244]">Campagne creative con illustrazioni che hanno anticipato le moderne strategie di branding.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#C53346] mb-2">Uniformi USA</h3>
            <p className="text-md text-[#2A3244]">Rogers Peet fu scelto come fornitore esclusivo di uniformi per l’esercito americano, un simbolo di fiducia e qualità.</p>
          </div>
        </div>
      </section>

      {/* PRODOTTO EROE */}
      <section className="bg-[#003366] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">The 1874 Tee</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          La t-shirt da collezione che segna il ritorno di un’icona. Cotone premium, packaging esclusivo,
          tiratura limitata. Un pezzo da collezione.
        </p>
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/1874tee.jpg"
          alt="The 1874 Tee"
          className="mx-auto w-72 rounded-xl shadow-lg"
        />
        <Button className="mt-8 bg-[#C53346] hover:bg-[#6C6868] text-white px-8 py-4 rounded-2xl text-lg">
          Voglio la mia in anteprima
        </Button>
      </section>

      {/* ICONIC TRUCK */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="/green-truck.jpg"
          alt="Furgoncino verde Rogers Peet in Colazione da Tiffany"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#003366]">Un’icona anche al cinema</h2>
          <p className="text-lg leading-relaxed">
            Il celebre furgoncino verde Rogers Peet appare in una scena del film cult <em>Colazione da Tiffany</em> (1961)
            accanto ad Audrey Hepburn. Un simbolo della presenza del brand non solo nella moda, ma anche nella cultura pop.
          </p>
        </div>
      </section>

      {/* VISIONE */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#003366] mb-8">Una Collezione Senza Tempo</h2>
        <p className="max-w-3xl mx-auto text-lg mb-12">
          A Novembre 2025 lanceremo il nostro <strong>Total Look</strong>: camicie, giubbini,
          maglieria e accessori. Un guardaroba completo, fedele allo stile Rogers Peet.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F2EFDC] rounded-2xl shadow-md h-64 flex items-center justify-center text-[#6C6868] italic">
            Coming Soon
          </div>
          <div className="bg-[#F2EFDC] rounded-2xl shadow-md h-64 flex items-center justify-center text-[#6C6868] italic">
            Coming Soon
          </div>
          <div className="bg-[#F2EFDC] rounded-2xl shadow-md h-64 flex items-center justify-center text-[#6C6868] italic">
            Coming Soon
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-[#C53346] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Entra nella Community Rogers Peet</h2>
        <p className="mb-6">Countdown al lancio: Settembre 2025</p>
        <Button className="bg-white text-[#C53346] px-8 py-4 rounded-2xl text-lg hover:bg-[#F2EFDC]">
          Iscriviti Subito
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A3244] text-white py-6 text-center text-sm">
        <p>© 2025 Rogers Peet Company — A Label That Spells Characters</p>
      </footer>
    </div>
  );
}
