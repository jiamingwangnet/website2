import * as React from 'react';
import "./index.css";

interface HeadingProps {
    style?:React.CSSProperties;
    subtitle?:string;
    children:string;
    size?:string;
    subsize?:string;
    substyle?:React.CSSProperties;
}
 
interface HeadingState {
    
}
 
class Heading extends React.Component<HeadingProps, HeadingState> {
    state = {  }
    render() { 
        const {style, subtitle, children, size, subsize, substyle} = this.props;
        return ( 
            <div style={{ width:"100%", textAlign:"center", ...style,}}>
                <h1 className='title' style={{fontSize: size}}>{children}</h1>
                <h2 className="subtitle" style={{fontSize: subsize, ...substyle,}}>{subtitle}</h2>
            </div>
        );
    }
}
 
export default Heading;