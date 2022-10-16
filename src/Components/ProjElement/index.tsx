import * as React from "react";
import Tag from "../Tag";
import "./index.css";
import ProjPopup from "../ProjPopup";

interface ProjElementProps {
    image: string;
    heading: string;
    tags?: string[];
    popupTitle: string;
    popupBody: React.ReactElement;
    popupBackground?: string;
    link: string;
}

interface ProjElementState {}

class ProjElement extends React.Component<ProjElementProps, ProjElementState> {
    popupRef: React.RefObject<ProjPopup>;
    constructor(props:ProjElementProps)
    {
        super(props);
        this.state = {};
        this.popupRef = React.createRef();
    }
    render() {
        return (
            <>
                {/* displayed element */}
                <div
                    className="display"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${this.props.image})`,
                    }}
                >
                    <div /*style={{backdropFilter: "blur(5px)"}}*/ onClick={this.openPopup}>
                        <img
                            src={this.props.image}
                            className="imageHolder"
                            alt="game preview"
                        />
                        <div style={{ padding: "10px" }}>
                            <h1 className="heading">{this.props.heading}</h1>
                            <div>
                                {this.props.tags?.map((name) => (
                                    <Tag name={name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* popup */}
                <ProjPopup
                    open={false}
                    title={this.props.popupTitle}
                    body={this.props.popupBody}
                    backgroundImage={this.props.popupBackground}
                    ref={this.popupRef}
                    link={this.props.link}
                />
            </>
        );
    }

    private openPopup = ():void => {
        this.popupRef.current?.setActive(true);
    }
}

export default ProjElement;
