import Block from '../../core/Block';
import createSocket from '../../controllers/socketController';
import { getValueOnCurrentChat } from '../../utils/getDataFromChat';
import { getDate, getTime } from '../../utils/changeTime';
import BtnSendMessage from '../btnSendMessage';
import tpl from './tpl.hbs';

export default class ChatOnline extends Block {
    public constructor(props: Record<string, any> = {}) {
        const currentChatId = localStorage.getItem('currentChat');

        let wsParams;
        let wsParamsString;
        let socket: WebSocket;

        const { pathname } = window.location;
        if (pathname === '/chooseChatActive') {
            wsParamsString = localStorage.getItem('wsParams');
            if (wsParamsString) {
                wsParams = JSON.parse(wsParamsString);
            }
            socket = createSocket(wsParams, handleMessages);

            openMessagesSocket(socket);
        }

        const sendMessge = new BtnSendMessage({
            events: {
                click: (event) => {
                    event.preventDefault();
                    sendMessage(socket);
                },
            },
        });

        super('div', {
            ...props,
            chatTitle: getValueOnCurrentChat(currentChatId || '', 'chats', 'title'),
            login: getLogin(),
            sendMessge,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

const getLogin = () => {
    try {
        const { login } = JSON.parse(localStorage.getItem('user')!);
        return login;
    } catch (e) {
        console.log('не валидный login');
    }
};

const sendMessage = (socket: WebSocket) => {
    const messageInput = document.querySelector<HTMLFormElement>('.message');
    const message = {
        content: messageInput!.value,
        type: 'message',
    };
    socket.send(JSON.stringify(message));
    messageInput!.value = '';
};

const handleMessages = (messages: Record<string, any> | Record<string, any>[]) => {
    const dataMessage = document.getElementById('data__Message');
    const isMessagesArray = messages instanceof Array;

    const timeAllMessage = document.createElement('time');
    timeAllMessage.className = 'headerTime';

    if (isMessagesArray) {
        timeAllMessage.textContent = getDate(new Date(messages[0]?.time));
    } else {
        timeAllMessage.textContent = getDate(new Date(messages?.time));
    }

    const headerTime = document.querySelector('.headerTime');

    if (headerTime) {
        timeAllMessage.textContent = '';
    }

    dataMessage!.appendChild(timeAllMessage);

    const { id } = JSON.parse(localStorage.getItem('user')!);

    const addMessage = (elem: Record<string, any>) => {
        if (elem) {
            const container = id === elem.user_id
                ? document.getElementById('my__messages')
                : document.getElementById('otherUser_messages');

            const textMessage = document.createElement('div');
            textMessage.className = 'textMessage';
            textMessage.textContent = elem.content;

            const timeMessage = document.createElement('time');
            timeMessage.className = 'time';
            timeMessage.textContent = getTime(new Date(elem?.time));
            textMessage.appendChild(timeMessage);

            const { pathname } = window.location;
            if (pathname === '/chooseChatActive') {
                container!.appendChild(textMessage);
            }
        }
    };

    if (isMessagesArray) {
        messages.reverse().forEach((el: Record<string, any>) => addMessage(el));
    } else {
        addMessage(messages);
    }
};

const openMessagesSocket = (socket: WebSocket) => {
    socket.addEventListener('open', () => {
        socket.send(
            JSON.stringify({
                content: '0',
                type: 'get old',
            }),
        );
    });
};
