import { useEffect, useState } from "react";

const TournamentHeader: React.FC = () => {
    const [text, setText] = useState<string>("600 Free Jacks Daily = 60 Minutes of Play");
    const [showTextOne, setShowTextOne] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowTextOne((prevValue) => !prevValue);
        }, 30000);
        return () => clearInterval(interval);
    },[])

    return (
        <div id="dynamicHolder" className="">
            <div className="absolute left-[60.1%] top-[49px]">
                <img id="dynamicImg" className="w-[40px] align-middle" src={showTextOne ? "assets/images/logo-trans.png" : "assets/images/jack-trans.png"} />
            </div>
            <div id="dynamicHeader" className={`bg-white text-[black] text-[30px] md:text-[18px] w-[90%] text-center h-[37px] leading-[37px] font-['Boulder-Regular'] font-boulder ${showTextOne ? 'fade-in' : 'fade-out'}`}>
                {showTextOne ? text : "Join the One Eye Jack Club - Unlimited Play"}
            </div>
        </div>
    )
}

export default TournamentHeader;