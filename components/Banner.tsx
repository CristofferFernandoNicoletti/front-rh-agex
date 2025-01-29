'use client';

import Image from 'next/image';

export function Banner() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/images/fundo.jpeg"
        alt="AGEX Transporte"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col justify-center text-white px-4 container mx-auto">
        <div className="bg-primary max-w-[250px] w-full gap-2 h-[40px] rounded-full font-semibold flex justify-center items-center py-[6px] px-4">
          <p className="text-white font-semibold text-base font-inter">TRABALHE CONOSCO</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight mt-6">
          Confira nossas vagas disponíveis e faça parte
          <br />
          da equipe que movimenta o futuro do
          <br />
          transporte!
        </h1>
      </div>
    </div>
  );
}
