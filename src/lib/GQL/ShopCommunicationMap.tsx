import {gql, useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {ResponseData} from "./GQLInterfaces";
import {
    RequestCurrentDelivery,
    RequestGetShopDetail,
    RequestGetShopItems,
    RequestInsertCart,
    RequestSetOrder
} from "./ShopGQLInterface";

export const useQueryForShopCategories = () => useQuery<ResponseData>(gql`
query getShopCategories {
    getShopCategories {
        ca_id
        ca_name
    }
}
`,{notifyOnNetworkStatusChange:true})

export const useLQueryForGetShopItems = () => useLazyQuery<ResponseData, RequestGetShopItems>(
    gql`
        query getShopItems ($session: String, $search: ItemSearchInput, $sort: String, $limit: Int, $page: Int) {
            getShopItems (session: $session, search: $search, sort: $sort, limit: $limit, page: $page) {
                data {
                    it_id
                    it_name
                    it_explan
                    it_price
                    it_cust_price
                    it_use_cnt
                    it_use_avg
                    it_use
                    isWish
                    img {
                        url
                        thumb
                    }
                    options {
                        optionName
                        optionValue
                        optionType
                    }
                    availOption {
                        optionValue
                        io_price
                        io_qty
                        optionType
                    }
                }
                pageCount
            }
        }
    `
)

export const useLQueryForGetShopItemDetail = () => useLazyQuery<ResponseData, RequestGetShopDetail>(
    gql`
    query getShopItemDetail ($session: String, $it_id: String, $reviewPage: Int, $qnaPage: Int) {
    getShopItemDetail (session: $session, it_id: $it_id, reviewPage: $reviewPage, qnaPage: $qnaPage) {
        itemData {
            it_id
            it_name
            it_explan
            it_price
            it_cust_price
            it_use_cnt
            it_use_avg
            it_use
            isWish
            wishCount
            img {
                url
                thumb
            }
            options {
                optionName
                optionValue
                optionType
            }
            availOption {
                optionValue
                io_price
                io_qty
                optionType
            }
        }
        review {
            boardData {
                bo_table
                subject
                canWrite
                canReply
                canComment
                canUseHTML
                canUseLink
                readPoint
                writePoint
                commentPoint
                downloadPoint
                category
                bo_1
                bo_2
                bo_3
                bo_4
                bo_5
                bo_6
                bo_7
                bo_8
                bo_9
                bo_10
                bo_upload_count
                bo_use_good
                bo_use_nogood
            }
            boardList {
                wr_num
                wr_id
                wr_reply
                mb_id
                wr_name
                subject
                content
                file {
                    url
                    fileType
                    thumb
                    bf_id
                    bo_table
                    wr_id
                    fileName
                    downloadCount
                }
                datetime
                hit
                isSecret
                isNotice
                wr_1
                wr_2
                wr_3
                wr_4
                wr_5
                wr_6
                wr_7
                wr_8
                wr_9
                wr_10
                countGood
                countBad
            }
            pageCount
        }
        qna {
            boardData {
                bo_table
                subject
                canWrite
                canReply
                canComment
                canUseHTML
                canUseLink
                readPoint
                writePoint
                commentPoint
                downloadPoint
                category
                bo_1
                bo_2
                bo_3
                bo_4
                bo_5
                bo_6
                bo_7
                bo_8
                bo_9
                bo_10
                bo_upload_count
                bo_use_good
                bo_use_nogood
            }
            boardList {
                wr_num
                wr_id
                wr_reply
                mb_id
                wr_name
                subject
                content
                file {
                    url
                    fileType
                    thumb
                    bf_id
                    bo_table
                    wr_id
                    fileName
                    downloadCount
                }
                datetime
                hit
                isSecret
                isNotice
                wr_1
                wr_2
                wr_3
                wr_4
                wr_5
                wr_6
                wr_7
                wr_8
                wr_9
                wr_10
                countGood
                countBad
            }
            pageCount
        }
    }
}
    `
)

export const useMutationForInsertCart = () => useMutation<ResponseData,RequestInsertCart>(gql`
    mutation insertCart ($session: String, $it_id: String, $requireOptions: [MutationItemOptions], $addOptions: [MutationItemOptions], $qty: Int) {
        insertCart (session: $session, it_id: $it_id, addOptions: $addOptions ,requireOptions: $requireOptions, qty: $qty)
    }
`)

export const useLQueryForGetCart = () => useLazyQuery<ResponseData>(gql`
query getCart ($session: String, $cartIds: [Int], $isDirect: Boolean) {
    getCart (session: $session, cartIds: $cartIds, isDirect: $isDirect) {
        ct_id
        item {
            it_id
            it_name
            it_explan
            it_price
            it_cust_price
            it_use_cnt
            it_use_avg
            it_use
            isWish
            wishCount
            img {
                url
                thumb
            }
            options {
                optionName
                optionValue
                optionType
            }
            availOption {
                optionValue
                io_price
                io_qty
                optionType
            }
        }
        ct_status
        ct_price
        ct_point_use
        io_type
        options {
            optionName
            optionValue
        }
        ct_qty
        ct_time
        delivery_price
        od_id
        io_price
    }
}
`);


export const useLQueryForGetCurrentDeliery = () => useLazyQuery<ResponseData, RequestCurrentDelivery>(gql`
    query getCurrentSendCost ($session: String, $od_id: String) {
        getCurrentSendCost (session: $session, od_id: $od_id)
    }
`)

export const useMutationForSetCart = () => useMutation<ResponseData>(gql`
mutation setCart ($session: String, $ct_id: Int, $qty: Int, $options: [MutationItemOptions]) {
    setCart (session: $session, ct_id: $ct_id, qty: $qty, options: $options)
}
`)

export const useMutationForDeleteCart = () => useMutation<ResponseData>(gql`
mutation deleteCart ($session: String, $ct_id: [Int]) {
    deleteCart (session: $session, ct_id: $ct_id)
}
`)

export const useLQueryForGetDeliveryAddress = () => useLazyQuery<ResponseData>(gql`
query getDeliveryAddress ($session: String) {
    getDeliveryAddress (session: $session) {
        ad_subject
        ad_addr1
        ad_addr2
        ad_addr3
        ad_zip
        ad_hp
        ad_name
        isDefault
    }
}
`)

export const useMutationForSetOrder = () => useMutation<ResponseData, RequestSetOrder>(gql`
mutation setOrder ($session: String!, $ct_id: [Int]!, $memo: String!, $newDelivery: String, $orderAddr1: String, $orderAddr2: String, $orderAddr3: String, $orderZip: String, $orderMethod: String!, $orderHp: String, $orderName: String, $payed: Int!, $pg: String, $pgResultKey: String) {
    setOrder (session: $session, ct_id: $ct_id, memo: $memo, newDelivery: $newDelivery, orderAddr1: $orderAddr1, orderAddr2: $orderAddr2, orderAddr3: $orderAddr3, orderZip: $orderZip, orderMethod: $orderMethod, orderHp: $orderHp, orderName: $orderName, payed: $payed, pg: $pg, pgResultKey: $pgResultKey)
}
`)


export const useLQueryForGetOrderList = () => useLazyQuery<ResponseData>(gql`
query getOrder ($session: String, $search: OrderSearchInput) {
    getOrder (session: $session, search: $search) {
        data {
            od_id
            items {
                ct_id
                item {
                    it_id
                    it_name
                    it_explan
                    it_price
                    it_cust_price
                    it_use_cnt
                    it_use_avg
                    it_use
                    isWish
                    wishCount
                    img {
                        url
                        thumb
                    }
                    options {
                        optionName
                        optionValue
                        optionType
                    }
                    availOption {
                        optionValue
                        io_price
                        io_qty
                        optionType
                    }
                }
                ct_status
                ct_price
                ct_point_use
                io_type
                options {
                    optionName
                    optionValue
                }
                ct_qty
                ct_time
                delivery_price
                od_id
                io_price
            }
            mb_id
            od_b_name
            od_b_hp
            od_b_zip
            od_b_addr1
            od_b_addr2
            od_b_addr3
            od_cart_price
            od_send_cost
            od_status
            od_misu
            od_settle_case
        }
        pageCount
    }
}
`)

export const useLQueryForOrderDetail = () => useLazyQuery<ResponseData, {session: string, od_id: string}>(gql`
query getOrderDetail ($session: String!, $od_id: String!) {
    getOrderDetail (session: $session, od_id: $od_id) {
        reviews {
            wr_num
            wr_id
            wr_reply
            mb_id
            wr_name
            subject
            content
            file {
                url
                fileType
                thumb
                bf_id
                bo_table
                wr_id
                fileName
                downloadCount
            }
            datetime
            hit
            isSecret
            isNotice
            wr_1
            wr_2
            wr_3
            wr_4
            wr_5
            wr_6
            wr_7
            wr_8
            wr_9
            wr_10
            countGood
            countBad
        }
        orderData {
            od_id
            items {
                ct_id
                item {
                    it_id
                    it_name
                    it_explan
                    it_price
                    it_cust_price
                    it_use_cnt
                    it_use_avg
                    it_use
                    isWish
                    wishCount
                    img {
                        url
                        thumb
                    }
                    options {
                        optionName
                        optionValue
                        optionType
                    }
                    availOption {
                        optionValue
                        io_price
                        io_qty
                        optionType
                    }
                }
                ct_status
                ct_price
                ct_point_use
                io_type
                options {
                    optionName
                    optionValue
                }
                ct_qty
                ct_time
                delivery_price
                od_id
                io_price
            }
            mb_id
            od_b_name
            od_b_hp
            od_b_zip
            od_b_addr1
            od_b_addr2
            od_b_addr3
            od_cart_price
            od_send_cost
            od_status
            od_misu
            od_settle_case
        }
    }
}
`)
