import React, { useState } from 'react'
import Menu from './MenuApi'
import Card from './MenuCard'

const Navbar = () => {
    const [Menulist, setMenulist] = useState(Menu);

    function menuFilter(Category) {
        // setMenulist(Menu);
        const uniqueMenu = Menu.filter((curElem) => {
            return curElem.Category == Category;
        });
        setMenulist(uniqueMenu);
    }
    return (
        <>
            <nav className='p-10'>
                <div className='rounded-lg bg-white p-5 flex justify-around'>
                    <button className='cursor-pointer' onClick={() => menuFilter("Breakfast")}>
                        Breakfast
                    </button>
                    <button className='cursor-pointer' onClick={() => menuFilter("Lunch")}>
                        Lunch
                    </button>
                    <button className='cursor-pointer' onClick={() => menuFilter("Dinner")}>
                        Dinner
                    </button>
                    <button className='cursor-pointer' onClick={() => setMenulist(Menu)}>
                        All
                    </button>
                </div>
            </nav>
            <Card Menulist={Menulist} />
            <br></br>
        </>
    )
}

export default Navbar