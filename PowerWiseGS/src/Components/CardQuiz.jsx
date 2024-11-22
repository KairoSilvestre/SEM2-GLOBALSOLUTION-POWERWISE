export default function CardQuiz({ dificuldade, texto, imagem }) {
    return (
      <>
        <div className="flex justify-center gap-4 sm:gap-8 md:gap-[100px] text-center flex-wrap sm:flex-nowrap">
          <div className="flex text-center bg-white rounded-3xl mb-[30px] p-[20px] sm:p-[30px] w-full sm:w-auto">
            <div>
              <img className="w-[80px] sm:w-[100px] p-1 rounded-xl mx-4" src={`/Imagens/imagens-quiz/${imagem}`} alt="Imagem representativa sobre sustentabilidade" />
            </div>
            <div>
              <h1 className="font-dmserif text-[24px] sm:text-[30px] text-[#004D66]">{dificuldade}</h1>
              <hr className="border-t-1 border-black w-[200px] sm:w-[300px] mx-auto" />
              <p className="font-roboto text-[#004D66] text-[16px] sm:text-[20px] mx-auto w-[250px] sm:w-[300px]">{texto}</p>
            </div>
          </div>
          <button className="mb-6 w-full sm:w-auto">
            <h1 className="bg-[#333333] hover:scale-110 text-white p-4 sm:p-5 w-full sm:w-[300px] rounded-3xl text-[20px] sm:text-[24px] font-dmserif text-center">
              Criar partida!
            </h1>
          </button>
        </div>
      </>
    );
  }
  