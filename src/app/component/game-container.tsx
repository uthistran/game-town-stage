'use client';


type GameContainerProps = {
    isHidden: boolean;
    isMaximized : boolean;
    onCloseClick?: () => void;
    onResizeClick?: () => void;
}

const GameContainer: React.FC<GameContainerProps>  = ({isHidden ,isMaximized, onCloseClick, onResizeClick}) => {
    return (
    <div id="gameContainer" className={`${isHidden ? 'hidden' : ''} ${isMaximized ? 'absolute h-[calc(100vh-200px)]' : ''}`}>
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