import { useEffect } from "react";

const useClickOutside = ({ ref, setDropDownVisibility }) => {
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setDropDownVisibility(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
    }, [ref]);
};
export default useClickOutside