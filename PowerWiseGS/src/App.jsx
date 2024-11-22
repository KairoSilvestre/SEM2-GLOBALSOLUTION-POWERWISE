import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";

function App() {

    const [userData, setUserData] = useState(null);

    // Busca os dados do usuário no LocalStorage ao carregar o app
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("userData"));
        if (savedData) {
            setUserData(savedData);
        }
    }, []);

    const handleUserDataSubmit = (data) => {
        setUserData(data);
        localStorage.setItem("UserData", JSON.stringify(data));
    }

    return (
        <>
            <Header userData={userData}/>
            <Outlet context={{ userData, handleUserDataSubmit }}/>
            <Footer/>
        </>
    );
}

export default App;
