import { imgs } from "../../Utils/Constants/img"
const Banner = () => {
    return (
        <>
            <div className='my-12 flex p-4 text-center md:text-left flex-col md:flex-row sm:flex-col items-center'>
                <div className="textSect w-[100%] sm:w-[100%] md:w-[50%]">
                    <h1 className='text-2xl leading-[42px] font-light md:text-4xl'>
                        Hello I’am <span className="font-bold">Ahmed Saeed, <br /> Frontend</span>
                        <span className='font-bold'> Developer </span>
                        Based in <span className="font-bold">Pakistan</span>
                    </h1>
                    <p>
                        I am a passionate Frontend Web Developer and AI Enthusiast, with a focus on creating dynamic and responsive user interfaces. My expertise includes JavaScript, TypeScript, React JS, Tailwind CSS, HTML, CSS, and Ant Design. I enjoy bringing design ideas to life.<br />
                        I am currently advancing my skills in Web Development through SMIT and hold a certification in Cloud Applied Generative AI Engineering from GIAIC<br />
                        I am available for freelance opportunities to help you build sleek, modern, and efficient web applications.
                    </p>
                    <div className="links text-xl m-3 bg-white">
                        <a href="https://instagram.com/freel.ancefusion">
                        <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-instagram"></i>
                        </a>
                        <a href="https://github.com/ahmedsaeeddev/">
                        <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-saeeddev">
                        <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/+923112348744">
                        <i className="fa-brands border-2 border-black m-2 p-2 hover:bg-black hover:text-white rounded fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="ImgSect w-[256px] md:w-[800px]">
                    <img src={imgs.imgSect} className='w-[100%]' alt="" />
                </div>
            </div >
        </>
    )
}

export default Banner