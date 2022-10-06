type TWebSocket = {
    userId: number;
    chatId: number;
    token: string;
};

export default function createSocket(
    params: TWebSocket,
    onMessageFunc?: (data: Record<string, any>) => void,
) {
    const { userId, chatId, token } = params;

    const socket = new WebSocket(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
    );

    socket.addEventListener('open', () => {
        console.log('Соединение установлено');
    });

    socket.addEventListener('message', (event) => {
        const { data } = event;

        if (onMessageFunc && data) {
            try {
                onMessageFunc(JSON.parse(data));
            } catch (e: any) {
                console.error(e);
            }
        }
    });

    socket.addEventListener('close', (event) => {
        const { wasClean, code } = event;
        let { reason } = event;

        console.log(wasClean ? 'Соединение закрыто чисто' : 'Соединение прервано');

        if (code === 1006) {
            reason = 'Закрытие соединения из-за отсутствия активности';
        }

        console.log(`Код: ${code} | Причина: ${reason}`);
    });

    socket.addEventListener('error', (event: any) => {
        console.log('Ошибка', event.message);
    });

    return socket;
}
