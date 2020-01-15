import { Vector3 } from 'three';

export interface MeshOptions {
  castShadow?: boolean;
  position?: Vector3;
  receiveShadow?: boolean;
  scale?: Vector3;
  up?: THREE.Vector3;
  userData?: { [key: string]: any };
  visible?: boolean;
}

export const defaultMeshOptions = {
  castShadow: true,
  position: new Vector3(0, 0, 0),
  receiveShadow: true,
  scale: new Vector3(0.03, 0.03, 0.03)
}
