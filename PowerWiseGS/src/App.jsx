import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return ( 
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default App;


        // <Router>
        //     <Header/>
        //     <Routes>
        //         <Route path="/ecodicas" element={<Home/>}/>
        //         <Route path="/main" element={<Main/>}/>
        //         <Route path="/quiz" element={<Quiz/>}/>
        //     </Routes>
        // </Router>