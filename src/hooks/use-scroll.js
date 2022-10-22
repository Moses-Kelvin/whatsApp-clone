import { useCallback, useState } from "react";

const useScroll = () => {
    const [hovering, setHovering] = useState(false);

    const handleMouseOver = useCallback(() => {
        setHovering(true);
    }, []);

    const handleMouseOut = useCallback(() => {
        setHovering(false)
    }, []);

    return {hovering, handleMouseOut, handleMouseOver}
}

export default useScroll;