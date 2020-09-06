import AbstractItem from "./AbstractItem";
import ITEM_CONST from "../../constants/itemConstant";

class Painting extends AbstractItem {

    constructor(bddRow) {
        super(bddRow, ITEM_CONST.PAINTING.KEY);
    }

}
export default Painting;
