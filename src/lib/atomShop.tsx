import {atom} from "recoil";
import {ResponseCart} from "./GQL/ShopGQLInterface";

export const __recentItemView = atom({
    key : "recentItemView",
    default: []
})
