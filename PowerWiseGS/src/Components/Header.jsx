function Header() {

    return (  
        <>
            <header className="flex justify-center gap-60 items-center">
                <div>
                    <a href=""><img className="w-[95px] h-auto" src="/Imagens/Logo-PowerWise.jpg" alt="Logo-PowerWise"/></a>
                </div>
                <ul className="scroll-smooth flex items-center gap-8 bg-[#5FB6F5] p-1 rounded-xl text-[#333333]">
                    <a href="#EcoDicas" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">EcoDicas</a>
                    <a href="#" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">Sobre</a>
                    <a href="#"><img className="w-8" src="/Imagens/Home.png" alt="Home.jpg"/></a>
                    <a href="#" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">Quiz</a>
                    <a href="#" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">EcoWise</a>
                </ul>
                <div>
                    <button className="flex">
                        <p className="font-semibold">Olá, {}</p>
                        <img src="/Imagens/User.jpg" alt="Usuário botão"/>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;