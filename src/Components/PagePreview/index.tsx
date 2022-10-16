import * as React from 'react';
import "./index.css";

interface PagePreviewProps {
    children: JSX.Element[];
}
 
interface PagePreviewState {
    
}
 
class PagePreview extends React.Component<PagePreviewProps, PagePreviewState> {
    state = { }
    render() { 
        return (
            <div className="pagePreview">
                {this.props.children}
            </div>
        );
    }
}
 
export default PagePreview;