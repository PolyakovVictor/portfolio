import React from "react";

import s from "./Style/Header.module.css"

const Header = () => {
    return (
        <div className={s.main}>
            <div className={s.leftTopic}>
                <h1>Victor Poliakov</h1>
            </div>
            <div className={s.rightTopic}>
                <h1>profile</h1>
            </div>
        </div>
    )
}

export default Header;