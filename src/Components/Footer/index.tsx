import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import * as React from 'react';
import "./index.css";

interface FooterProps {
    
}
 
interface FooterState {
    
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    state = {  }
    render() { 
        return (
            <footer className="footer">
                <br />
                <a href="https://github.com/jiamingwangnet" target="_blank" className="clearAnchor" rel="noreferrer noopener nofollow">
                    <FontAwesomeIcon icon={faGithub} className="icon"/>
                </a>
            </footer>
        );
    }
}
 
export default Footer;