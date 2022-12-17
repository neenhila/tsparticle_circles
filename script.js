tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 200
    },
    move: {
      enable: true
    },
    shape: {
      type: "star"
    },
    animation: {
      enable: true,
      speed: 25,
      minimumValue: 0.2,
      sync: false
    },
    links: {
      enable: true,
      distance: 200,
      color: "#696969",
      opacity: 0.2,
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
        distance: 100
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  detectRetina: true,
})
