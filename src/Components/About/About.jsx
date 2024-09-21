import { imgs } from "../../Utils/Constants/img"

const About = () => {
    return (
        <>
            <div className="banner flex flex-col md:flex-row justify-around m-auto items-center md:h-[100vh] h-[140vh] p-2">
                <div className="img">
                    <img src={imgs.meImg} className="w-80 md:w-11/12" alt="" />
                </div>
                <div className="txtArea md:text-left text-center md:w-[50%]">
                    <h1 className="text-4xl font-bold"><span className="font-medium">About</span> Me</h1>
                    <p>
                        I am a passionate Frontend Web Developer and AI Enthusiast, with a focus on creating dynamic and responsive user interfaces. My expertise includes JavaScript, TypeScript, React JS, Tailwind CSS, HTML, CSS, and Ant Design. I enjoy bringing design ideas to life.
                        I am currently advancing my skills in Web Development through SMIT and hold a certification in Cloud Applied Generative AI Engineering from GIAIC
                        I am available for freelance opportunities to help you build sleek, modern, and efficient web applications.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About