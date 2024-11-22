import CardDicas from "../Components/CardDicas";

function EcoDicas() {
    return (  
        <>
            <div className="bg-[#004D66] p-10 text-center text-[35px]">
                <h1 className="font-dmserif text-white">Quais são as principais fontes de energia sustentáveis?</h1>
            </div>
            <div className="flex gap-20 justify-center text-center"> 
                <CardDicas imagem={'Energia-Solar.png'} texto={'Energia Solar'}/>
                <CardDicas imagem={'Energia-Eolica.png'} texto={'Energia Eolica'}/>
                <CardDicas imagem={'Energia-Hidrica.png'} texto={'Energia Hidrica'}/>
            </div>
        </>
    );
}

export default EcoDicas;