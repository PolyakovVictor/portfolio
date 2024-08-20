import React from "react";

import s from "./Style/Header.module.css"

const Header = () => {
    return (
        <div className={s.main}>
            <div className={s.leftTopic}>
                <h1>left Header</h1>
            </div>
            <div className={s.rightTopic}>
                <h1>right Header</h1>
            </div>
        </div>
    )   
}

export default Header;