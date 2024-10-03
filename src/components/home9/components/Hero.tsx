import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

interface CameraHeroProps {
  children: ReactNode;
}

const CameraHero = ({ children }: CameraHeroProps) => {
  return (
    <perspectiveCamera rotation={[0.2, -1, 0]} position={[0, -2, -2]}>
      {children}
    </perspectiveCamera>
  );
};

interface argsInterface {
  args: number[];
}

const BoxShape = ({ args }: argsInterface) => {
  const [x, y, z] = args;
  return (
    <mesh position={[x, y, z]}>
      <meshBasicMaterial color={"red"} />
      <boxGeometry />
    </mesh>
  );
};

const Slope = () => {
  return (
    <mesh scale={[5, 1, 1]} position={[0, -0.6, 0]}>
      <meshBasicMaterial color={"blue"} />
      <boxGeometry args={[1, 0.15, 1]} />
    </mesh>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <Canvas className="canva_class">
        <Environment preset="city" />
        <OrbitControls />
        <CameraHero>
          <group>
            <BoxShape args={[0, 0, 0]} />
            <BoxShape args={[1, 0, 4]} />
            <Slope />
          </group>
        </CameraHero>
      </Canvas>
    </div>
  );
};

export default Hero;
