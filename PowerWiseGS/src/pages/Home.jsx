import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {
    const { handleUserDataSubmit } = useOutletContext();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { nome, email };
        localStorage.setItem("userData", JSON.stringify(userData));
        handleUserDataSubmit(userData);
        alert("Seus dados foram salvos!");

        setNome("");
        setEmail("");
    };

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem("userData"));
        if (saveData) {
            setNome(saveData.nome);
            setEmail(saveData.email);
        }
    }, []);

    return ( 
        <div className="flex flex-col items-center px-4 sm:px-8 lg:px-20">
            <div className="w-full">
                <div className="flex justify-center items-end mb-4">
                    <h1 className="text-center font-roboto text-[18px] sm:text-[20px] lg:text-[24px] font-medium">
                        Sua melhor escolha é com a PowerWise!
                    </h1>
                </div>
                <img className="mx-auto w-full max-w-[300px] sm:max-w-[600px] lg:max-w-[890px] h-auto rounded-3xl object-cover"src="/Imagens/imagens-main/imagem-main.jpg" alt="Imagem principal do site"/>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6 w-full max-w-[400px]">
                <input className="p-2 mb-4 border border-gray-300 rounded-md w-full text-sm sm:text-base" type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input className="p-2 mb-4 border border-gray-300 rounded-md w-full text-sm sm:text-base" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" className="bg-[#5FB6F5] p-2 rounded-md text-white font-bold hover:bg-[#004D66] transition-all w-full text-sm sm:text-base">Salvar Dados</button>
            </form>
        </div>
    );
}

export default Home;
