import "./ProjectList.scss";
import {
  mirage,
  crudTodo,
  indicorp,
  slider,
} from "../assets/images/images";

export default function ProjectList() {
  return (
    <section className="multi-section">
      <div className="container multi-section__container">
        <h3 className="title">
          Multi-Section About Some Project
        </h3>
        <ul className="multi-section__list">

          {/* Project 1: Multi-Page Website */}
          <li className="multi-section__item">
            <div className="multi-section__img-wrapper">
              <img
                src={mirage}
                alt="Multi-Page Website"
                className="multi-section__image"
              />
            </div>
            <div className="multi-section__details">
              <h2 className="multi-section__item-title">Multi-Page Website</h2>
              <p className="multi-section__description">
                A fully responsive multi-page website built with HTML, CSS, and JavaScript
              </p>
              <button className="button multi-section__button">View project</button>
            </div>
          </li>

          {/* Project 2: Todo App */}
          <li className="multi-section__item">
            <div className="multi-section__img-wrapper">
              <img
                src={crudTodo}
                alt="Todo App"
                className="multi-section__image"
              />
            </div>
            <div className="multi-section__details">
              <h2 className="multi-section__item-title">Todo App</h2>
              <p className="multi-section__description">
                A todo list application created using React, TypeScript, and Sass
              </p>
              <button className="button multi-section__button">View project</button>
            </div>
          </li>

          {/* Project 3: Indicorp Website */}
          <li className="multi-section__item">
            <div className="multi-section__img-wrapper">
              <img
                src={indicorp}
                alt="Indicorp Website"
                className="multi-section__image"
              />
            </div>
            <div className="multi-section__details">
              <h2 className="multi-section__item-title">Indicorp Website</h2>
              <p className="multi-section__description">
                A corporate website built with responsive design, optimized for performance
              </p>
              <button className=" button multi-section__button">View project</button>
            </div>
          </li>

          {/* Project 4: Image Slider */}
          <li className="multi-section__item">
            <div className="multi-section__img-wrapper">
              <img
                src={slider}
                alt="Img Slider"
                className="multi-section__image"
              />
            </div>
            <div className="multi-section__details">
              <h2 className="multi-section__item-title">Image Slider</h2>
              <p className="multi-section__description">
                An Image slider component built with HTML, CSS, and JavaScript
              </p>
              <button className="button multi-section__button">View project</button>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
