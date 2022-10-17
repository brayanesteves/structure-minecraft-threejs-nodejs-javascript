import { useEffect, useState }                          from "react";
import { useKeyboard }                                  from "../hooks/useKeyboard";
import { useStore }                                     from "../hooks/useStore";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "../objects/images";

const images = {
	 dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	 wood: woodImg,
	  log: logImg,
}

export const TextureSelector = () => {
    const [visible, setVisible]         = useState(false);
    const [activateTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
    const { 
            dirt,
            grass,
            glass,
            wood,
            log 
        }                       = useKeyboard();

    

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log 
        }; 
        const pressedTexture = Object.entries(textures).find(([k, v]) => v);
        if(pressedTexture) {
            //console.log('Pressed', pressedTexture);
            setTexture(pressedTexture[0]);
        }
    }, [setTexture, dirt, grass, glass, wood, log]);

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false);
        }, 200);
        setVisible(true);

        return () => {
            clearTimeout(visibilityTimeout);
        };
    }, [activateTexture]);

    return visible && (
        <div className='absolute centered texture-selector'>
            { Object.entries(images).map(([k, src]) => {
                return (
                    <img alt={k} key={k} src={src} className={`${k === activateTexture ? 'activate' : ''}`} />
                );
            }) }
        </div>
    );
};