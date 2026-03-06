import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets.ts";

const Signup: React.FC = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    return(
        <>
            <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
                {/* Background image with blur */}
                <img src={assets.logo} alt="Background" className="absolute inset-0 w-full h-full object-cover filter blur-sum" />
                <div className="relative z-10 w-full max-w-lg px-6">
                    <div className="bg-white bg"></div>
                </div>
            </div>
        </>
    )
}

export default Signup;