import chatApi from '../api/chatApi';
import store from '../store';

type TCreateChat = {
    title: string;
};

type TChatUser = {
    users: string[];
    chatId: number;
};

class ChatController {
    public async getChats() {
        try {
            await chatApi.get();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }

    public async createChat(data: TCreateChat) {
        try {
            await chatApi.createChat(data);
            await this.getAllChats();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }

    public async getAllChats() {
        let res;
        try {
            res = await chatApi.get();
        } catch (e: any) {
            res = e.reason;
        }
        if (res !== 'Not found') {
            localStorage.setItem('chats', JSON.stringify(res));
        }
        return res;
    }

    public async addUser(data: TChatUser) {
        try {
            await chatApi.addUser(data);
            console.log('add user');
            return { success: true };
        } catch (e: any) {
            alert(e.reason);
            return e.reason;
        }
    }

    public async deleteUsers(data: TChatUser) {
        try {
            await chatApi.deleteUsers(data);
            console.log('delete users');
            return { success: true };
        } catch (e: any) {
            alert(e.reason);
            return e.reason;
        }
    }

    public async getChatUsers(id: number) {
        try {
            const users: any = await chatApi.getChatUsers(id);
            const { token } = users || {};
            return token;
        } catch (e: any) {
            return e.reason;
        }
    }

    public async connectToChat(userId: number, chatId: number) {
        try {
            const tokenData = await this.getChatUsers(chatId);
            const token = tokenData || {};
            const params = { userId, chatId, token };
            store.changeState({ wsParams: params });
        } catch (e) {
            console.log(e);
        }
    }

    public async deleteChat(chatId: number) {
        try {
            await chatApi.deleteChat(chatId);
            await this.getAllChats();
        } catch (e) {
            console.log(e);
        }
    }
}

const chatController = new ChatController();

export default chatController;
