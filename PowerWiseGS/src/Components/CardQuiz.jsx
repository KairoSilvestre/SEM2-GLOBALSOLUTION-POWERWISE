export default function CardQuiz({dificuldade, texto, imagem}) {
    return (  
        <>
            <div className="flex justify-center gap-[200px] text-center">
                <div className="flex text-center bg-white rounded-3xl mb-[30px] p-[30px]">
                    <div>
                        <img className="w-[100px] p-1 rounded-xl ml-4 mr-4" src={`/Imagens/imagens-quiz/${imagem}`} alt="Imagem representativa sobre sustentabilidade"/>
                    </div>
                    <div>
                        <h1 className="font-dmserif text-[30px] text-[#004D66]">{dificuldade}</h1>
                        <hr className="border-t-1 border-black w-[300px] mx-auto"></hr>
                        <p className="font-roboto text-[#004D66] text-[20px] mr-3 mx-auto w-[300px]">{texto}</p>
                    </div>
                </div>
                <button className="mb-6">
                    <h1 className="bg-[#333333] hover:scale-110 text-white p-5 w-[300px] rounded-3xl text-[24px] font-dmserif">Criar partida!</h1>
                </button>
            </div>
        </>
    );
}