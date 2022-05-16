import React from 'react'

import Particles from 'react-tsparticles';

const MyParticles = () => {
	return (
		<Particles
		
      options={{
        backgroundMode: {
          enable: true,
          zIndex: 0
        },
        background: {
          color: "transparent"
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: {
              enable: true,
              mode: "bubble",
             
            },
            resize: false
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 0.3,
              opacity: 0.1,
              size: 4,
           
            },
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#fff" },
          links: {
            color: "transparent",
            distance: 250,
            enable: false,
            opacity: 0,
            width: 2
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            direction: "top",
            enable: true,
            outMode: "out",
            random: false,
            size: true,
            speed: 1,
            straight: false
          },
          number: { density: { enable: true, area: 800 }, value: 160 },
          opacity: {
            random: false,
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }}
    />
	)
}



export default MyParticles
