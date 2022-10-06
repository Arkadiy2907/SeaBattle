import Block from '../../core/Block';
import { router } from '../..';
import store from '../../store';
import authController from '../../controllers/authController';
import chatController from '../../controllers/chatController';
import ButtonBlue from '../button';
import Input from '../input';
import Link from '../link';
import Message from '../message';
import tpl from './tpl.hbs';

export interface IMessageProps {
	avatar?: string;
	title?: string;
	created_by?: number;
	last_message?: Record<string, any>;
	time?: Date;
	id: number;
	unread_count?: number;
}

export default class MessageAside extends Block {
    public constructor(props: Record<string, any> = {}) {
        const signOut = new Link({
            value: 'выход из профиля',
            events: {
                click: (e) => {
                    e.preventDefault();
                    authController.logOut();
                    router.go('/login');
                },
            },
        });

        const inProfile = new Link({
            value: 'профиль',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/profile');
                },
            },
        });

        const inputSearchChat = new Input({
            name: 'search',
            class: 'search',
            type: 'text',
            placeholder: 'поиск чата',
        });

        const buttonBlue = new ButtonBlue({
            value: 'создать чат',
            events: {
                click: (event) => {
                    event.preventDefault();
                    createNewChat();
                },
            },
        });

        const nameNewChat = new Input({
            name: 'create',
            class: 'create',
            type: 'text',
            placeholder: 'новый чат',
        });

        const item = localStorage.getItem('chats');

        const chatList: any[] = [];

        if (item) {
            JSON.parse(item).forEach((element: IMessageProps) => {
                const { content } = element.last_message || {};
                const elemData = {
                    ...element,
                    last_message: content,
                };
                chatList.push(
                    new Message({
                        id: element.id,
                        title: element.title,
                        last_message: content,
                        events: {
                            click: async () => {
                                await openSelectedChat(elemData);
                            },
                        },
                    }),
                );
            });
        }

        super('div', {
            ...props,
            signOut,
            inProfile,
            inputSearchChat,
            buttonBlue,
            nameNewChat,
            chatList,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

async function createNewChat() {    
    const createChat = document.querySelector<HTMLInputElement>('.create');
    if (createChat) {
        const title = createChat!.value === '' ? 'новый чат без имени' : createChat!.value;
        await chatController.createChat({ title });
        router.go('/chooseChat');
    }
}

const openSelectedChat = async (elemData: IMessageProps) => {
    const { id } = elemData;
    store.changeState({ currentChat: id });

    const userData = localStorage.getItem('user');
    let user;
    if (userData) {
        user = JSON.parse(userData);
    }

    if (user) {
        await chatController.connectToChat(user.id, id);
    }

    router.go('/chooseChatActive');
};
