import { imgs } from "../../Utils/Constants/img"

const Footer = () => {
    return (
        <>
            <div className="main flex items-center w-[100%] text-white bg-black justify-between p-4 flex-col md:flex-row lg:flex-col xl:flex-row m-0">
                <div className="logo flex items-center m-auto md:m-0 py-1">
                    <img src={imgs.logo1Src} className='w-20' alt="" />
                    <span className='text-2xl font-semibold'>Ahmed Saeed</span>
                </div>
                <div className="date">
                    @2019-2024 Personal
                </div>
            </div>
        </>
    )
}

export default Footer