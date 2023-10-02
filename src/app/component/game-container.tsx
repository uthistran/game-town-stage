'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


type GameContainerProps = {
    isMaximized : boolean;
    onCloseClick?: () => void;
    onResizeClick?: () => void;
}

const GameContainer: React.FC<GameContainerProps>  = ({isMaximized, onCloseClick, onResizeClick}) => {

    const isGameContainerHidden = useSelector((state: RootState) => state.rootReducer.value.isHidden);

    return (
    <div id="gameContainer" className={`${isGameContainerHidden ? 'hidden' : ''} ${isMaximized ? 'absolute h-[calc(100vh-200px)] ml-[145px]' : ''}`}>
    <div className="flex w-full text-black text-[31px] font-['Arial'] bg-white">
        <div className="flex-[9]">House Blackjack Tournament (NV)</div>
        <div  className='minmaxBtn flex-[0.3] pointer text-right' onClick={onResizeClick} id="maxIcon">&#128471;&#xFE0E;</div>
        <div  className='minmaxBtn flex-[0.3] pointer text-right' onClick={onCloseClick} id="closeIcon">&#128473;&#xFE0E;</div>
    </div>
    <div id="gameImgHolder" className={`${isMaximized ? 'h-[calc(100%-50px)]' : ''}`}>
        <img id="gameImg" className={`${isMaximized ? 'ml-[1px] h-full' : 'w-full ml-[1px] h-full'}`} src="assets/images/game.jpg"/>
    </div>
</div>)
}

export default GameContainer;