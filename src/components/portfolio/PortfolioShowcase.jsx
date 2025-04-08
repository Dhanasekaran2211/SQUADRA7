import React, { useState } from "react";
import "./portfolioshowcase.css";
const projects = [
  { id: 1, name: "E-Commerce Website", category: "Web", image: "https://imgs.search.brave.com/rtT9fRFGEsj9fpb3n_7k3TyKJPNtENl4yvSawl3JTxM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2VtcnVzaC5j/b20vYmxvZy91cGxv/YWRzL21lZGlhL2Q4/LzNhL2Q4M2E1Mzk2/NGUzYzRmMWUwNTc1/ZDYyYTRjMDhkYzQ1/LzU4ZTczNjhjMmZm/NGFlM2IxYWVjMThh/ZjdlYzZjMGY0L3Yw/aG1VVnZnVk1jZFRC/RHpFRGQtQUpvQUFJ/UndzR3hKSVQ2R1Mx/RW83SDlWcngtdk1Q/ZkZrdDNVbEhsSXho/V2V0X3E5Um5Pa2NS/XzdnN08tbnFON1hV/OXFqTGV3d2drUm5z/Qi1FdTBBQm1wQUJO/ZzNOLXl1SEN6ZVQ2/NUxmeFJkX3hmNFlP/TXlNX1RmVmI0eFV0/dS13SlUucG5n", link: "#", desc: "A scalable e-commerce platform with secure payments." },
  { id: 2, name: "AI Chatbot", category: "AI", image: "https://imgs.search.brave.com/-LCRn8tlFs5MXg35bLMVyMHS3APaJcYP2JhtXx4iqAY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcw/MTY1MjU4Ni9waG90/by9haS1jaGF0Ym90/LXJvYm90LWFjY2Vz/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SjF3VW85bEVt/d1pUU3M0eUtlUnJF/bEtLOVQ4MHBCU21z/a0M0Nm9LQnVCRT0", link: "#", desc: "Intelligent chatbot for automated customer support." },
  { id: 3, name: "Mobile Shopping App", category: "Mobile", image: "https://imgs.search.brave.com/byHeHgwAOl09K7rd0VrFjUfVesYVRmRK7ZlY-Y9PGb4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzA2LzU4Lzc5/LzM2MF9GXzIwNjU4/NzkzNF9MdndndVR4/MVZod3B0d3JtdUd5/V1lNQjBURGRqV0x0/aC5qcGc", link: "#", desc: "A seamless mobile shopping experience for users." },
  { id: 4, name: "SEO & Digital Marketing", category: "Marketing", image: "https://imgs.search.brave.com/BABi3l_SAPBuhwnV0jnZVqmaZUWy-Yu0niP4r2-tRnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY4LzY1LzUx/LzM2MF9GXzY4NjU1/MTkyX05EN3U0dldp/Z0w2a2ZZQjgwNEpY/dnZHREFpaWgyakJH/LmpwZw", link: "#", desc: "Boosted online presence with advanced SEO techniques." }
];

const categories = ["All", "Web", "Mobile", "AI", "Marketing"];

const PortfolioShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button 
            key={category} 
            className={`category-btn ${selectedCategory === category ? "active" : ""}`} 
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
