function Main() {
    return ( 
        <>
            <div>
                <img className="text-center mx-auto w-[960px] h-[500px] rounded-3xl object-cover" src="/Imagens/Imagem-Main.png" alt="Imagem principal do site"/>
                <div className="flex justify-center items-end">
                    <button className="bg-[#004D66] rounded-xl p-3">
                        <h1 href="#InfoSustentavel" className="font-sans font-semibold text-[30px] text-[#F5F4D3]">Clique aqui!</h1>
                    </button>
                </div>
            </div>
            <div className="bg-[#5FB6F5] p-14 text-center font-semibold text-[35px] my-[120px] ">
                {/* Adicionar um fundo mais um padding para o texto */}
                {/* Adicionar fontes na Main e também no Header */}
                <h1 id="EcoDicas" className="text-[#33333]">Quais são as principais fontes de energia sustentáveis?</h1>
            </div>
            {/* Adicionar imagens e se possível, dividir as imagens em pastas para uma organização fluida */}
            <div id="InfoSustentavel" className="flex gap-20 justify-center text-center">
                <div>
                    <img className="rounded-xl w-[300px]" src="/Imagens/imagens-main/Energia-Solar.png" alt=""/>
                    <h2 className="font-semibold font-sans my-5 text-[#33333]" >Energia Solar</h2>
                </div>
                <div>
                    <img className="rounded-xl w-[300px]" src="/Imagens/imagens-main/Energia-Hidrica.png" alt=""/>
                    <h2 className="font-semibold font-sans my-5 text-[#33333]">Energia Hídrica</h2>
                </div>
                <div>
                    <img className="rounded-xl w-[300px]" src="/Imagens/imagens-main/Energia-Eolica.png" alt=""/>
                    <h2 className="font-semibold font-sans my-5 text-[#33333]">Energia Eólica</h2>
                </div>
            </div>
        </>
    );
}

export default Main;