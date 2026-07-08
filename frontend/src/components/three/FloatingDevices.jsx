import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float, PerspectiveCamera, Cylinder, Sphere, Torus, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';

// --- DELICATE GOLDEN WIRE ARCHES (Dark Luxury Theme) ---
function DecorativeWires() {
  const wireRef = useRef();
  useFrame((state) => {
    if (!wireRef.current) return;
    wireRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.06;
  });

  return (
    <group ref={wireRef} position={[0, -0.2, 0]}>
      {/* Thin bronze wire arch looping cleanly around the monolith */}
      <Torus args={[1.8, 0.008, 16, 100]} position={[-0.1, 0.3, -0.2]} rotation={[1.1, 0.3, 0.2]}>
        <meshStandardMaterial color="#C89B66" roughness={0.2} metalness={0.9} />
      </Torus>
      {/* Secondary wire loop around right side */}
      <Torus args={[1.3, 0.006, 16, 80]} position={[0.6, 0.0, 0.2]} rotation={[0.7, -0.5, 0.4]}>
        <meshStandardMaterial color="#888888" roughness={0.3} metalness={0.7} />
      </Torus>
    </group>
  );
}

// --- FLOATING DARK GLASS PANELS (Exact Reference Feature: "We build digital experiences...") ---
function FloatingDarkPanels() {
  const panel1Ref = useRef();
  const panel2Ref = useRef();

  useFrame((state) => {
    if (panel1Ref.current) {
      panel1Ref.current.position.y = 0.9 + Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
    }
    if (panel2Ref.current) {
      panel2Ref.current.position.y = 0.1 + Math.sin(state.clock.elapsedTime * 1.8 + 1) * 0.03;
    }
  });

  return (
    <group>
      {/* Top Right Panel: "We build digital experiences that drive results." */}
      <group ref={panel1Ref} position={[1.1, 0.9, -0.4]} rotation={[0.1, -0.25, 0]}>
        <Html transform distanceFactor={5.2} center>
          <div style={{
            width: '210px',
            background: 'rgba(22, 22, 22, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(200, 155, 102, 0.3)',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            fontFamily: 'var(--font-heading)',
            color: '#FFFFFF',
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '11px', color: '#C89B66', fontWeight: 700, letterSpacing: '0.1em' }}>
              <span>01</span>
              <span>✧</span>
            </div>
            <p style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.4, color: '#E0E0E0' }}>
              We build digital experiences that drive results.
            </p>
          </div>
        </Html>
      </group>

      {/* Bottom Left Panel: "Unique, scalable and built from scratch." */}
      <group ref={panel2Ref} position={[-1.1, 0.1, 0.3]} rotation={[0.15, 0.25, -0.05]}>
        <Html transform distanceFactor={5.5} center>
          <div style={{
            width: '190px',
            background: 'rgba(20, 20, 20, 0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            padding: '14px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
            fontFamily: 'var(--font-heading)',
            color: '#FFFFFF',
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
            <div style={{ fontSize: '10px', color: '#888888', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '6px' }}>
              02 / HIGH PERFORMANCE
            </div>
            <p style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.3, color: '#CCCCCC' }}>
              Unique, scalable and built from scratch.
            </p>
          </div>
        </Html>
      </group>
    </group>
  );
}

// --- DARK MONOLITH PEDESTALS (Exact Reference Silhouette) ---
function Podiums() {
  return (
    <group position={[0, -0.3, 0]}>
      {/* 1. Large Vertical Dark Monolith Arch Backdrop (Signature Reference Feature!) */}
      <RoundedBox args={[2.2, 3.2, 0.2]} radius={1.05} position={[0.2, 0.8, -1.2]} receiveShadow castShadow>
        <meshStandardMaterial color="#1A1A1A" roughness={0.4} metalness={0.3} />
      </RoundedBox>

      {/* 2. Top Center Dark Pedestal Step (Where Laptop rests ON!) */}
      <RoundedBox args={[2.8, 1.2, 1.8]} radius={0.06} position={[-0.1, -0.8, -0.4]} receiveShadow castShadow>
        <meshStandardMaterial color="#141414" roughness={0.3} metalness={0.4} />
      </RoundedBox>

      {/* 3. Right Cylinder Pedestal */}
      <Cylinder args={[0.65, 0.68, 1.8, 64]} position={[1.15, -0.7, 0.1]} receiveShadow castShadow>
        <meshStandardMaterial color="#1C1C1C" roughness={0.4} metalness={0.3} />
      </Cylinder>

      {/* 4. Front Left Step */}
      <RoundedBox args={[1.5, 0.7, 1.3]} radius={0.05} position={[-1.0, -1.1, 0.5]} receiveShadow castShadow>
        <meshStandardMaterial color="#181818" roughness={0.5} metalness={0.3} />
      </RoundedBox>

      {/* 5. Bottom Right Circular Disc */}
      <Cylinder args={[0.55, 0.58, 0.3, 64]} position={[1.3, -1.25, 0.7]} receiveShadow castShadow>
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.4} />
      </Cylinder>

      {/* Glowing Golden Bronze Spheres */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.14, 32, 32]} position={[1.5, 0.8, -0.2]} castShadow>
          <meshStandardMaterial color="#C89B66" roughness={0.1} metalness={0.9} emissive="#C89B66" emissiveIntensity={0.3} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Sphere args={[0.11, 32, 32]} position={[-1.6, 0.5, 0.3]} castShadow>
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.8} />
        </Sphere>
      </Float>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[0.09, 32, 32]} position={[0.4, 1.6, -0.5]} castShadow>
          <meshStandardMaterial color="#C89B66" roughness={0.2} metalness={0.8} />
        </Sphere>
      </Float>
    </group>
  );
}

// --- LAPTOP SCREEN CONTENT (Dark Mode Website Mockup - Ultra Sleek) ---
function LaptopScreenContent() {
  return (
    <group>
      {/* Screen Background */}
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[2.1, 1.35]} />
        <meshBasicMaterial color="#0A0A0A" />
      </mesh>
      {/* Top Navbar */}
      <mesh position={[0, 0.6, 0.002]}>
        <planeGeometry args={[2.1, 0.12]} />
        <meshBasicMaterial color="#141414" />
      </mesh>
      {/* Logo dot & nav links */}
      <mesh position={[-0.9, 0.6, 0.003]}>
        <circleGeometry args={[0.025, 16]} />
        <meshBasicMaterial color="#C89B66" />
      </mesh>
      {[-0.55, -0.35, -0.15, 0.05].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 0.003]}>
          <planeGeometry args={[0.12, 0.015]} />
          <meshBasicMaterial color="#888888" opacity={0.8} transparent />
        </mesh>
      ))}
      <mesh position={[0.85, 0.6, 0.003]}>
        <planeGeometry args={[0.22, 0.06]} />
        <meshBasicMaterial color="#EADBC8" />
      </mesh>

      {/* Hero Section */}
      <mesh position={[-0.48, 0.2, 0.002]}>
        <planeGeometry args={[0.95, 0.6]} />
        <meshBasicMaterial color="#0A0A0A" />
      </mesh>
      {/* Headline banner */}
      <mesh position={[-0.48, 0.36, 0.003]}>
        <planeGeometry args={[0.85, 0.09]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.58, 0.24, 0.003]}>
        <planeGeometry args={[0.65, 0.09]} />
        <meshBasicMaterial color="#C89B66" />
      </mesh>
      <mesh position={[-0.53, 0.1, 0.003]}>
        <planeGeometry args={[0.75, 0.025]} />
        <meshBasicMaterial color="#888888" opacity={0.7} transparent />
      </mesh>
      <mesh position={[-0.63, 0.04, 0.003]}>
        <planeGeometry args={[0.55, 0.025]} />
        <meshBasicMaterial color="#888888" opacity={0.7} transparent />
      </mesh>
      {/* CTA Button */}
      <mesh position={[-0.68, -0.08, 0.003]}>
        <planeGeometry args={[0.28, 0.08]} />
        <meshBasicMaterial color="#EADBC8" />
      </mesh>

      {/* Hero Dark Architecture Photo (Right Side) */}
      <mesh position={[0.5, 0.18, 0.002]}>
        <planeGeometry args={[0.92, 0.7]} />
        <meshBasicMaterial color="#1A1A1A" />
      </mesh>
      <mesh position={[0.5, 0.26, 0.003]}>
        <planeGeometry args={[0.8, 0.4]} />
        <meshBasicMaterial color="#C89B66" opacity={0.75} transparent />
      </mesh>
      <mesh position={[0.36, 0.03, 0.003]}>
        <planeGeometry args={[0.42, 0.28]} />
        <meshBasicMaterial color="#2A2A2A" />
      </mesh>
      <mesh position={[0.66, 0.03, 0.003]}>
        <planeGeometry args={[0.32, 0.28]} />
        <meshBasicMaterial color="#3A3A3A" />
      </mesh>

      {/* Bottom Cards Row */}
      {[-0.65, 0, 0.65].map((x, i) => (
        <group key={i} position={[x, -0.42, 0.002]}>
          <mesh>
            <planeGeometry args={[0.58, 0.28]} />
            <meshBasicMaterial color="#141414" />
          </mesh>
          <mesh position={[-0.16, 0.06, 0.001]}>
            <planeGeometry args={[0.2, 0.03]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0, -0.04, 0.001]}>
            <planeGeometry args={[0.48, 0.02]} />
            <meshBasicMaterial color="#666666" opacity={0.8} transparent />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// --- LAPTOP MODEL ---
function Laptop({ position, rotation, scale = 1 }) {
  const groupRef = useRef();
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.025;
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <RoundedBox args={[2.5, 0.08, 1.7]} radius={0.03} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#2E2E2E" metalness={0.9} roughness={0.15} />
      </RoundedBox>
      <mesh position={[0, 0.041, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 1.35]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.4} roughness={0.6} />
      </mesh>
      <group position={[0, 0.04, -0.82]} rotation={[-Math.PI * 0.36, 0, 0]}>
        <RoundedBox args={[2.5, 1.58, 0.05]} radius={0.03} castShadow>
          <meshStandardMaterial color="#242424" metalness={0.9} roughness={0.15} />
        </RoundedBox>
        <mesh position={[0, 0, 0.026]}>
          <planeGeometry args={[2.3, 1.44]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <group position={[0, 0, 0.027]} scale={[1.05, 1.05, 1]}>
          <LaptopScreenContent />
        </group>
      </group>
    </group>
  );
}

// --- MAIN HERO SCENE (Dark Luxury Monolith & Glass Panels) ---
function HeroScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 7.6]} fov={40} />
      
      {/* Dramatic Studio Lighting Setup for Dark Mode */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[6, 10, 6]} intensity={1.8} color="#ffffff" castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-6, 4, -4]} intensity={0.8} color="#C89B66" />
      <pointLight position={[0, 5, 3]} intensity={1.0} color="#C89B66" />
      <spotLight position={[0, 10, 0]} intensity={1.2} angle={0.6} penumbra={1} color="#ffffff" />

      {/* Decorative Wires & Floating Dark Glass Panels */}
      <DecorativeWires />
      <FloatingDarkPanels />

      {/* Dark Concrete Podiums & Vertical Arch Backdrop */}
      <Podiums />

      {/* MacBook Pro (Resting directly ON top of the center pedestal step!) */}
      <Laptop position={[0.0, 0.12, -0.1]} rotation={[0.22, -0.16, 0.02]} scale={0.88} />

      {/* Soft Contact Shadows on virtual floor */}
      <ContactShadows position={[0, -2.1, 0]} opacity={0.6} scale={14} blur={2.5} far={4} color="#000000" />
    </>
  );
}

export default function FloatingDevices() {
  return (
    <div className="hero__canvas" aria-hidden="true" style={{ width: '100%', height: '100%', minHeight: '660px' }}>
      <Canvas
        dpr={[1, 1.5]}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={
          <Html center>
            <div style={{ color: '#C89B66', fontWeight: 600, fontSize: '14px', fontFamily: 'var(--font-heading)' }}>
              Loading Studio Monolith...
            </div>
          </Html>
        }>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
