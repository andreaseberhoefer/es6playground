export default class Sum {
    constructor(...items) {
        this.items = items;
    }

    sum() {
        let result = 0;
        this.items.forEach((item) => result+=item);
        return result;
    }
};
