import Menu from "./menu"

import menuItems from "../data/secondary-menu-items"

export default function SecondaryNavigation() {
    return (
         <nav className="w-full inline-block mt-4 text-xl md:text-[15px] font-['Arial']">
                <Menu items={menuItems} menuItemClassName="active:text-[red] focus:text-[red] hover:text-[red] active:underline focus:underline hover:underline"/>
        </nav>
    )
}