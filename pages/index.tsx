import GameCategory from "../components/game-category"
import TournamentContainer from "../components/tournament-container"

export default function Home() {
    return (
      <main className="">
        <div className="flex flex-row min-w-screen">
          <section className="flex-[60%] ml-[50px]">
            <GameCategory isExistingMember={false}/>
          </section>
        <TournamentContainer/>
        </div>
      </main> 
    )
  }