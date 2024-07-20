// components/Project.js
const ProjectCard = ({ title, description, category }) => {
    return (
      <div className="p-4 border rounded-md shadow-sm">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
    );
  };
  
  export default ProjectCard;