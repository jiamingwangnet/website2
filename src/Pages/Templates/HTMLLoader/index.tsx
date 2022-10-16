import * as React from 'react';
import Helmet from 'react-helmet';

interface HTMLLoaderProps {
    title: string;
    src: string;
}
 
interface HTMLLoaderState {
    
}
 
class HTMLLoader extends React.Component<HTMLLoaderProps, HTMLLoaderState> {
    state = { };

    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }

    render() { 
        return (
            <>
                <Helmet>
                    <title>{this.props.title} - Jiaming Wang</title>
                </Helmet>
                <iframe title={this.props.title} src={this.props.src} frameBorder="0" style={{width: "100vw", height: "100vh", maxWidth:"100%", margin: "0", padding: "0"}}></iframe>
            </>
        );
    }
}
 
export default HTMLLoader;