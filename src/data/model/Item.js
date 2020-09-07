import ITEM_CONST from '../../constants/itemConstant';

class Item {
    constructor(bddRow, type) {
        this.properties = { ...bddRow };
        this.init(type);
        this.constDatas = ITEM_CONST[type];
    }

    init(type) {
        this.properties.type = type;
        this.createFilenames(type);
    }

    createFilenames(type) {
        let tab = [];
        if (type === ITEM_CONST.SCULPTURE.KEY) {
            let i;
            for (i = 1; i < 5; i++) {
                tab.push(`${this.properties.title}_${i}.jpg`);
            }
        } else {
            tab.push(`${this.properties.title}.jpg`);
        }
        this.properties.filenames = tab;
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

    getSMPath() {
        return this.properties.filenames.map(
            (filename) =>
                `${ITEM_CONST.LIBRARY_PATH}${this.constDatas.IMAGE.PATH_SM}${filename}`
        );
    }

    getMDPath() {
        return this.properties.filenames.map(
            (filename) =>
                `${ITEM_CONST.LIBRARY_PATH}${this.constDatas.IMAGE.PATH_MD}${filename}`
        );
    }

    getPath() {
        return this.properties.filenames.map(
            (filename) =>
                `${ITEM_CONST.LIBRARY_PATH}${this.constDatas.IMAGE.PATH}${filename}`
        );
    }

    getAlt() {
        return this.constDatas.IMAGE.ALT_IMAGE;
    }
}

export default Item;
