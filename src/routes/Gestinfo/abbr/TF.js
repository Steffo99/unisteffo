import React from "react";
import {LatexMath, Help} from "bluelib/lib/components";


export default function TF() {
    return (
        <Help text={"Term frequency, quanto un termine è frequente nel singolo documento"}><LatexMath>{`tf`}</LatexMath></Help>
    )
}

TF.propTypes = {}
