const ProjectCard = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start md:space-x-6 my-8'>
      <img
        src={imgSrc}
        alt={title}
        className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
      />
      <div className="flex items-center">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-600"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.75L21 12.5l-3.75 3.75M21 12.5H3"
            />
          </svg>
          View Project
        </a>
      </div>
    </div>
  );
};
const projects = [
  {
    imgSrc: '/assets/img/quizGrad.png',
    title: 'Quiz Grad',
    description: 'QuizGrad is your ultimate study companion designed using password authentication project using JavaScript involves creating secure login system where users input a password, and the app verifies it against stored credentials. The system typically checks the input password for validity, applying encryption or hashing to ensure security. JavaScript handles the password input, validation, and comparison processes, often incorporating real-time feedback, such as strength indicators and error messages for incorrect passwords, ensuring user-friendly and secure authentication.',
    link: 'https://ahmedsaeeddev.github.io/QuizGrad',
  },
  {
    imgSrc: '/assets/img/portfolio.png',
    title: 'Portfolio',
    description:
      `I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
    I am very enthusiastic about bringing the technical and visual aspects of digital products to life.User experience, pixel- perfect design, and writing clear, readable, highly performant code matters to me.`
    ,
    link: 'https://ahmedsaeeddev.github.io/Portfolio',
  },
  {
    imgSrc: '/assets/img/blogApp.png',
    title: 'Blog',
    description: `This project involves creating a blog application using Firebase for backend services. The application integrates Firebase Authentication for secure user management, enabling users to sign up, log in, and manage their profiles. Firebase Firestore is used to store and retrieve blog posts, allowing users to create, read, update, and delete their blogs efficiently. Cloud Storage is utilized for handling media files, such as images or videos, that can be attached to blog posts. The application features a user-friendly interface for displaying and interacting with blog content, ensuring a seamless experience for both writers and readers.`,
    link: 'https://ahmedsaeeddev.github.io/blogApp',
  },
  {
    imgSrc: '/assets/img/weather.png',
    title: 'Weather App',
    description: `A weather application using an API involves fetching real-time weather data for a specified location or based on user input. You start by integrating a weather API (such as OpenWeatherMap) into your app, allowing it to retrieve weather details like temperature, humidity, wind speed, and conditions. Users can search by city or use geolocation for accurate results. The app dynamically displays this data with user-friendly features like icons for weather conditions, forecasts, and responsive design to ensure accessibility on all devices.`,
    link: 'https://ahmedsaeeddev.github.io/weather_app',
  },
  {
    imgSrc: '/assets/img/food-delivery.png',
    title: 'Food Restaurant',
    description: `A project for Foodies Restaurant Layout involves designing a visually appealing and fully responsive website for a restaurant.The layout adapts seamlessly across different screen sizes, ensuring a great user experience on mobile, tablet, and desktop devices.The design typically features a navigation menu, sections for featured dishes, reviews, and contact information.Special attention is given to typography, imagery, and color schemes to reflect the restaurant's brand. The goal is to make the site user-friendly while showcasing the restaurant's offerings attractively.`,
    link: 'https://react-food-delivery-landing-page.vercel.app/',
  },
  {
    imgSrc: '/assets/img/pass-gen.png',
    title: 'Password Generator Application',
    description: `A password generator project using the Navigator Clipboard API allows users to create strong, random passwords and copy them directly to their clipboard with a single click.This app provides customizable options, such as password length and inclusion of special characters, numbers, and uppercase / lowercase letters.The clipboard feature ensures users can easily transfer the generated password to any field securely, improving the convenience and security of password management `,
    link: 'https://pass-gen-786.netlify.app',
  }
];

const ProjectsSection = () => {



  return (
    <div className="bg-black text-white py-12">
      <h2 className="text-4xl text-center font-bold mb-12">My Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center md:items-start space-y-4 md:space-y-0`}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-600"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.75L21 12.5l-3.75 3.75M21 12.5H3"
                  />
                </svg>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default ProjectsSection;

