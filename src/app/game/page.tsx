"use client"
import GameCategoryMenuNavigation from "../component/game-category-menu-navigation";
import GameContainer from "../component/game-container";
import GameListcontainer from "../component/game-list-container";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { toggleGameContainerMaximized, toggleGameContainerVisbility } from "@/redux/features/game-container-visibility-slices";
import TournamentContainer from "../component/tournament-container";

const Game = () => {


    // return (
    //     <div className="flex flex-row">
    //         <div className="flex-[60%] ml-[50px]">
    //             <div className="w-[90%] h-[calc(100vh-200px)] bg-white mt-[20px] pt-[20px] pl-[20px] text-black">
    //                 <AccountMenu/>
    //                 <Purchase/>
    //             </div>

    //         </div>
    //         <TournamentContainer/>
    //     </div>


    // )


    const dispatch = useDispatch<AppDispatch>();
    const isMaximized = useSelector((state: RootState) => state.rootReducer.value.isMaximized);

    const listContainerClick = () => {
        dispatch(toggleGameContainerVisbility());
    }

    const gameContainerClose = () => {
        dispatch(toggleGameContainerVisbility());
        if (isMaximized) {
            dispatch(toggleGameContainerMaximized(false));
        }
    }

    const gameResize = () => {
        console.log("game resize was invoked");
        dispatch(toggleGameContainerMaximized(!isMaximized));
    }

    return (
        <div className="flex flex-row">
            <div className="flex-[60%] ml-[50px]">
                <div id="gameCategory" className="w-[90%] h-[calc(100vh-200px)] bg-white mt-[20px]">
                    <div id="gameCategoryMenu" className={`flex flex-row font-[800] text-black p-[14px] text-[13px] md:text-[12px] font-[Arial] ${isMaximized ? 'hidden' : ''}`}>
                        <div className="mr-[20px]">
                            GAME CATEGORIES:
                        </div>
                        <GameCategoryMenuNavigation />
                    </div>
                    <GameListcontainer onClick={listContainerClick} />
                    <GameContainer isMaximized={isMaximized} onCloseClick={gameContainerClose} onResizeClick={gameResize} />
                </div>
            </div>
            <TournamentContainer />
        </div>
    )

}

export default Game;