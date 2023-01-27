import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Message from "../../Components/Message"; 
import { fetchMessages, sendMessage, Message as MsgInter, initWebSocket, SocketCallback, DataType, endConnection } from '../../util/chat';
import "./index.css";

interface ChatPageProps {
    
}
 
interface ChatPageState {
    messages:MsgInter[];
}
 
class ChatPage extends React.Component<ChatPageProps, ChatPageState> {
    chatboxRef:React.RefObject<HTMLDivElement>;
    nameRef:React.RefObject<HTMLInputElement>;
    msgRef:React.RefObject<HTMLTextAreaElement>;
    constructor(props:ChatPageProps)
    {
        super(props);
        this.state = { 
            messages: [],
        }

        this.chatboxRef = React.createRef();

        this.nameRef = React.createRef();
        this.msgRef = React.createRef();
    }

    componentDidMount(): void {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });

        const username = window.localStorage.getItem("username");
        if(username)
        {
            this.nameRef.current!.value = username;
            this.nameRef.current!.disabled = true;
        }

        initWebSocket(fetchMessages, this.handleMessage);
    }

    render() { 
        return (
            <>
                <div style={{height:"100vh",marginTop: "80px", width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                    <div className="box" ref={this.chatboxRef}>
                        {this.state.messages.map((msg, index) => {
                            const {message, date, month, year, hour, min, name} = msg;
                            return <Message
                                message={message}
                                date={date + '/' + month + '/' + year}
                                time={hour + ':' + min}
                                name={name}
                                key={index}
                            />;
                        })}
                    </div>
                    <div className='ctrl'>
                        <input type="text" className='name' placeholder='Anonymous' ref={this.nameRef}/>
                        <textarea className="textbox" name="message" id="msg" rows={2} ref={this.msgRef}></textarea>
                        <button className="btn btn-primary send" onClick={this.sendMessage}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </div>
                </div>
            </>
        );
    }

    handleMessage = (type: DataType, content: any):void => {
        if(type === "message")
        {
            this.setState({messages: [...this.state.messages, content]}, () => {
                this.chatboxRef.current!.scrollTop = this.chatboxRef.current!.scrollHeight;
            });
        }
        else if(type === "messageList")
        {
            const msgRaw:MsgInter[] = content;
            this.setState({messages:msgRaw}, () => {
                this.chatboxRef.current!.scrollTop = this.chatboxRef.current!.scrollHeight;
            });
        }
    }

    sendMessage = () =>
    {
        const name = this.nameRef.current!;
        const msg = this.msgRef.current!;

        if(msg.value === null || msg.value === "") return;

        let username:string | null = window.localStorage.getItem("username");

        if(name.value !== "" && !username)
        {
            window.localStorage.setItem("username", name.value);
            username = name.value;
            name.disabled = true;
        }
        else if(name.value === "" && !username)
        {
            username = "Anonymous";
            name.disabled = true;
        }

        const date:Date = new Date();
        const addzero = (time:number) => (time < 10 ? '0' + time.toString() : time.toString()); 

        const res:MsgInter = {
            message: msg.value,
            date: date.getDate().toString(),
            month: (date.getMonth() + 1).toString(),
            year: date.getFullYear().toString(),
            hour: addzero(date.getHours()),
            min: addzero(date.getMinutes()),
            name: username!
        }

        msg.value = "";
        
        this.setState({messages: [...this.state.messages, res]}, () => {
            sendMessage(res);
            this.chatboxRef.current!.scrollTop = this.chatboxRef.current!.scrollHeight;
        });
    }
}
 
export default ChatPage;