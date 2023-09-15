import React from 'react';
import { MenuItem } from '../model/menu-item';

type MenuProps = {
    items:MenuItem[],
    menuItemClassName?:string
}

const Menu: React.FC<MenuProps> = ({items, menuItemClassName = ""}) => {
    return (
        <ul className='flex flex-row gap-[20px]'>
            {items.map(item => (
                <li key={item.id}>
                    <a href='{item.url}' className={menuItemClassName}>
                    {item.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Menu;