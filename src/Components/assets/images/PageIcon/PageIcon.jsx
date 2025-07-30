import './PageIcon.css'
import htmlIcon from '../skilsIcon/html.svg';
import cssIcon from '../skilsIcon/Sass.svg';
import jsIcon from '../skilsIcon/javascript.svg';
import bootstrapIcon from '../skilsIcon/bootstrap.svg';
import figmaIcon from '../skilsIcon/figma.svg';
import gitIcon from '../skilsIcon/Git.svg';
import typeScriptIcon from '../skilsIcon/typscript.svg';
import reactIcon from '../skilsIcon/reacticon.svg';

const icons = [
{ name: 'HTML', src: htmlIcon },
{ name: 'CSS', src: cssIcon },
{ name: 'JavaScript', src: jsIcon },
{ name: 'React', src: reactIcon },
{ name: 'TypeScript', src: typeScriptIcon },
{ name: 'Git', src: gitIcon },
{ name: 'Bootstrap', src: bootstrapIcon },
{ name: 'Figma', src: figmaIcon },
];

export default function PageIcon() {
return (
<div className="container">
  <div className="slider">
    <div className="slider-track">
      {icons.concat(icons).map(({ name, src }, index) => (
      <div className="slide" key={index}>
        <img src={src} alt={name} />
      </div>
      ))}
    </div>
  </div>
</div>

);
}