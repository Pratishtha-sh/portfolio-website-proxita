import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 300 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() * -10) - 1; // Brought slightly closer

      temp.push({
        position: [x, y, z],
        // Very slow, ambient drift (dust-like)
        velocity: [
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
        ],
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      // Update X
      let x = positions[i * 3];
      x += particles[i].velocity[0];
      if (x > 25) x = -25;
      if (x < -25) x = 25;
      positions[i * 3] = x;

      // Update Y
      let y = positions[i * 3 + 1];
      y += particles[i].velocity[1];
      if (y > 15) y = -15;
      if (y < -15) y = 15;
      positions[i * 3 + 1] = y;

      // Update Z
      let z = positions[i * 3 + 2];
      z += particles[i].velocity[2];
      if (z > -1) z = -11;
      if (z < -11) z = -1;
      positions[i * 3 + 2] = z;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#f3effc"     // Brighter off-white/purple
        size={0.08}         // More delicate dust size
        transparent
        opacity={0.6}       // Keep the opacity for visibility
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
