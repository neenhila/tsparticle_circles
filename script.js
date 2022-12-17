tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 100
    },
    shape: {
      type: "star"
    },
    links: {
      enable: true,
      distance: "max",
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
        distance: 100
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 3
      }
    }
  },
  detectRetina: true,
})
