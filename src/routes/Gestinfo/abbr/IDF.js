import React from "react";
import {Help} from "bluelib/lib/components";
import LatexMath from "bluelib/lib/components/LatexMath";


export default function IDF() {
    return (
        <Help text={"Inverse document frequency, quanto un termine è raro all'interno della collezione di documenti"}><LatexMath>{`idf`}</LatexMath></Help>
    )
}

IDF.propTypes = {}
