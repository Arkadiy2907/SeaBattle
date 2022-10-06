import Block from '../../core/Block';
import { router } from '../..';
import store from '../../store';
import chatController from '../../controllers/chatController';
import ButtonBlue from '../../components/button';
import Input from '../../components/input';
import MessageAside from '../../components/messageAside';
import NoChoseChat from '../../components/noChoseChat';
import ChatOnline from '../../components/chatsOnline';
import tpl from './tpl.hbs';

export default class ChooseChat extends Block {
    public constructor(props: Record<string, any> = {}) {
        const messageAside = new MessageAside({});
        const noChoseChat = new NoChoseChat({
            value: 'Выберите чат чтобы отправить сообщение',
        });

        const currentChatId = localStorage.getItem('currentChat');

        const chatOnline = new ChatOnline({
            inputAddUser: new Input({
                name: 'addUser',
                type: 'text',
                class: 'inputAddUser',
                placeholder: 'имя пользователя',
            }),

            buttonAddUser: new ButtonBlue({
                value: 'добавить',
                events: {
                    click: (event) => {
                        event.preventDefault();
                        addUsersToChat(currentChatId || '')
                            .then((data) => {
                                if (data) {
                                    store.changeState({ ...data });
                                    router.go('/chooseChatActive');
                                }
                            })
                            .catch((error: any) => {
                                console.error(error);
                            });
                    },
                },
            }),

            inputDelUser: new Input({
                name: 'addUser',
                type: 'text',
                class: 'inputDelUser',
                placeholder: 'имя пользователя',
            }),

            buttonDelUser: new ButtonBlue({
                value: 'удалить',
                events: {
                    click: (event) => {
                        event.preventDefault();
                        deleteUsersFromChat(currentChatId || '')
                            .then((data) => {
                                if (data) {
                                    store.changeState({ ...data });
                                    router.go('/chooseChatActive');
                                }
                            })
                            .catch((error: any) => {
                                console.error(error);
                            });
                    },
                },
            }),

            buttonDelChat: new ButtonBlue({
                value: 'удалить чат',
                events: {
                    click: (event) => {
                        event.preventDefault();
                        deleteChat(currentChatId || '');
                        router.go('/chooseChat');
                    },
                },
            }),
        });

        const { pathname } = window.location;
        const chatContent = pathname === '/chooseChatActive'
            ? chatOnline
            : noChoseChat;



        super('div', {
            ...props,
            messageAside,
            chatContent,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

const addUsersToChat = async (chatId: string) => {
    const inputAddUser = document.querySelector<HTMLInputElement>('.inputAddUser');
    const users = inputAddUser!.value.split(',');
    if (inputAddUser?.value) {
        inputAddUser.value = '';
    }
    await chatController.addUser({ users, chatId: parseInt(chatId) });
    return { usersInChats: [{ id: chatId, users }] };
};

const deleteUsersFromChat = async (chatId: string) => {
    const inputDelUser = document.querySelector<HTMLInputElement>('.inputDelUser');
    const users = inputDelUser!.value.split(',');
    if (inputDelUser?.value) {
        inputDelUser.value = '';
    }
    await chatController.deleteUsers({ users, chatId: parseInt(chatId) });
    return { usersInChats: [{ id: chatId, users }] };
};

const deleteChat = async (chatId: string) => {
    await chatController.deleteChat(parseInt(chatId));
};