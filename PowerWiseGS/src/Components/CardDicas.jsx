import { Link } from "react-router-dom";

function CardDicas({imagem, texto}) {
    return (  
        <>  
            <Link to={`/ecodicas/${texto}`}>
                <button className="hover:scale-95 transition-all duration-300">
                        <img className="rounded-xl w-[300px] my-4" src={`/Imagens/imagens-dicas/${imagem}`} alt="Imagens representando fontes de energia sustentáveis"/>
                        <p className="font-dmserif my-5 text-[#004D66] text-[30px]" >{texto}</p>
                </button>
            </Link>
        </>
    );
}

export default CardDicas;