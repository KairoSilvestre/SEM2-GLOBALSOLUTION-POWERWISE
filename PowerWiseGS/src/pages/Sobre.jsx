function Sobre() {
    return ( 
        <>
            <main className="flex justify-center items-center gap-[30px] ">
                <div>
                    <h1  id="Sobre" className="font-dmserif text-[40px] text-[#004D66] ml-10">Sobre nós</h1>
                    <p className="text-[20px] font-roboto w-[650px] ml-10 my-10">A PowerWise é uma empresa pioneira no compromisso com a sustentabilidade e inovação, dedicada a transformar a maneira como consumimos e gerenciamos energia. Com soluções inteligentes voltadas para eficiência energética e tecnologias renováveis, buscamos promover práticas conscientes que alinhem desenvolvimento tecnológico com respeito ao meio ambiente.</p>
                    <p className="text-[20px] font-roboto w-[650px] ml-10 my-10">Nossa missão é ser referência global em soluções sustentáveis, proporcionando alternativas que reduzem impactos ambientais, economizam recursos e impulsionam uma qualidade de vida superior. Acreditamos que é possível equilibrar progresso e preservação ambiental, construindo um legado de inovação responsável para as futuras gerações.</p>
                </div>
                <div>
                    <img className="w-[500px] h-[480px] rounded-3xl" src="/Imagens/imagem-ConteudoSobre.png" alt="Imagem ilustrativa"/>
                </div>
            </main>

        </>
    );
}

export default Sobre;