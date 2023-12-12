"use client"
import GameCategory from "../components/game-category";
import TournamentContainer from "../components/tournament-container";

const Account = () => {


    return (
        <div className="flex flex-row min-w-screen">
            <div className="flex-[60%] ml-[50px]">
                    <GameCategory isExistingMember={false} />
            </div>
            <TournamentContainer />
        </div>
    )
}

export default Account;