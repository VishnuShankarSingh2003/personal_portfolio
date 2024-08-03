// import React from 'react';
// import Particles from "react-tsparticles";

// const Particle = () => {
//     return (
//         <Particles
//             params={{
//                 particles: {
//                     number: {
//                         value: 160,
//                         density: {
//                             enable: true,
//                             value_area: 1500,
//                         },
//                     },
//                     line_linked: {
//                         enable: false,
//                         opacity: 0.03,
//                     },
//                     move: {
//                         direction: "right",
//                         speed: 0.05,
//                     },
//                     size: {
//                         value: 1,
//                     },
//                     opacity: {
//                         anim: {
//                             enable: true,
//                             speed: 1,
//                             opacity_min: 0.05,
//                         },
//                     },
//                 },
//                 interactivity: {
//                     events: {
//                         onclick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                     },
//                     modes: {
//                         push: {
//                             particles_nb: 1,
//                         },
//                     },
//                 },
//                 retina_detect: true,
//             }}
//         />
//     );
// }

// export default Particle;





import React from 'react';
import Particles from "react-tsparticles";
import './Particle.css'; // Import the CSS file

const Particle = () => {
    return (
        <div className="particles-container">
            <Particles
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1, // Ensure particles are behind other content
                    },
                    background: {
                        color: {
                            value: "#0f0f0f", // Dark charcoal background
                        },
                    },
                    particles: {
                        number: {
                            value: 100, // Number of particles
                        },
                        color: {
                            value: ["#ff5722", "#00d4ff", "#5f5fc4", "#b0ff7b"], // Adding orange color
                        },
                        shape: {
                            type: "circle", // Particle shape
                        },
                        opacity: {
                            value: 0.6, // Opacity
                            animation: {
                                enable: true,
                                speed: 1.5,
                                minimumValue: 0.3,
                                sync: false,
                            },
                        },
                        size: {
                            value: { min: 2, max: 6 }, // Particle size
                            random: true,
                            animation: {
                                enable: true,
                                speed: 2,
                                minimumValue: 2,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff", // Line color
                            opacity: 0.3,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: {
                                default: "out",
                            },
                            bounce: false,
                        },
                    },
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                particles_nb: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.5,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        </div>
    );
}

export default Particle;

