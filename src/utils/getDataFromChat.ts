import { IMessageProps } from "../components/messageAside";

export const getValueOnCurrentChat = (
    currentChatId: string,
    localStorageKey: string,
    valueKey: string,
): string | string[] => {
    let value: string | string[] = valueKey === 'users' ? [] : '';
    const item = localStorage.getItem(localStorageKey);
    let chats;
    if (item) {
        chats = JSON.parse(item);
    }

    if (currentChatId && chats) {
        const currentChat = chats.filter(
            (chat: IMessageProps) => chat.id.toString() === currentChatId,
        );
        if (currentChat.length > 0) {
            const firstElem = 0;
            value = currentChat[firstElem][valueKey];
        }
    }

    return value;
};

