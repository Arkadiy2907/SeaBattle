export class Store {
    private state: Record<string, any> = {};

    public changeState(newValue: Record<string, any>, transform?: boolean) {
        Object.assign(this.state, newValue);
        const entries = Object.entries(newValue)[0];
        const key = entries[0];
        const value = !transform ? JSON.stringify(entries[1]) : entries[1];
        localStorage.setItem(key.toString(), value);
    }
}

export default Store;
