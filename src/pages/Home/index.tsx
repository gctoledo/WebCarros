import Container from "../../components/Container";

function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          placeholder="Digite o nome do carro"
          className="w-full border-2 h-9 px-3 outline-none rounded-lg"
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202312/20231217/peugeot-208-1.6-16v-flex-like-essencial-manual-wmimagem13351043463.jpg?s=fill&w=552&h=414&q=60"
            alt="Carro"
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
          />
          <p className="font-bold mt-1 mb-2 px-2">Peugeot 208 1.6</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2016/2016 | 15.000km</span>
            <strong className="text-black font-medium text-xl">R$60.000</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-black">São Paulo - SP</span>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Home;
