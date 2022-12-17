tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 150
    },
    move: {
      enable: true,
    },
    shape: {
      type: "star"
    },
    animation: {
      enable: false,
    },
    links: {
      enable: true,
      distance: 1400,
      color: "#696969",
      opacity: 0.6,
      width: 1
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },

      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      repulse: {
        distance: 50
      },
      push: {
        quantity: 3
      },
      remove: {
        quantity: 1
      }
    }
  },
  detectRetina: true,
})
