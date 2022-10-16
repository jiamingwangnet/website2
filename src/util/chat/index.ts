export interface Message {
    message: string;
    date: string;
    month: string;
    year: string;
    hour: string;
    min: string;
    name: string;
}

interface DataObj {
    operation: string;
    data: object;
}

const URL: string =
    "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction";

export async function getMessages(): Promise<Message[]> {
    return new Promise<Message[]>((resolve, reject) => {
        const data: DataObj = {
            operation: "query",
            data: {
                id: "1",
            },
        };

        const xhr = new XMLHttpRequest();

        xhr.open("POST", URL, true);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const res: Message[] = [];
                const messages:Message[] = JSON.parse(xhr.responseText).data.Item.messages;
                for(let i = 0; i < messages.length; i++)
                {
                    res.push(messages[i]);
                }

                resolve(res);
            }
        }; 
        xhr.send(JSON.stringify(data));
    });
}

export async function updateMessages(messages: Message[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const data: DataObj = {
            operation: "update",
            data: {
                id: "1",
                messages: messages
            },
        };

        const xhr = new XMLHttpRequest();

        xhr.open("POST", URL, true);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve();
            }
        }; 
        xhr.send(JSON.stringify(data));
    });
}
