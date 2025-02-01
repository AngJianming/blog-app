import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component.jsx";
import UserAuthFrom from "./pages/userAuthForm.page.jsx";

const App = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Navbar />}/>
                {/* / + signin => /signin */}
                <Route path="signin" element={<UserAuthFrom type="sign-in"/>}/> 
                <Route path="signup" element={<UserAuthFrom type="sign-up"/>}/>
            </Route>
        </Routes>
    );

}

// path="/" is home path in the files

export default App;