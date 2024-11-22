import CardDicas from "../Components/CardDicas";

function EcoDicas() {
    return (  
        <>
            <div className="bg-[#004D66] p-10 text-center text-[30px] sm:text-[35px] lg:text-[40px]">
                <h1 className="font-dmserif text-white">Quais são as principais fontes de energia sustentáveis?</h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center text-center px-4 sm:px-8 lg:px-20">
                <CardDicas imagem={'Energia-Solar.png'} texto={'Energia Solar'}/>
                <CardDicas imagem={'Energia-Eolica.png'} texto={'Energia Eolica'}/>
                <CardDicas imagem={'Energia-Hidrica.png'} texto={'Energia Hidrica'}/>
            </div>
        </>
    );
}

export default EcoDicas;
