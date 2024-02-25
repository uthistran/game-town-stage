import Menu from "./menu"

import menuItems from "../data/secondary-menu-items"

export default function SecondaryNavigation() {
    return (
         <nav className="w-[90%] inline-block mt-4 md:mt-[5px] text-xl md:text-[15px] font-['Arial'] pr-[14px] md:pr-0">
                <Menu items={menuItems} menuItemClassName="active:text-[red] focus:text-[red] hover:text-[red] active:underline focus:underline hover:underline"/>
        </nav>
    )
}