import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/TaiyoSugino">Taiyo Sugino</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/TaikiFujii">Taiki Fujii</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/RuuAkashi">Ruu Akashi</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/RyoKawagoe">Ryo Kawagoe</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/ShoInada">Sho Inada</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/HarutoShirouchi">Haruto Shirouchi</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/TaikiFujii">Taiki Fujii</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
