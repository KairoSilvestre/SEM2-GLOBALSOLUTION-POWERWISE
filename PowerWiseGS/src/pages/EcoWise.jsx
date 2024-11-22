function EcoWise() {
    return ( 
        <>
            <div className="flex flex-col lg:flex-row justify-center gap-[40px] pb-[40px] items-center px-4 sm:px-8 lg:px-20">
                <div className="text-center lg:text-left">
                    <h1 className="font-dmserif text-[30px] sm:text-[35px] lg:text-[40px] text-[#004D66] ml-0 lg:ml-10">Nosso produto</h1>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-roboto w-full lg:w-[650px] mx-auto lg:ml-10 my-6 sm:my-8 lg:my-10">Apresentamos um dispositivo inovador desenvolvido para monitorar e otimizar o consumo de energia em seu imóvel. Com tecnologia avançada, ele mede e analisa detalhadamente o consumo energético, organiza informações de maneira estruturada e oferece sugestões práticas para reduzir gastos no final do mês.</p>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-roboto w-full lg:w-[650px] mx-auto lg:ml-10 my-6 sm:my-8 lg:my-10">O dispositivo utiliza sensores de alta precisão para captar dados em tempo real, permitindo que você visualize padrões de uso e identifique desperdícios de maneira clara e objetiva. Além disso, ele calcula automaticamente os custos associados ao consumo, ajudando na previsão de gastos e no planejamento financeiro. Essa funcionalidade é ideal tanto para residências quanto para empresas que buscam maior eficiência energética e economia no orçamento.</p>
                </div>
                <div className="w-full lg:w-[500px]">
                    <img className="w-full h-auto rounded-3xl mx-auto" src="/Imagens/imagens-produto/imagem-Produto.jpg" alt="Imagem ilustrativa"/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[40px] px-4 sm:px-8 lg:px-20">
                <div className="w-full lg:w-[500px]">
                    <img className="w-full h-auto rounded-3xl mx-auto" src="/Imagens/imagens-produto/imagem-Produto2.jpg" alt="Imagem ilustrativa"/>
                </div>
                <div className="flex flex-col items-center lg:items-end w-full lg:w-[650px]">
                    <h1 className="font-dmserif text-[30px] sm:text-[35px] lg:text-[40px] text-[#004D66] mb-6">Aparelho</h1>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-roboto w-full mx-auto lg:mr-10 my-6 sm:my-8 lg:my-10">Esse dispositivo é acompanhado por um aplicativo intuitivo e eficiente, que funciona como a principal ferramenta para gerenciamento e controle de todas as funcionalidades. Simplifique sua relação com o consumo de energia, economize e adote uma abordagem mais sustentável com nossa solução completa.</p>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-roboto w-full mx-auto lg:mr-10 my-6 sm:my-8 lg:my-10">O aplicativo, disponível para dispositivos móveis e desktops, oferece uma interface amigável e personalizável, onde você pode acessar relatórios detalhados, acompanhar estatísticas de consumo e configurar alertas para limites de uso. Com base nos dados coletados, o sistema também sugere mudanças específicas no comportamento de consumo e apresenta soluções como o uso de equipamentos mais eficientes. Tudo isso para que você tenha o controle total da energia consumida em suas mãos, contribuindo para uma gestão mais consciente e sustentável.</p>
                </div>
            </div>
            <div className="flex justify-center my-8">
                <button className="bg-[#004D66] p-4 rounded-2xl hover:scale-95 transition-all duration-300">
                    <h1 className="text-white font-dmserif text-[30px] sm:text-[35px] lg:text-[40px]">Garanta o seu!</h1>
                </button>
            </div>
        </>
    );
}

export default EcoWise;
