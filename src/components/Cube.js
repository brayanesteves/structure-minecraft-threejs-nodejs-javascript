import { useBox }    from "@react-three/cannon";
import * as textures from "../objects/textures";

export const Cube = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }));

    const activeTexture = textures[texture + 'Texture'];
    //console.log('Active Textures', activeTexture);

    return (
        <mesh ref={ref}>
            <boxBufferGeometry    attach="geometry" />
            <meshStandardMaterial map={activeTexture} /*color="hotpink"*/ attach="material" />
        </mesh>
    );
};