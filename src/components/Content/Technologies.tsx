import React from 'react';
import { TechnologyLink } from "../../config/technology-links";

interface TechnologiesProps {
    technologies: TechnologyLink[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
    return (
        <div className="Technologies">
            <h3>Technologies</h3>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>
                        {tech.url ? (
                            <a href={tech.url} target="_blank" rel="noopener noreferrer">
                                {tech.name}
                            </a>
                        ) : (
                            tech.name
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Technologies;


// import React from 'react';
// import {TechnologyLink} from "../../config/technology-links";
//
// interface TechnologiesProps {
//     technologies: TechnologyLink[];
// }
//
// const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
//     return (
//         <div className="App-content">
//             <h3>Technologies</h3>
//             <ul>
//                 {technologies.map((tech, index) => (
//                     <li key={index}>
//                         {tech.url ? (
//                             <a href={tech.url} target="_blank" rel="noopener noreferrer">
//                                 {tech.name}
//                             </a>
//                         ) : (
//                             tech.name
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default Technologies;
