import KEYS from "../keys";

export interface Message {
    message: string;
    date: string;
    month: string;
    year: string;
    hour: string;
    min: string;
    name: string;
}

export type DataType = "message" | "messageList";
export type SocketCallback = (type: DataType, content: any) => void;

export interface ResData {
    type: DataType;
    content: any;
}

let socket: WebSocket | undefined = undefined;
let hasConnected = false;

export function initWebSocket(onOpen: Function, onMessage: SocketCallback): void
{
    if(!hasConnected)
    {
        socket = new WebSocket(KEYS.CHAT_WEBSOCKET_URL);

        socket.addEventListener('open', event => {
            onOpen();
            hasConnected = true;
        });

        socket.addEventListener('message', event => {
            const data: ResData = JSON.parse(event.data);
            onMessage(data.type, data.content);
            console.log(event);
        });
    }
    else
    {
        onOpen();

        socket?.addEventListener('message', event => {
            const data: ResData = JSON.parse(event.data);
            onMessage(data.type, data.content);
            console.log(event);
        });
    }
}

export function endConnection(): void
{
    socket?.close();
}

export function fetchMessages(): void {
    socket?.send(
        JSON.stringify({
            action:"fetchmessages"
        })
    )
}

export function sendMessage(message: Message): void {
    socket?.send(
        JSON.stringify({
            action:"sendmessage",
            message:message
        })
    );
}
