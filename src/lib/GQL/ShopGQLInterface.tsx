import {ResponseQueryGetBoardList, ResponseQueryGetBoardListBoardList} from "./GQLInterfaces";

export interface ResponseGetQueryGetShopCategories {
    ca_id: number;
    ca_name: string;
}

export interface RequestItemSearchInput {
    ca_id?: number;
    itemName?: string;
    saleBelow?: number;
    saleUpper?: number;
    priceBelow?: number;
    priceUpper?: number;
    it_1?: string;
    it_2?: string;
    it_3?: string;
    it_4?: string;
    it_5?: string;
    it_6?: string;
    it_7?: string;
    it_8?: string;
    it_9?: string;
    it_10?: string;
}

export interface ResponseShopImages {
    url: string;
    thumb: string;
}

export interface ResponseItemOptions {
    optionName: string
    optionValue: string[]
    optionType: string
}

interface ResponseAvailOptions {
    optionValue: string[]
    io_price: number
    io_qty: number
    optionType: string
}

export interface ResponseShopItems {
    it_id : string;
    it_name: string;
    it_explan : string;
    it_price: number;
    it_cust_price : number;
    it_use_cnt : number;
    it_use_avg : number;
    it_use : boolean;
    isWish: boolean;
    img : ResponseShopImages[];
    options: ResponseItemOptions[]
    availOption: ResponseAvailOptions[]
}

export interface ResponseGetShopItems {
    data : ResponseShopItems[];
    pageCount: number;
}
export interface RequestGetShopItems {
    session?: string;
    search?: RequestItemSearchInput
    sort?: string;
    limit?: number;
    page?: number;
}
export interface RequestGetShopDetail {
    session? : string;
    it_id: string;
    reviewPage? : number
    qnaPage? : number
}

export interface ResponseItemDetail {
    itemData : ResponseShopItems,
    review: ResponseQueryGetBoardList,
    qna: ResponseQueryGetBoardList
}

export interface RequestItemOptions {
    optionValue: string;
    optionName: string;
}

export interface RequestInsertCart {
    session: string;
    it_id: string;
    addOptions: RequestItemOptions[];
    requireOptions: RequestItemOptions[];
    qty: number;
}
export interface ResponseCart {
    ct_id: number;
    item : ResponseShopItems;
    ct_status : string;
    ct_price: number;
    ct_point_use: number;
    io_type : number;
    options: ResponseItemOptions[];
    ct_qty: number;
    ct_time: string;
    delivery_price : number;
    od_id: string;
    io_price: number;
}

export interface RequestCurrentDelivery {
    session: string;
    od_id: string;
}

export interface RequestSetOrder {
    session: string;
    ct_id : number[];
    orderMethod: OrderMethod;
    newDelivery? : string;
    orderName: string;
    orderHp: string;
    orderZip: string;
    orderAddr1 : string;
    orderAddr2 : string;
    orderAddr3 : string;
    memo : string;
    pg: string;
    payed: number;
    pgResultKey? : string;
}
export type OrderMethod = 'MO' | 'Card';

export interface RequestSetCart {
    session: string;
    ct_id : number;
    qty: number;
    options? : RequestItemOptions[]
}

export interface ResponseDeliveryAddress {
    ad_subject: string;
    ad_addr1: string;
    ad_addr2: string;
    ad_addr3: string;
    ad_zip: string;
    ad_hp: string;
    ad_name: string;
    isDefault: boolean;
}

export interface ResponseOrderList {
    od_id: string;
    items : ResponseCart[];
    mb_id: string;
    od_name: string;
    od_b_name: string;
    od_b_hp: string;
    od_b_zip: string;
    od_b_addr1: string;
    od_b_addr2: string;
    od_b_addr3: string;
    od_cart_price: number;
    od_send_cost: number;
    od_status: string;
    od_misu: string;
    od_settle_case: string;
}

interface ResponseOrderData {
    pageCount: number;
    data : ResponseOrderList[]
}

interface ResponseOrderDetail {
    reviews : ResponseQueryGetBoardListBoardList[]
    orderData: ResponseOrderList
}

export interface ResponseShopData {
    getShopCategories: ResponseGetQueryGetShopCategories[];
    getShopItems: ResponseGetShopItems;
    getShopItemDetail: ResponseItemDetail;
    getCart : ResponseCart[];
    getDeliveryAddress : ResponseDeliveryAddress[];
    getOrder : ResponseOrderData
    getOrderDetail : ResponseOrderDetail
}

export interface InputOrderSearchList {
    status?: string;
    startDate? : string;
    endDate?: string;
}

export interface RequestOrderList {
    session: string;
    search? : InputOrderSearchList
}
