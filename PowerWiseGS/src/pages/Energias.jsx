import { useParams } from "react-router-dom";

function Energias() {

    const {nome} = useParams();
    
    const detalhes = {
        'Energia Solar': 'A energia solar é captada por painéis solares...',
        'Energia Eolica': 'A energia eólica é gerada pelo movimento do vento...',
        'Energia Hidrica': 'A energia hídrica aproveita o movimento da água...',
    };

    return (  
        <>
            <h1>{nome}</h1>
            <p>{nome[detalhes] || 'Detalhes não encontrados.'}</p>
        </>
    );
}

export default Energias;