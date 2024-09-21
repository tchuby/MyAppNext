import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold mb-10">Página Inicial</h1>
        <p className="border-2 border-blue-900 p-8 text-2xl">Acesso a página inicial</p>
      </section>
      <section className="container text-center my-10">

        <h2 className="text-xl font-bold mb-10">Informações</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-blue-200 text-black p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-10">Voodoo é pra jacu</h3>
            <p>Bim bim</p>
          </div>

          <div className="bg-blue-200 text-black p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-10">Voodoo é pra jacu</h3>
            <p>Bom bom</p>
          </div>

          <div className="bg-blue-200 text-black p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-10">Voodoo é pra jacu</h3>
            <p>Bum bum</p>
          </div>

        </div>
      </section>
      <section className = "bg-cover bg-center h-screen w-screen bg-[url(./images/panda.webp)]">

        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2 className="text-xl font-bold mb-10 bg-red-600 bg-opacity-40">Sobre</h2>
            <p className="text-lg mb-8 bg-red-600 bg-opacity-40">Tudo sobre o nosso site</p>
            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg">CLIQUE AQUI PARA SABER MAIS</a>
          </div>
        </div>

      </section>
    </main>
  );
}
