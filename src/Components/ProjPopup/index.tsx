import * as React from "react";
import LinkButton from "../LinkButton";
import "./index.css";

interface ProjPopupProps {
    open: boolean;
    title: string;
    body: React.ReactElement;
    backgroundImage?: string;
    link: string;
}

interface ProjPopupState {
    open: boolean;
}

class ProjPopup extends React.Component<ProjPopupProps, ProjPopupState> {
    state = {
        open: this.props.open,
    };
    render() {
        return (
            <div
                style={{
                    opacity: this.state.open ? "1" : "0",
                    visibility: this.state.open ? "visible" : "hidden",
                }}
                className="backdrop"
                onClick={e => {
                    this.setActive(false);
                }}
            >
                <div
                    className="popup"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${this.props.backgroundImage})`,
                        backgroundSize: "2000px",
                    }}
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <h1 style={{ fontWeight: "bold", marginBottom: "30px" }}>
                        {this.props.title}
                    </h1>
                    <button
                        className="closeBtn"
                        onClick={e => {
                            this.setActive(false);
                        }}
                    >
                        &#x2715;
                    </button>
                    <hr />
                    <div style={{ margin: "10px", height:"60%", overflowY:"scroll" }}>{this.props.body}</div>
                    <div className="play-display">
                        <LinkButton link={this.props.link}>Open</LinkButton>
                    </div>
                </div>
            </div>
        );
    }

    public setActive = (active: boolean): void => {
        this.setState({ open: active });
    };
}

export default ProjPopup;
