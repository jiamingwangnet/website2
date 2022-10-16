import * as React from 'react';
import {Link} from 'react-router-dom';
import Heading from '../Heading';
import "./index.css"

interface PreviewProps {
    image: string;
    title: string;
    subtitle?: string;
    link: string;
}
 
interface PreviewState {
    
}
 
class Preview extends React.Component<PreviewProps, PreviewState> {
    state = {}
    render() { 
        return (
            <div className="preview parallax inset" style={{backgroundImage: `url("${this.props.image}")`}}>
                <div className="text">
                    <Link to={this.props.link} className="clearAnchor header">
                        <Heading subtitle={this.props.subtitle} size="250%" subsize="80%" substyle={{transform:"translate(0px, -20px)"}}>{this.props.title}</Heading>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default Preview;