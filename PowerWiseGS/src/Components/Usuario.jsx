function Usuario({userData}) {
    
    if(!userData) return null; 

    return (  
        <>
            <div className="p-4 bg-[#004D66] text-white rounded-md mt-6 text-center">
            <h2 className="font-roboto">Bem-vindo, {userData.nome}!</h2>
            <p className="font-roboto">Seu e-mail: {userData.email}</p>
        </div>
        </>
    );
}

export default Usuario;