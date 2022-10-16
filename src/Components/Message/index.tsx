import * as React from "react";
import "./index.css";

interface MessageProps {
    name:string;
    time:string;
    date:string;
    message:string;
}

interface MessageState {}

class Message extends React.Component<MessageProps, MessageState> {
    state = {};
    render() {
        const {name, time, date, message} = this.props;

        return (
            <div className="message">
                <h2 style={{fontSize: "20px"}}>
                    <span
                        style={{
                            color: "#2585c9",
                            overflowWrap: "break-word",
                            zIndex: "1",
                        }}
                    >{name}&nbsp;</span>
                    at {time} {date}
                </h2>
                <p style={{padding:"5px", overflowWrap: "break-word", zIndex: "-1"}}>{message}</p>
            </div>
        );
    }
}

export default Message;
