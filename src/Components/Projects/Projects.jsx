import React from "react";

const ProjectCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 my-8">
      <img
        src={imgSrc}
        alt={title}
        className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
      />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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

const ProjectsSection = () => {
  const projects = [
    {
      imgSrc: '/assets/img/quizGrad.png',
      title: 'Quiz Grad',
      description: 'QuizGrad is your ultimate study companion designed to enhance your learning experience through interactive quizzes.',
      link: 'https://ahmedsaeeddev.github.io/QuizGrad',
    },
    {
      imgSrc: '/assets/img/portfolio.png',
      title: 'Portfolio',
      description: `My Dedicated Project a Personal portfolio for all looking for new projects for their customers and their respective locations`,
      link: 'https://ahmedsaeeddev.github.io/Portfolio',
    },
    {
      imgSrc: '/assets/img/blogApp.png',
      title: 'Blog',
      description: 'A blog website where I write about your experiences and thoughts on various topics.',
      link: 'https://ahmedsaeeddev.github.io/blogApp',
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
          My <span className="text-blue-400">Projects</span>
        </h1>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
