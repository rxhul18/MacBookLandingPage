import {useScroll, useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContanier = () => {
   let model = useGLTF("./mac.glb");
   let texture = useTexture("./red.jpg");
   let meshes = {};
   model.scene.traverse((e) => {
      meshes[e.name] = e;
   })
   meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
   meshes.matte.material.map = texture;
   meshes.matte.material.emissiveIntensity = 0;
   meshes.matte.material.metalness = 0;
   meshes.matte.material.roughness = 1;
   let data = useScroll();
   useFrame(()=>{
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
   })

  return (
    <group position={[0,-10,20]}>
      <primitive object={model.scene}/>
    </group>
  )
}

export default MacContanier