import React, { useMemo, useState } from "react";
import "./Project.scss";
import imagesData from "../assets/images/images.json"; // JSON which has title & category & src

const categories = ["All", "Html/CSS", "Bootstrap", "JavaScript", "ReactJs"];

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create projects list from JSON once (useMemo for small perf gain)
  const baseProjects = useMemo(() => {
    if (!Array.isArray(imagesData)) return [];
    return imagesData.map((item, idx) => ({
      id: item.id ?? idx + 1,
      title: item.title ?? item.name,
      category: item.category ?? "Uncategorized",
      src: item.src?.replace("./images/", "") ?? "", // just filename like "todo.png"
    }));
  }, []);

  // Filter using the categories (exact string match)
  const filteredProjects =
    selectedCategory === "All"
      ? baseProjects
      : baseProjects.filter((p) => p.category === selectedCategory);

  // Helper to safely require image — shows fallback if missing
  const getImage = (filename) => {
    try {
      // adjust path relative to this file
      return require(`../assets/images/${filename}`);
    } catch (err) {
      // console.warn("Image not found:", filename, err);
      return ""; // or a placeholder path if you have one
    }
  };

  return (
    <section className="project">
      <div className="container project__container">
        <h3 className="title">My Projects</h3>
        <p className="description">
          This is the portfolio section of the site. You can take a look at my
          small practice projects here.
        </p>

        <div className="project__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`button project__filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <ul className="project__list">
            {filteredProjects.map((project) => (
              <li className="project__item" key={project.id}>
                <div className="project__card">
                  <div className="project__card-image-wrapper">
                    <img
                      src={project.src ? getImage(project.src) : ""}
                      alt={project.title}
                      className="project__image"
                    />
                  </div>
                  <div className="project__details">
                    <h3 className="project__card-title">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button project__button"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="project__empty">Ushbu proekt hali yuklanmadi!</p>
        )}
      </div>
    </section>
  );
}
