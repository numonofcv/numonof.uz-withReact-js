import React, { useState } from 'react';
import './Project.css';
import { recipeLP, productList, fourCartFuture } from '../assets/images/images';

const projectData = [
{
id: 1,
title: 'Multi-Page Website',
image: recipeLP,
category: 'Html/CSS',
},
{
id: 2,
title: 'Todo App',
image: productList,
category: 'ReactJs',
},
{
id: 3,
title: 'Image Slider',
image: fourCartFuture,
category: 'JavaScript',
},
{
id: 4,
title: 'Image Slider',
image: fourCartFuture,
category: 'JavaScript',
}, {
id: 5,
title: 'Image Slider',
image: fourCartFuture,
category: 'JavaScript',
},
];

const categories = ['All', 'Html/CSS', 'Bootstrap', 'JavaScript', 'ReactJs'];

export default function Project() {
const [selectedCategory, setSelectedCategory] = useState('All');

const filteredProjects =
selectedCategory === 'All'
? projectData
: projectData.filter((project) => project.category === selectedCategory);

return (
<section className="project">
    <div className="container project__container">
        <h3 className="title">My Projects</h3>
        <p className='description'>This is the portfolio section of the site. You can take a look at my little practices
            here.You can see the codes by pressing Ctrl + U when opening the site. I left a github link for some of
            them.</p>
        {/* Category Filter Buttons */}
        <div className="project__filters">
            {categories.map((category) => (
            <button key={category} className={`button project__filter-btn ${selectedCategory===category ? 'active' : '' }`}
                onClick={()=> setSelectedCategory(category)}
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
                        <img src={project.image} alt={project.title} className="project__image" />
                    </div>
                    <div className="project__details">
                        <h3 className="project__card-title">{project.title}</h3>
                        <button className="button project__button">View Project</button>
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
};