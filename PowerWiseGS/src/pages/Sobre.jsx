function Sobre() {
    return ( 
        <>
            <main className="flex flex-col lg:flex-row justify-center items-center gap-[30px] px-4 sm:px-8 lg:px-20">
                <div className="text-center lg:text-left">
                    <h1 id="Sobre" className="font-dmserif text-[30px] sm:text-[35px] lg:text-[40px] text-[#004D66] mb-6">Sobre nós</h1>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-roboto max-w-[650px] mx-auto lg:ml-0 lg:my-6">A PowerWise é uma empresa pioneira no compromisso com a sustentabilidade e inovação, dedicada a transformar a maneira como consumimos e gerenciamos energia. Com soluções inteligentes voltadas para eficiência energética e tecnologias renováveis, buscamos promover práticas conscientes que alinhem desenvolvimento tecnológico com respeito ao meio ambiente.</p>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-roboto max-w-[650px] mx-auto lg:ml-0 lg:my-6">Nossa missão é ser referência global em soluções sustentáveis, proporcionando alternativas que reduzem impactos ambientais, economizam recursos e impulsionam uma qualidade de vida superior. Acreditamos que é possível equilibrar progresso e preservação ambiental, construindo um legado de inovação responsável para as futuras gerações.</p>
                </div>
                <div>
                    <img className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto rounded-3xl mx-auto" src="/Imagens/imagem-ConteudoSobre.png" alt="Imagem ilustrativa"/>
                </div>
            </main>
        </>
    );
}

export default Sobre;
