import GameCategory from "./component/game-category"
import Login from "./component/login"
import MainNavigation from "./component/main-navigation"
import SecondaryNavigation from "./component/secondary-navigation"
import TournamentContainer from "./component/tournament-container"

export default function Home() {
    return (
      <main className="">
        <div className="flex flex-row">
          <section className="flex-[60%] ml-[50px]">
            <MainNavigation/>
            <Login/>
            <SecondaryNavigation/>
            <GameCategory/>
          </section>
        <TournamentContainer/>
        </div>
      </main> 
    )
  }