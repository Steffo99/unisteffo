import React from "react";
import {Help} from "bluelib/lib/components";
import LatexMath from "bluelib/lib/components/LatexMath";


export default function TF() {
    return (
        <Help text={"Term frequency, quanto un termine è frequente nel singolo documento"}><LatexMath>{`tf`}</LatexMath></Help>
    )
}

TF.propTypes = {}
