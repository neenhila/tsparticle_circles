tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 100
    },
    move: {
      enable: true,
      speed: 0.5
    },
    shape: {
      type: "star"
    },
    animation: {
      enable: true,
      speed: .1,
      minimumValue: 0.1,
      sync: true
    },
    links: {
      enable: true,
      distance: 400,
      color: "#696969",
      opacity: 0.6,
      width: 2
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },

      resize: false
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      repulse: {
        distance: 150
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
