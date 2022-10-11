import { Client } from '../core/HTTP';

type TCreateChat = {
    title: string;
};

type TChatUser = {
    users: string[];
    chatId: number;
};

const _http = new Client('/chats');

class ChatApi {
    get(): Promise<unknown> {
        return _http.get('/');
    }

    deleteChat(id: number): Promise<unknown> {
        return _http.delete('/', { chatId: id });
    }

    createChat(data: TCreateChat): Promise<unknown> {
        return _http.post('/', data);
    }

    addUser(data: TChatUser): Promise<unknown> {
        return _http.put('/users', data);
    }

    deleteUsers(data: TChatUser): Promise<unknown> {
        return _http.delete('/users', data);
    }

    getChatUsers(chatId: number = 0): Promise<unknown> {
        return _http.post(`/token/${chatId}`);
    }
}

const chatApi = new ChatApi();

export default chatApi;
