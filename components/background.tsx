"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, MeshDistortMaterial } from "@react-three/drei"
import { Vector3, type Mesh } from "three"
import { useTheme } from "next-themes"

function WaveParticles({ count = 100, color = "#00BFFF", mousePosition }) {
  const mesh = useRef<Mesh>()
  const { viewport, mouse } = useThree()

  // Create particles
  const particles = Array.from({ length: count }, () => ({
    position: new Vector3(
      (Math.random() - 0.5) * viewport.width * 2,
      (Math.random() - 0.5) * viewport.height * 2,
      Math.random() * -10,
    ),
    factor: Math.random() * 10,
    speed: Math.random() * 0.01,
    initialY: Math.random() * 20 - 10,
  }))

  useFrame((state) => {
    if (!mesh.current) return

    // Update particles
    for (let i = 0; i < count; i++) {
      const { position, factor, speed, initialY } = particles[i]
      const idx = i * 3

      // Wave motion
      const time = state.clock.getElapsedTime()
      const y = initialY + (Math.sin(time * speed * factor) * factor) / 10

      // Mouse influence
      const mouseInfluence = 0.1
      const distX = (mousePosition.current.x * viewport.width) / 2 - position.x
      const distY = (-mousePosition.current.y * viewport.height) / 2 - position.y
      const distance = Math.sqrt(distX * distX + distY * distY)
      const influence = Math.max(0, 5 - distance) * mouseInfluence

      // Update positions
      mesh.current.geometry.attributes.position.array[idx] = position.x + distX * influence
      mesh.current.geometry.attributes.position.array[idx + 1] = position.y + y + distY * influence
      mesh.current.geometry.attributes.position.array[idx + 2] = position.z
    }

    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={new Float32Array(count * 3)} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color={color} transparent opacity={0.8} />
    </points>
  )
}

function FloatingObjects({ mousePosition }) {
  const sphere1 = useRef<Mesh>()
  const sphere2 = useRef<Mesh>()
  const torus = useRef<Mesh>()
  const { viewport } = useThree()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Mouse influence
    const mouseX = mousePosition.current.x * 0.1
    const mouseY = mousePosition.current.y * 0.1

    // Animate sphere1
    if (sphere1.current) {
      sphere1.current.position.x = Math.sin(t * 0.2) * 3 + mouseX
      sphere1.current.position.y = Math.cos(t * 0.3) * 2 + mouseY
      sphere1.current.rotation.x = t * 0.1
      sphere1.current.rotation.y = t * 0.2
    }

    // Animate sphere2
    if (sphere2.current) {
      sphere2.current.position.x = Math.cos(t * 0.3) * 4 - mouseX
      sphere2.current.position.y = Math.sin(t * 0.2) * 3 - mouseY
      sphere2.current.rotation.x = t * 0.2
      sphere2.current.rotation.z = t * 0.1
    }

    // Animate torus
    if (torus.current) {
      torus.current.position.x = Math.sin(t * 0.1) * 5 + mouseX * 0.5
      torus.current.position.y = Math.cos(t * 0.1) * 2 + mouseY * 0.5
      torus.current.rotation.x = t * 0.1
      torus.current.rotation.y = t * 0.2
      torus.current.rotation.z = t * 0.1
    }
  })

  return (
    <>
      <mesh ref={sphere1} position={[3, 2, -5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#00BFFF" speed={2} distort={0.3} radius={1} transparent opacity={0.7} />
      </mesh>

      <mesh ref={sphere2} position={[-4, -2, -8]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <MeshDistortMaterial color="#80DFFF" speed={3} distort={0.2} radius={1} transparent opacity={0.5} />
      </mesh>

      <mesh ref={torus} position={[0, 0, -10]}>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <MeshDistortMaterial color="#FFFFFF" speed={4} distort={0.4} radius={1} transparent opacity={0.3} />
      </mesh>
    </>
  )
}

function Scene() {
  const mousePosition = useRef({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position between -1 and 1
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <color attach="background" args={[resolvedTheme === "dark" ? "#050A18" : "#f8fafc"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <WaveParticles
        count={200}
        color={resolvedTheme === "dark" ? "#00BFFF" : "#0080FF"}
        mousePosition={mousePosition}
      />

      <FloatingObjects mousePosition={mousePosition} />

      <Environment preset="city" />
    </>
  )
}

export default function Background() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

