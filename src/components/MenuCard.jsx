import React from 'react'

function MenuCard({ Menulist }){
    return (
        <>
            <div className='flex flex-wrap'>
                {Menulist.map((curElem) => {
                    return (
                        <div className='shadow-2xl rounded-md w-[25rem] m-10 p-5 bg-white' key={curElem.id}>
                            <div className='w-5 rounded-[10px] flex justify-center'>
                                {curElem.id}
                            </div>
                            <br></br>
                            <p>{curElem.Category}</p>
                            <p className='h-[5rem]'>
                                {curElem.description}
                            </p>
                            <br></br>
                            <img src={curElem.image} className='h-[15rem]'></img>
                            <br></br>
                            <div className='flex justify-end rounded-lg'>
                                <button className='cursor-pointer border-1 w-[6rem] h-[3em] tracking-[2px]'>ORDER</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MenuCard