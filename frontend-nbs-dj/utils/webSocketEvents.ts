// create a handler for the event type in the switch statement

export interface Message {
  type: string;
  payload: any;
}

const handleEvent = (message: Message, webSocket: WebSocket) => {
    switch (message.type) {
        case "id":
            
            break;
    }
}