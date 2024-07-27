import React from 'react'

export default function ListItems(props) {
    const categories = ["All", "Music", "React routers", "Computer programing", "Reverberation", "Movie musicals", "India national cricket team", "News", "Mixes", "1990s", "Telugu cinema", "Live", "Dramedy", "Dubbing", "Indian soap opera", "Cricket", "Football"]

    return (
        <div className='flex overflow-x-scroll hide-scroll-bar px-4 scrollbar-none'>
            <div className='flex space-x-4 flex-nowrap'>
                {categories.map((category) => {
                    return (
                        <div key={category} className='mb-4 flex-none bg-gray-200 hover:bg-gray-200 duration-300 rounded-xl py-2 px-4 font-medium text-gray-700 cursor-pointer'>{category}</div>
                    )
                })}
            </div>
        </div>
    )
}
