import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="border p-10 w-[700px] min-h-[900px] bg-white rounded-md shadow-md">

        <h1 className="text-3xl font-bold text-center">Suhana Chauhan</h1>
        <p className="text-center text-gray-600 mb-8">Frontend Developer</p>

        <h2 className="font-bold text-lg mt-6 mb-2">ABOUT ME</h2>
        <p className="text-gray-700 leading-relaxed">
          Dedicated BCA (Honors with Research) student passionate about web development and problem-solving.
          Currently learning Data Structures, Algorithms, and building projects using HTML, CSS, JavaScript,
          and React. I enjoy turning ideas into practical applications and continuously improving through
          hands-on coding. With a strong commitment to growth, I aim to contribute value while advancing
          my skills as a developer.
        </p>

        <h2 className="font-bold text-lg mt-8 mb-2">SKILLS</h2>

        <p className="font-semibold">Programming</p>
        <p className="mb-3">Python • JavaScript</p>

        <p className="font-semibold">Web Development</p>
        <p className="mb-3">
          HTML5 • CSS3 • JavaScript (ES6+) • DOM Manipulation • React.js • JSX • Hooks • State Management
        </p>

        <p className="font-semibold">CS Fundamentals</p>
        <p className="mb-3">
          Data Structures & Algorithms (Arrays, Strings, Loops, Conditions) • Problem Solving
        </p>

        <p className="font-semibold">Tools</p>
        <p className="mb-3">Git • GitHub • Canva • MS Office Suite</p>

        <p className="font-semibold">Soft Skills</p>
        <p>Consistency • Communication • Critical Thinking • Design Thinking</p>

        <h2 className="font-bold text-lg mt-8 mb-2">EDUCATION</h2>
        <p className="text-gray-700">BCA (Honors with Research), 2024–2027</p>
        <p className="text-gray-700 mb-6">Eternal University, Baru Sahib</p>

        <h2 className="font-bold text-lg mt-4 mb-2">PROJECTS</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Resume Builder App (React)</li>
          <li>E-commerce UI (JavaScript)</li>
          <li>Weather App (API + JavaScript)</li>
        </ul>

        <div className="flex justify-center mt-8">
          <Link to="/projects">
            <button className="border px-4 py-2 hover:bg-gray-100">View All Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
