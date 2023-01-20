import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { triangleParticles, polygonParticles } from "@/assets";

// Type imports 
import type { Container, Engine } from "tsparticles-engine";

export default function TSParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container !== undefined ? container.actualOptions : undefined);
  }, []);
  
  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        //@ts-expect-error
        options={{...triangleParticles}}
        className="fixed inset-0 -z-10"
      />
  )
}