import React, {useContext, useEffect} from "react";
import ContextSetSubtitle from "../contexts/ContextSetSubtitle";


export default function useSubtitle(node) {
    const setSubtitle = useContext(ContextSetSubtitle);

    useEffect(() => {
        setSubtitle(node);
    }, [])
}
