import { imgs } from '../../../src/Utils/Constants/img.js';
const Header = () => {
    return (
        <div className='flex items-center justify-between w-[80%] m-auto py-1'>
            <div className="logo flex items-center m-auto md:m-0">
                <img src={imgs.logoSrc} className='w-20' alt="" />
                <a href='#' className='text-2xl font-semibold'>Ahmed Saeed</a>
            </div>
            <div className="links hidden sm:hidden md:hidden lg:flex">
                <a href="" className='hover:underline p-2'> About Me </a>
                <a href="" className='hover:underline p-2'> Skills </a>
                <a href="" className='hover:underline p-2'> Project </a>
                <a href="" className='hover:underline p-2'> Contact Me </a>
            </div>
            <div className="resume flex ">
                <a href="https://docs.google.com/document/d/1vEVQWODXAK2uEYjKFdKaq-MIC95Y97I5wiASSzF_BrQ/edit#heading=h.yy9yxiqm72iw" target='_main' download className='hidden w-36 justify-center
                p-[7px] md:flex items-center border-[2px] rounded border-black hover:text-center hover:border-[rgb(63,63,70)] hover:bg-zinc-700 hover:text-white
                '>
                    <img className='p-[7px] px-[7px]' src={imgs.downloadSrc} alt="" />
                    Resume
                </a>
            </div>
        </div>
    )
}

export default Header