import { useBox }    from "@react-three/cannon";
import { useStore }  from "../hooks/useStore";
import * as textures from "../objects/textures";

export const Cube = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }));

    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

    const activeTexture = textures[texture + 'Texture'];
    //console.log('Active Textures', activeTexture);

    return (
        <mesh onClick={(e) => {
            e.stopPropagation();
            const clickedFace = Math.floor(e.faceIndex / 2);
            //console.log('Face:', clickedFace);
            const { x, y, z } = ref.current.position;

            /**
             * Remove cube
             * Button mause left + alt key
             */
            if(e.altKey) {
                removeCube(x, y, z);
                return;
                
                /**
                 * Add cube
                 */
            } else if(clickedFace === 0) {
                addCube(x + 1, y, z);
                return;
            } else if(clickedFace === 1) {
                addCube(x - 1, y, z);
                return;
            } else if(clickedFace === 2) {
                addCube(x, y + 1, z);
                return;
            } else if(clickedFace === 3) {
                addCube(x, y - 1, z);
                return;
            } else if(clickedFace === 4) {
                addCube(x, y, z + 1);
                return;
            } else if(clickedFace === 5) {
                addCube(x, y, z - 1);
                return;
            }
        }} ref={ref}>
            <boxBufferGeometry    attach="geometry" />
            <meshStandardMaterial map={activeTexture} /*color="hotpink"*/ attach="material" />
        </mesh>
    );
};