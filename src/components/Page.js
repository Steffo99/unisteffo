import React from "react";
import {Main} from "bluelib/lib/components";
import MainTitle from "./MainTitle";
import PropTypes from "prop-types";


export default function Page({children, subtitle}) {
    return (
        <div>
            <MainTitle subtitle={subtitle}/>
            <Main>
                {children}
            </Main>
        </div>
    )
}


Page.propTypes = {
    children: PropTypes.node,
    subtitle: PropTypes.node,
}