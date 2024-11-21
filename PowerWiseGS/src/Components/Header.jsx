function Header() {

    return (  
        <>
            <header className="flex gap-40 justify-center items-center p-3">
                <div>
                    <a href=""><img className="w-16 h-auto" src="/Imagens/Logo-PowerWise.jpg" alt="Logo-PowerWise"/></a>
                </div>
                <div className="flex items-center gap-2 bg-[#5FB6F5] p-2 rounded-xl text-[#333333] ">
                    <a href="" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">EcoDicas</a>
                    <a href="" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">Sobre</a>
                    <a href=""><img className="w-8 " src="/Imagens/Home.png" alt="Home.jpg"/></a>
                    <a href="" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">Quiz</a>
                    <a href="" className="font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">EcoWise</a>
                </div>
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