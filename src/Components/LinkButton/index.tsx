import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface LinkButtonProps {
    children: string;
    link: string;
    target?: string;
}

interface LinkButtonState {}

class LinkButton extends React.Component<LinkButtonProps, LinkButtonState> {
    state = {};
    render() {
        return (
            <Link
                to={this.props.link}
                target={this.props.target}
                className="clearAnchor link"
                style={{ width: "4000px" }}
            >
                <div className="btn btn-primary" style={{ width: "40%" }}>
                    {this.props.children}
                </div>
            </Link>
        );
    }
}

export default LinkButton;
