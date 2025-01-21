import { Spin } from "antd";
import React from "react";
import './style.css'

const CustomLoader = () => {
    return (
        <div className="loaderCss">
            <Spin size="large" fullscreen />
        </div>
    );
};

export default CustomLoader;
