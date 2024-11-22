import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {

    const { handleUserDataSubmit } = useOutletContext();  // Aqui é para pegar a função do contexto ai 
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { nome, email };
        localStorage.setItem("userData", JSON.stringify(userData));
        handleUserDataSubmit(userData);  // Aqui é pra usar a função.
        alert("Seus dados foram salvos!");
        
        // Limpar campo de texto do usuário
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
        <div>
            <div>
                <div className="flex justify-center items-end">
                    <div>
                        <h1 className="flex items-center justify-center font-roboto text-[20px] font-medium">Sua melhor escolha é com a PowerWise!</h1>
                    </div>
                </div>
                <img className="text-center mx-auto w-[890px] h-[490px] rounded-3xl object-cover" src="/Imagens/imagens-main/imagem-main.jpg" alt="Imagem principal do site"/>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6">
                <input className="p-2 mb-4 border border-gray-300 rounded-md w-80" type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input className="p-2 mb-4 border border-gray-300 rounded-md w-80" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" className="bg-[#5FB6F5] p-2 rounded-md text-white font-bold hover:bg-[#004D66]">
                    Salvar Dados
                </button>
            </form>
        </div>
    );
}

export default Home;
