import s from "./NavBar.module.css";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const NavBar = ()=>{
    const {logout} = useContext(AuthContext)
    return(
        <div className={s.nav}>
            <div  className={s.navWrap}>
                <div className={s.logo}>logo</div>
                <div className={s.blocks}>
                    <div className={s.block} onClick={logout}>Выйти</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar