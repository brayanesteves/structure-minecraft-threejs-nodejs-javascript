import { useFrame, useThree }  from "@react-three/fiber";
import { useSphere }           from "@react-three/cannon";
import { useEffect, useRef }   from "react";
import { Vector3 }             from "three";
import { useKeyboard }         from "../hooks/useKeyboard";

export const Player = () => {

    const actions = useKeyboard();
    console.log('actions', Object.entries(actions).filter(([k, v]) => v));    

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass:     1,
        type:     'Dynamic',
        /**
         * [velocity, gravity, begin]
         */
        position: [0, 2, 10]
    }));

    /**
     * Velocity player
     */
    const vel = useRef([0, 0, 0]);
    useEffect(() => {
        api.velocity.subscribe((v) => vel.velocity = v)
    }, [api.velocity]);

    /**
     * Position player
     */
    const pos = useRef([0, 0, 0]);
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position]);

    /**
     * Camera position connect to our player
     */
    useFrame(() => {
        //console.log('frame');
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
        /**
         * Velocity
         */
        //api.velocity.set(0, 1, 0);
    });

    return (
        <mesh ref={ref}></mesh>
    );
};