
const educationData = [
    {
        img: '/assets/img/college.jpeg',
        name: 'Intermediate - DJ Sindh Govt Science College',
        duration: '2024-present',
        description: `I'm pursuing an F.Sc of Computer Science (F.Sc (CS)) at DJ Sindh Govt Science College, Karachi, since 2024, focusing on building strong potential in Computer Field.`
    },
    {
        img: '/assets/img/school.jpeg',
        name: 'Matriculation - Shaukat Memorial Public Sec. School',
        duration: '2010-2024',
        description: `I have pursued my learning at Shaukat Memorial Public Secondary School, Karachi, since Montessori, till passing my Matriculation from there.`
    },
    {
        img: '/assets/img/smit.png',
        name: 'Full Stack Development - SMIT',
        duration: '2023 - Present',
        description: `I'm currently taking a full stack course at Saylani Mass IT Training and have a solid background in HTML, CSS, Bootstrap, and JavaScript, applied in various projects.`
    },
    {
        img: '/assets/img/giaic.jpeg',
        name: 'Modern Generative AI Eng. - GIAIC',
        duration: '2023 - Present',
        description: `I'm currently taking an AI Eng. course at Governor's Initiative for AI & Computing and have a solid background in TS, Next JS, and JavaScript, I have applied in various projects.`
    }
];

const EducationCard = ({ img, name, duration, description }) => {
    return (
        <div className="bg-black border-2 hover:bg-[#27272A] border-white text-white p-6 rounded-lg flex flex-col md:flex-row items-center mb-6 shadow-md">
            <img
                src={img}
                alt={name}
                className="w-24 h-24 md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
                <h2 className="text-lg md:text-xl font-semibold">{name}</h2>
                <p className="text-gray-400">{duration}</p>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

const EducationSection = () => {
    return (
        <div className="p-8 cursor-pointer bg-black min-h-screen flex-col flex justify-center items-center">
            <div className="bg-black m-auto w-full text-white">
                <h1 className="text-[30px] my-4 md:text-[40px] text-center">
                    My <span className="font-bold">Education & Certificates</span>
                </h1>
            </div>
            <div className="max-w-4xl w-full px-4">
                {educationData.map((education, index) => (
                    <EducationCard
                        key={index}
                        img={education.img}
                        name={education.name}
                        duration={education.duration}
                        description={education.description}
                    />
                ))}
            </div>
        </div>
    );
};




export default EducationSection;
