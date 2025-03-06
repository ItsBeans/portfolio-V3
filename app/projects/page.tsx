import Header from "../Header";
import { DockDemo } from '../Footer2';
const projects = [
  {
    title: "portfolio website",
    description: "the website you are at right now! built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    url: "https://github.com/ItsBeans/portfolioV3",
  },
  {
    title: "natural language translation",
    description: "a machine learning project that fine-tunes models for translation.",
    url: "https://github.com/ItsBeans/translator",
  },
  {
    title: "beauty salon website",
    description: "developed a responsive website using Next.js and Tailwind CSS for a local beauty business.",
    url: "https://www.rigoletabeauty.com/",
  },
  {
    title: "student exam performance",
    description: "this project analyses and predicts student performance in exams using various features.",
    url: "https://github.com/ItsBeans/student-exam-performance",
  },
  {
    title: "grocery shopping mobile app",
    description: "users can scan the barcode of items and then add them to basket for payment. created for a grocery store.",
    private: true,
  },
];


export default function Projects() {
  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-6xl font-bold text-black italic mb-12">
        projects 
      </h1>
      <p className="text-lg text-gray-600 mb-8">some stuff i have built.</p>

      <ul className="space-y-6">
  {projects.map((project) => (
    <li key={project.title}>
      <h2 className="font-semibold text-xl text-gray-900 hover:text-blue-600 hover:underline transition-all duration-200 mt-1 ">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h2>
      <p className="text-lg text-gray-500 leading-relaxed">{project.description}</p>
    </li>
  ))}
</ul>
    </div>
    <DockDemo/>
    </>
  );
}

  
  
