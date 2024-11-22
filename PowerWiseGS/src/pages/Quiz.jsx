import CardQuiz from "../Components/CardQuiz";

function Quiz() {
    return ( 
        <>
            <div className="bg-[#004D66] p-10 w-auto">
                <div>
                    <h1 className=" text-white font-dmserif text-[30px] text-center mb-[50px] ">Teste  seu conhecimento e divirta-se com seus amigos!</h1>
                </div>
                <CardQuiz dificuldade={'básico'} texto={'Comece pelo nível básico e teste seu conhecimento!'} imagem={'imagem-quiz.jpeg'}/>
                <hr className="border-t-4 border-black mx-auto mt-[50px] mb-[50px]"></hr>
                <CardQuiz dificuldade={'Intermediário'} texto={'Se desafie de verdade e conheça curiosidades sustentáveis'} imagem={'imagem-quiz2.jpeg'}/>
                <hr className="border-t-4 border-black mx-auto mt-[50px] mb-[50px]"></hr>
                <CardQuiz dificuldade={'Difícil'} texto={'O verdadeiro desafio!'} imagem={'imagem-quiz3.png'}/>
            </div>
        </>
    );
}

export default Quiz;