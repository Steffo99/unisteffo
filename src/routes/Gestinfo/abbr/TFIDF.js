import React from "react";
import {Help} from "bluelib/lib/components";
import PropTypes from "prop-types";


export default function TFIDF() {
    return (
        <Help text={"Metodo per calcolare i pesi che moltiplica il peso tf per il peso idf."}>tf-idf</Help>
    )
}

TFIDF.propTypes = {}
