import create     from 'zustand';
import { nanoid } from 'nanoid';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useStore = create((set) => ({
       texture: 'dirt',
       cubes: getLocalStorage('cubes') || [],
        /*cubes: [
            // Test cubes show
            {
                    key: nanoid(),
                    pos: [2, 0.5, 0],
                texture: 'dirt'
            },
            {
                    key: nanoid(),
                    pos: [1, 0.5, 0],
                texture: 'wood'
            }
        ],*/
       addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                { 
                        key: nanoid(),
                        pos: [x, y, z],
                    texture: prev.texture
                }
            ]
        }));
       },
    removeCube: (x, y, z) => {
        //console.log('Remove Cube', x, y, z);
        set((prev) => ({
            cubes: prev.cubes.filter(cube => {
                const [X, Y, Z] = cube.pos;
                return X !== x || Y !== y || Z !== Z;
            })
        }));
    },
    setTexture: (texture) => {
        set(() => ({
            texture
        }));
    },
     saveWorld: () => {
        set((prev) => {
			setLocalStorage('cubes', prev.cubes)
		})
     },
    resetWorld: () => {}
}));