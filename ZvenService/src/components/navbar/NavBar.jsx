import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const NavBar = () => {
    return (
        <div className="navbar">
            {/*Sidebar*/}
            <Sidebar />
            <div className="wrapper">
            <motion.span 
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.5}}>Zven Service</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/ZvenWeb"><img src="facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/zven.service"><img src="instagram.png" alt="" /></a>
                <a href="https://x.com/zphen2"><img src="twitter.png" alt="" /></a>
                <a href="https://github.com/BigZaddy0"><img src="github.png" alt="" /></a>
            </div>
            </div>
        </div>
    )
}
export default NavBar