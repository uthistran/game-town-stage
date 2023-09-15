"use client"
import { useState } from "react";
import GameCategoryMenuNavigation from "./game-category-menu-navigation";
import GameContainer from "./game-container";
import GameListcontainer from "./game-list-container";

const GameCategory = () => {

    const [isListContainerHidden, setIsListContainerHidden ] = useState<boolean>(false);
    const [isGameContainerHidden, setGameContainerHidden ] = useState<boolean>(true);
    const [isMaximized, setMaximized] = useState<boolean>(false);

    const listContainerClick = () => {
        setIsListContainerHidden(!isListContainerHidden);
        setGameContainerHidden(!isGameContainerHidden);
    }

    const gameContainerClose = () => {
        setIsListContainerHidden(false);
        setGameContainerHidden(true);
        if(isMaximized){
            setMaximized(false)
        }
    }

    const gameResize = () => {
        if(isMaximized){

            setMaximized(false)
        }
        else{

            setMaximized(true)
        }
    }

    return (
        <div id="gameCategory" className="w-[90%] h-[calc(100vh-200px)] bg-white mt-[20px]">
            <div id="gameCategoryMenu" className={`flex flex-row font-[800] text-black p-[14px] text-[13px] md:text-[12px] font-[Arial] ${isMaximized ? 'hidden' : ''}`}>
                <div className="mr-[20px]">
                    GAME CATEGORIES:
                </div>
                <GameCategoryMenuNavigation/>
            </div>
            <GameListcontainer isHidden={isListContainerHidden} onClick={listContainerClick}/>
            <GameContainer isHidden={isGameContainerHidden} isMaximized={isMaximized} onCloseClick={gameContainerClose} onResizeClick={gameResize}/>
        </div>
    )
}

export default GameCategory;