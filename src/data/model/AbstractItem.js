import ITEM_CONST from "../../constants/itemConstant";

class AbstractItem {
    #id;
    #type;
    #isSculpture;
    #constDatas;
    #title;
    #date;
    #technique;
    #description;
    #height;
    #width;
    #length;

    constructor(bddRow, type) {
        if (this.constructor === AbstractItem) {
            throw new TypeError('Abstract class "AbstractItem" cannot be instantiated directly');
        }
        this.properties = {...bddRow};
        this.#constDatas = ITEM_CONST[type];
    }


    get(name) {
        if (!this.has(name)) {
            throw new Error(`Property ${name} not found`);
        }
        return this.properties[name];
    }

    has(name) {
        return name in this.properties;
    }

    getFileName() {
        return `${this.properties.title}.jpg`;
    }

    getSMPath() {
        return `${ITEM_CONST.LIBRARY_PATH}${this.#constDatas.IMAGE.PATH_SM}${this.getFileName()}`;
    }

    getItemParticular() {
        throw new Error('You must implement this function');
    }
}

export default AbstractItem;
