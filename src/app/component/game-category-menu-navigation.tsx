import Menu from "./menu"

import menuItems from "../data/game-category-menu-items"

export default function GameCategoryMenuNavigation() {
    return (
         <nav className="">
                <Menu items={menuItems} menuItemClassName="active:text-[red] focus:text-[red] hover:text-[red] active:underline focus:underline hover:underline"/>
        </nav>
    )
}