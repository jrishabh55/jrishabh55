"use client";
import { random } from "@/lib/utils";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import exp from "constants";
import { ComponentProps, useEffect, useMemo, useState } from "react";

type ParticleProps = ComponentProps<typeof Particles>;

const initialLoaded = {
  loaded: false,
};

const ParticleBackground = () => {
  const [init, setInit] = useState(initialLoaded.loaded);

  const options = useMemo<ParticleProps["options"]>(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      background: {
        color: "#1b1b1b",
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "out",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: random(70, 110),
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },

      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: { enable: false },
        },
        modes: {
          push: {
            particles_nb: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    }),
    [],
  );

  const particlesLoaded: ParticleProps["particlesLoaded"] = async (container) => {
    // console.log(container);
  };

  useEffect(() => {
    if (initialLoaded.loaded) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      initialLoaded.loaded = true;
    });
  }, []);

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
};

export default ParticleBackground;
