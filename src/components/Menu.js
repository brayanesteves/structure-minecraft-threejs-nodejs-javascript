import { useStore } from "../hooks/useStore";

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld]);
    return (
        <>
            <div className="menu absolute">
                <button onClick={() => saveWorld()}  className="">Save</button>
                <button onClick={() => resetWorld()} className="">Reset</button>
            </div>   
        </>
    );
};