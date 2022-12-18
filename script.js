tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 100
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#696969",
      animation: {
        enable: true,
        speed: 100,
        sync: true
      }
    },
    shape: {
      type: "star",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 7,
      random: {
        enable: true,
        minimumValue: .1
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 5,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    links: {
      enable: true,
      color: "random",
      distance: 100
    },
    move: {
      enable: true,
      speed: 2.4,
      direction: "none",
      random: true,
      straight: false,
      outMode: "destroy",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onhover: {
        enable: true,
        mode: "trail"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 1
      },
      trail: {
        delay: 0.005,
        quantity: 3,
        pauseOnStop: true
      }
    }
  },
  retina_detect: true
});


tsParticles.load("tsparticles-2", {
  fullScreen: {
    enable: true,
    zIndex: 50
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: "#696969",
    },
    shape: {
      type: "star",
    },
    links: {
      enable: true,
      color: "#696969",
      distance: 150
    },
    move: {
      enable: true,
      speed: .2
    }
  },
  retina_detect: true
});
