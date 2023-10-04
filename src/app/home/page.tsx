"use client"
import GameCategory from "../component/game-category";
import TournamentContainer from "../component/tournament-container";

const Account = () => {


    return (
        <div className="flex flex-row">
            <div className="flex-[60%] ml-[50px]">
                <div className="w-[90%] h-[calc(100vh-200px)] bg-white mt-[20px] pt-[20px] pl-[20px] text-black">
                    <GameCategory />
                </div>

            </div>
            <TournamentContainer />
        </div>
    )
}

export default Account;