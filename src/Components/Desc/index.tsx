import * as React from "react";
import "./index.css"

interface DescProps {
    title: string;
    children: string | JSX.Element;
    center?: boolean;
}

interface DescState {}

class Desc extends React.Component<DescProps, DescState> {
    state = {};
    render() {
        return (
            <div className="desc" style={{textAlign: this.props.center ? "center" : "initial"}}>
                <h2 className="titleLarge">{this.props.title}</h2>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Desc;
