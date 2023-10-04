"use client"
import GameCategoryMenuNavigation from "./game-category-menu-navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import HomeContainer from "./home";

const GameCategory = () => {
    const isMaximized = useSelector((state: RootState) => state.rootReducer.value.isMaximized);
    return (
        <div id="gameCategory" className="w-[90%] h-[calc(100vh-200px)] bg-white mt-[20px]">
            <div id="gameCategoryMenu" className={`flex flex-row font-[800] text-black p-[14px] text-[13px] md:text-[12px] font-[Arial] ${isMaximized ? 'hidden' : ''}`}>
                <div className="mr-[20px]">
                    GAME CATEGORIES:
                </div>
                <GameCategoryMenuNavigation/>
            </div>
            <HomeContainer></HomeContainer>
        </div>
    )
}

export default GameCategory;