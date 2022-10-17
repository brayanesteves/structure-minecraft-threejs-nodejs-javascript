import { usePlane }      from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { groundTexture } from "../objects/textures";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        /**
         * [x, y, z]
         */
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }));

    /**
     * Show image ground
     * 'Image' assets/img/jpg/grass.jpg
     */
    //groundTexture.magFilter = NearestFilter;
    /**
     * @dir objects/textures.js
     */
    //groundTexture.wrapS     = RepeatWrapping;
    //groundTexture.wrapT     = RepeatWrapping;
    
    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref}>
            <planeBufferGeometry  attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    );
};