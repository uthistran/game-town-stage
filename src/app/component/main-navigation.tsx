
import  mainMenuItems from "../data/main-menu-items"
import Menu from "./menu"

export default function MainNavigation() {
    return (
             <nav>
            {/* Logo element decalration */}
            <div className="float-left">
                <img className="w-[40px] float-left align-middle" src="assets/images/logo.png"/>
                <span className="text-[31px] md:text-[25px] font-['Castle-Tult']">GAMETOWN</span><span
                        className="font-['Castle-Tult'] text-[20px] md:text-[13px]">.US/</span> <br />
                <span className="font-['Castle-Tult'] px-[50px] md:px-0"> &nbsp; A Social Casino</span>
            </div>
        
            <nav className="pt-[14px] text-[20px] md:text-[13px] font-['Boulder-Regular']">
                <Menu items={mainMenuItems}/>
            </nav>
        
        </nav>
    )
}