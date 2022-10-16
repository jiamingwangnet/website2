import * as React from 'react';

interface ErrorPageProps {
    
}
 
interface ErrorPageState {
    
}
 
class ErrorPage extends React.Component<ErrorPageProps, ErrorPageState> {
    state = { }

    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }

    render() { 
        return (
            <div style={{height: "80vh", display:"flex", alignItems: "center", textAlign: "center"}}>
                <div  style={{width: "100vw", textAlign: "center"}}>
                <h1 style={{fontSize: "100px"}}>404</h1>
                <p style={{ fontSize: "20px"}}>¯\_(ツ)_/¯</p>
                </div>
            </div>
        );
    }
}
 
export default ErrorPage;