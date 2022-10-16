import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import icon from "../../assets/images/icon.png";

interface NavBarProps {
    titleHeight: number;
}

interface NavBarState {
    bgcolor: string;
}

class NavBar extends React.Component<NavBarProps, NavBarState> {
    background: string;
    constructor(props: NavBarProps)
    {
        super(props);
        this.background = "#131518";
        this.state = { bgcolor: "#00000000" };
    }

    render(): JSX.Element {
        return (
            <nav className="navigation fixed-top navbar navbar-expand-lg navbar-dark" style={{backgroundColor: this.state.bgcolor}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={icon} alt="icon" width="30" height="30" style={{ marginRight: 10 }} className="d-inline-block align-text-top" />
                        Jiaming Wang
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collpase navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink to="/" className={({isActive}) => "nav-link" + (isActive ? " active" : "")} end>Home</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/games" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Games</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/projects" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Projects</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/chat" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Chat</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    componentDidMount()
    {
        window.addEventListener("scroll", e => {
            this.setBackGround();
        });
    }

    setBackGround():void
    {
        if(window.scrollY < this.props.titleHeight - 25)
        {
            this.setState({bgcolor: "#00000000"});
        }
        else
        {
            this.setState({bgcolor: this.background});
        }
    }
}

export default NavBar;