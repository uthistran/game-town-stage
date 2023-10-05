import Menu from "./menu";
import  menuItems  from "../data/account-menu-items";

const AccountMenu = () => {
    return (
        <nav className="font-[Arial] font-[800] text-[13px]">
            <Menu items={menuItems} menuItemClassName="active:text-[red] focus:text-[red] hover:text-[red] active:underline focus:underline hover:underline font-[Arial]"/>
        </nav>
    )
}

export default AccountMenu;
