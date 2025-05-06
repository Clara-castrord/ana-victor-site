import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const convidados = [...]; // Lista omitida por brevidade

export default function AnaVictorSite() {
  const [rsvp, setRsvp] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 p-6 text-center">
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-4">
          Ana Clara & Victor Cardoso
        </h1>
        <p className="text-xl text-pink-500">Comemore conosco esse momento especial</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Convidados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {convidados.map((nome, index) => (
            <Card key={index} className="bg-white shadow-md rounded-2xl">
              <CardContent className="p-4 text-gray-700 font-medium">{nome}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        {rsvp ? (
          <p className="text-green-600 font-semibold text-lg">Obrigado por confirmar sua presença! 💌</p>
        ) : (
          <Button onClick={() => setRsvp(true)} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 text-lg rounded-xl">
            Confirmar Presença
          </Button>
        )}
      </section>
    </div>
  );
}