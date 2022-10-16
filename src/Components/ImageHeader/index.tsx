import * as React from "react";
import "./index.css";

interface ImageHeaderProps {
    children: JSX.Element;
    src: string;
    dark: number;
    style?: React.CSSProperties;
}

interface ImageHeaderState {}

class ImageHeader extends React.Component<ImageHeaderProps, ImageHeaderState> {
    render() {
        const {children, src, dark} = this.props;
        return (
            <div 
                className="background parallax inset" 
                style={{backgroundImage: `linear-gradient(rgba(0,0,0,${dark}), rgba(0,0,0,${dark})), url("${src}")`, ...this.props.style}}
            >
                <div className="center">{children}</div>
            </div>
        );
    }
}

export default ImageHeader;
