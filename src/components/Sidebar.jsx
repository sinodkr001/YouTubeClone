import React from 'react'
import { BiVideo } from 'react-icons/bi'
import { CgMediaLive } from 'react-icons/cg'
import { CiFlag1 } from 'react-icons/ci'
import { FaChevronRight, FaRegNewspaper, FaYoutube } from 'react-icons/fa'
import { FcSettings } from 'react-icons/fc'
import { GiLinkedRings } from 'react-icons/gi'
import { GoHome } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { MdMusicNote, MdOutlineSubscriptions, MdPodcasts, MdWatchLater } from 'react-icons/md'
import { PiFilmSlateLight, PiLightbulbLight } from 'react-icons/pi'
import { RiFeedbackLine } from 'react-icons/ri'
import { SiStylelint, SiTrendmicro, SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from 'react-icons/si'
import { TfiCup } from 'react-icons/tfi'
import { useUtils } from '../context/UtilsContext'

export default function Sidebar(props) {

    const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
    const sidebarItems = [
        {
            groupName: "Home",
            groupItems: [
                {
                    id: 1,
                    name: "Home",
                    icon: <GoHome />
                },
                {
                    id: 2,
                    name: "Shorts",
                    icon: <SiYoutubeshorts />
                },
                {
                    id: 3,
                    name: "Subscription",
                    icon: <MdOutlineSubscriptions />
                }
            ],
        },
        {
            groupName: "You",
            groupItems: [
                {
                    id: 1,
                    name: "Your Channel",
                    icon: <GoHome />
                },
                {
                    id: 2,
                    name: "History",
                    icon: <SiYoutubeshorts />
                },
                {
                    id: 3,
                    name: "Playlists",
                    icon: <MdOutlineSubscriptions />
                },
                {
                    id: 4,
                    name: "Your Videos",
                    icon: <BiVideo />
                },
                {
                    id: 5,
                    name: "Watch later",
                    icon: <MdWatchLater />
                },
                {
                    id: 6,
                    name: "Liked videos",
                    icon: <GiLinkedRings />
                }
            ],
        },
        {
            groupName: "Explore",
            groupItems: [
                {
                    id: 1,
                    name: "Trending",
                    icon: <GoHome />
                },
                {
                    id: 2,
                    name: "Shopping",
                    icon: <HiOutlineShoppingBag />
                },
                {
                    id: 3,
                    name: "Music",
                    icon: <MdMusicNote />
                },
                {
                    id: 4,
                    name: "Film",
                    icon: <PiFilmSlateLight />
                },
                {
                    id: 5,
                    name: "Live",
                    icon: <CgMediaLive />
                },
                {
                    id: 6,
                    name: "Gaming",
                    icon: <SiYoutubegaming />
                },
                {
                    id: 7,
                    name: "News",
                    icon: <FaRegNewspaper />
                },
                {
                    id: 8,
                    name: "Sport",
                    icon: <TfiCup />
                },
                {
                    id: 9,
                    name: "Courses",
                    icon: <SiStylelint />
                },
                {
                    id: 10,
                    name: "Fashion & beauty",
                    icon: <PiLightbulbLight />
                },
                {
                    id: 11,
                    name: "Padcasts",
                    icon: <MdPodcasts />
                }

            ],
        },
        {
            groupName: "More From Youtube",
            groupItems: [
                {
                    id: 1,
                    name: "Youtube Premium",
                    icon: <FaYoutube />
                },
                {
                    id: 2,
                    name: "Youtube Studio",
                    icon: <SiYoutubestudio />
                },
                {
                    id: 3,
                    name: "Youtube Music",
                    icon: <SiYoutubemusic />
                },
                {
                    id: 4,
                    name: "Youtube Kids",
                    icon: <SiYoutubekids />
                }
            ],
        },
        {
            groupName: "Setting",
            groupItems: [
                {
                    id: 1,
                    name: "Setting",
                    icon: <FcSettings />
                },
                {
                    id: 2,
                    name: "Report History",
                    icon: <CiFlag1 />
                },
                {
                    id: 3,
                    name: "Help",
                    icon: <IoIosHelpCircleOutline />
                },
                {
                    id: 4,
                    name: "Send feedback",
                    icon: <RiFeedbackLine />
                }
            ],
        },
    ]

    const ModelOverlay=()=>{
        return (
            <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30' onClick={()=>setMobileShow(!mobileShow)}>

            </div>
        )
    }

    return (
        <>
            <div className={`${mobileShow ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" : "hidden h-[calc(100vh-6.625rem)] w-[20%]"} xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
                <div className='space-y-3 items-center'>
                    {
                        sidebarItems.map((group) => {
                            return (
                                <div className='mb-5'>
                                    <h1 className='font-bold'>{group.groupName}</h1>
                                    {
                                        group.groupItems.map((item) => (
                                            <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-2'>
                                                <div className='text-sm cursor-pointer'>{item.icon}</div>
                                                <span className='text-sm cursor-pointer'>{item.name}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        })
                    }

                </div>
                <br />
                <hr />
                <br />
                <span className='text-xs font-semibold text-gray-500'>About Press Copyright<br />Contact us Creators<br />Advertise Developers<br /><br />
                    <p>Terms PrivacyPolicy & Safety <br />How YouTube works <br />Test new features</p>
                </span>
                <br />
                <p className='text-xs text-gray-800 mt-1'>© 2024 sinod</p>
            </div>
            {mobileShow ? <ModelOverlay/> : null}
        </>
    )
}
