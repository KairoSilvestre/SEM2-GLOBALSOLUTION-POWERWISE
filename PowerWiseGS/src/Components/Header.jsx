import { Link } from "react-router-dom";

function Header() {

    return (  
        <>
            <header className="flex justify-center gap-60 items-center p-4">
                <Link to="/">
                    <a href="#Sobre"><img className="w-[35px] h-auto" src="/Imagens/Logo-PowerWise.png" alt="Logo-PowerWise"/></a>
                </Link>
                <nav>
                    <ul className="scroll-smooth flex items-center gap-8 bg-[#5FB6F5] p-2 rounded-xl text-[#333333]">
                        <li><Link to="/ecodicas" className="font-roboto font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">EcoDicas</Link></li>
                        <li><Link to="/sobre" className="font-roboto font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">Sobre</Link></li>
                        <li><Link to="/"><img className="w-8" src="/Imagens/Home.png" alt="Home.jpg"/></Link></li>
                        <li><Link to="/quiz" className="font-roboto font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">Quiz</Link></li>
                        <li><Link to="/ecowise" className="font-roboto font-semibold bg[#5FB6F5] hover:bg-[#333333] hover:text-white hover:scale-105 transition-all duration-300 p-2 rounded-xl">EcoWise</Link></li>
                    </ul>
                </nav>
                <div>
                    <button className="flex">
                        <p className="font-semibold font-roboto">Olá, {}</p>
                        <img src="/Imagens/User.jpg" alt="Usuário botão"/>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;