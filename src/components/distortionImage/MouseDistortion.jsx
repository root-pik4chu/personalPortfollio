import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MouseDistortionMaterial = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D texture1;
    uniform vec2 uMouse;
    uniform vec2 resolution;
    varying vec2 vUv;

    float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
      uv -= disc_center;
      uv *= resolution / min(resolution.x, resolution.y);
      float dist = length(uv);
      return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
    }

    void main() {
      vec2 newUV = vUv;
      float c = circle(vUv, uMouse, 0.0, 0.5);
      float r = texture2D(texture1, newUV + c * 0.090).r;
      float g = texture2D(texture1, newUV + c * 0.095).g;
      float b = texture2D(texture1, newUV + c * 0.090).b;
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
};

function DistortionPlane({ image }) {
  const { size, pointer } = useThree();
  const mouse = useMemo(() => new THREE.Vector2(-10, -10), []);

  // Load texture
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(image);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, [image]);

  const uniforms = useMemo(
    () => ({
      texture1: { value: texture },
      uMouse: { value: mouse },
      resolution: { value: new THREE.Vector2(size.width, size.height) }
    }),
    [texture, mouse, size]
  );

  // Update mouse position from pointer
  useFrame(() => {
    uniforms.uMouse.value.x = pointer.x * 0.5 + 0.5; // [-1,1] → [0,1]
    uniforms.uMouse.value.y = pointer.y * 0.5 + 0.5; // flip Y
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={MouseDistortionMaterial.vertexShader}
        fragmentShader={MouseDistortionMaterial.fragmentShader}
      />
    </mesh>
  );
}

export default function MouseDistortion({ image }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
        <DistortionPlane image={image} />
      </Canvas>
    </div>
  );
}
