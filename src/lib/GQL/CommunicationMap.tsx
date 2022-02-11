import {gql, useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {
    RequestAllBoard,
    RequestCheckDuplicate,
    RequestGetBoardWrite, RequestMutationSetBoardWrite, RequestQueryContent,
    RequestQueryGetBoardDetail,
    RequestQueryGetBoardList, RequestQueryGetLogin,
    RequestQueryGetPopular, RequestSetBoardGood, RequestSetComment, RequestSetMember,
    ResponseData
} from "./GQLInterfaces";

export const useQueryForGetPopular = (variables : RequestQueryGetPopular) =>
    useQuery<ResponseData, RequestQueryGetPopular>(gql`
        query getPopular ($startDate: String, $endDate: String, $limit: Int) {
            getPopular (startDate: $startDate, endDate: $endDate, limit: $limit) {
                rank
                word
            }
        }    
    `, {
        variables: variables,
        notifyOnNetworkStatusChange:true
    })


export const useQueryForGetBoardList = (variables : RequestQueryGetBoardList) => useQuery<ResponseData, RequestQueryGetBoardList>(gql`
query getBoardList ($session: String, $bo_table: String!, $page: Int, $noticeAbove: Boolean, $sort: String, $search: BoardSearchInput, $limit: Int) {
    getBoardList (session: $session, bo_table: $bo_table, page: $page, noticeAbove: $noticeAbove, sort: $sort, search: $search, limit: $limit) {
        boardData {
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
`, {
    variables: variables,
    notifyOnNetworkStatusChange:true
})

export const useLQueryForGetBoardDetail = () => useLazyQuery<ResponseData, RequestQueryGetBoardDetail>(gql`
query getBoardDetail ($bo_table: String!, $wr_id: String!, $commentFrom: Int, $commentLimit: Int, $addView: Boolean, $session: String) {
    getBoardDetail (bo_table: $bo_table, wr_id: $wr_id, commentFrom: $commentFrom, commentLimit: $commentLimit, addView: $addView, session: $session) {
        mb_id
        ca_name
        wr_id
        wr_name
        hit
        selectedGood
        comment {
            wr_id
            wr_parent
            depth
            mb_id
            wr_name
            content
            datetime
        }
        optionNotice
        optionHTML
        bo_use_nogood
        bo_use_good
        subject
        content
        datetime
        prevWrite {
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
        nextWrite {
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
}
`)

export const useQueryForGetBoardWrite = (variables : RequestGetBoardWrite) =>
    useQuery<ResponseData, RequestGetBoardWrite>(gql`
    query getBoardWrite ($session: String, $bo_table: String!, $wr_id: String) {
    getBoardWrite (session: $session, bo_table: $bo_table, wr_id: $wr_id) {
        boardData {
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
        }
        boardInfo {
            mb_id
            ca_name
            wr_id
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
        }
    }
}
    `, {
        notifyOnNetworkStatusChange: true,
        variables: variables
    })

export const useLQueryForLogin = () => useLazyQuery<ResponseData,  RequestQueryGetLogin>
(gql`query login ($mb_id: String, $mb_password: String) {
    login (mb_id: $mb_id, mb_password: $mb_password)
}`,{
    refetchWritePolicy : "overwrite",
});

export const useQueryForContent = (variables : RequestQueryContent) => useQuery<ResponseData,  RequestQueryContent>
(gql`query getContent ($co_id: String) {
    getContent (co_id: $co_id)
}`,{variables: variables});

export const useMutationForSetMember = () => useMutation<ResponseData, RequestSetMember>(
    gql`mutation setMember ($session: String, $mb_id: String, $mb_name: String, $mb_nick: String, $mb_password: String, $mb_email: String, $mb_zip: String, $mb_addr1: String, $mb_addr2: String, $mb_addr3: String, $mb_dupinfo: String, $mb_hp: String, $mb_sex: String, $mb_birth: String, $mb_sms: Boolean, $mb_open: Boolean, $mb_1: String, $mb_2: String, $mb_3: String, $mb_4: String, $mb_5: String, $mb_6: String, $mb_7: String, $mb_8: String, $mb_9: String, $mb_img: String) {
    setMember (session: $session, mb_id: $mb_id, mb_name: $mb_name, mb_nick: $mb_nick, mb_password: $mb_password, mb_email: $mb_email, mb_zip: $mb_zip, mb_addr1: $mb_addr1, mb_addr2: $mb_addr2, mb_addr3: $mb_addr3, mb_dupinfo: $mb_dupinfo, mb_hp: $mb_hp, mb_sex: $mb_sex, mb_birth: $mb_birth, mb_sms: $mb_sms, mb_open: $mb_open, mb_1: $mb_1, mb_2: $mb_2, mb_3: $mb_3, mb_4: $mb_4, mb_5: $mb_5, mb_6: $mb_6, mb_7: $mb_7, mb_8: $mb_8, mb_9: $mb_9, mb_img: $mb_img)
}`)

export const useQueryForCheckDuplicate = () => useLazyQuery<ResponseData, RequestCheckDuplicate>(gql`query checkDuplicate ($mb_id: String, $mb_email: String, $mb_nick: String, $session: String) {
    checkDuplicate (mb_id: $mb_id, mb_email: $mb_email, mb_nick: $mb_nick, session: $session)
}`)

export const useMutationSetBoardWrite = () => useMutation<ResponseData, RequestMutationSetBoardWrite>(
    gql`mutation setBoardWrite ($session: String, $token: String!, $isDelete: Boolean, $bo_table: String!, $wr_id: Int, $password: String, $wr_name: String, $capcha: String, $category: String, $subject: String, $content: String, $wr_1: String, $wr_2: String, $wr_3: String, $wr_4: String, $wr_5: String, $wr_6: String, $wr_7: String, $wr_8: String, $wr_9: String, $wr_10: String, $files: [BoardFileInput], $deleteFiles: [Int]) {
    setBoardWrite (session: $session, token: $token, isDelete: $isDelete, bo_table: $bo_table, wr_id: $wr_id, password: $password, wr_name: $wr_name, capcha: $capcha, category: $category, subject: $subject, content: $content, wr_1: $wr_1, wr_2: $wr_2, wr_3: $wr_3, wr_4: $wr_4, wr_5: $wr_5, wr_6: $wr_6, wr_7: $wr_7, wr_8: $wr_8, wr_9: $wr_9, wr_10: $wr_10, files: $files, deleteFiles: $deleteFiles)
}`
)

export const useLQueryForGetMe = () => useLazyQuery<ResponseData, {session: string}>(gql`
query getMe ($session: String!) {
    getMe (session: $session) {
        mb_id
        mb_name
        mb_nick
        mb_email
        mb_zip
        mb_addr1
        mb_addr2
        mb_addr3
        mb_dupinfo
        mb_hp
        mb_sex
        mb_birth
        mb_sms
        mb_open
        mb_point
        mb_1
        mb_2
        mb_3
        mb_4
        mb_5
        mb_6
        mb_7
        mb_8
        mb_9
        sns
        mb_img
    }
}`)

export const useMutationForSetComment = () => useMutation<ResponseData, RequestSetComment>(gql`
mutation setComment ($session: String, $isDelete: Boolean, $bo_table: String!, $token: String!, $wr_parent: Int!, $wr_id: Int, $password: String, $wr_name: String, $capcha: String, $content: String, $wr_1: String, $wr_2: String, $wr_3: String, $wr_4: String, $wr_5: String, $wr_6: String, $wr_7: String, $wr_8: String, $wr_9: String, $wr_10: String) {
    setComment (session: $session, isDelete: $isDelete, bo_table: $bo_table, token: $token, wr_parent: $wr_parent, wr_id: $wr_id, password: $password, wr_name: $wr_name, capcha: $capcha, content: $content, wr_1: $wr_1, wr_2: $wr_2, wr_3: $wr_3, wr_4: $wr_4, wr_5: $wr_5, wr_6: $wr_6, wr_7: $wr_7, wr_8: $wr_8, wr_9: $wr_9, wr_10: $wr_10)
}
`)


export const useLQueryForGetBoardDetailComment = () => useLazyQuery<ResponseData, RequestQueryGetBoardDetail>(gql`
query getBoardDetail ($bo_table: String!, $wr_id: String!, $commentFrom: Int, $commentLimit: Int, $addView: Boolean) {
    getBoardDetail (bo_table: $bo_table, wr_id: $wr_id, commentFrom: $commentFrom, commentLimit: $commentLimit, addView: $addView) {
        mb_id
        ca_name
        wr_id
        wr_name
        hit
        comment {
            wr_id
            wr_parent
            depth
            mb_id
            wr_name
            content
            datetime
        }
        optionNotice
        optionHTML
        subject
        content
        datetime
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
        prevWrite {
            wr_num
            wr_id
            wr_reply
            mb_id
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
        }
        nextWrite {
            wr_num
            wr_id
            wr_reply
            mb_id
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
        }
    }
}
`)

export const useMutationForSetBoardGood = () => useMutation<ResponseData,RequestSetBoardGood>(gql`
mutation setBoardGood ($session: String!, $bo_table: String!, $wr_id: String!, $isCancel: Boolean, $isGood: Boolean) {
    setBoardGood (session: $session, bo_table: $bo_table, wr_id: $wr_id, isCancel: $isCancel, isGood: $isGood)
}
`)

export const useQueryForAllBoard = (variables : RequestAllBoard) => useQuery<ResponseData, RequestAllBoard>(gql`
query getAllBoard ($bo_table: String, $mb_id: String, $isComment: Boolean, $isBoard: Boolean) {
    getAllBoard (bo_table: $bo_table, mb_id: $mb_id, isComment: $isComment, isBoard: $isBoard) {
        data {
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
            boardInfo {
                mb_id
                ca_name
                wr_id
                wr_name
                hit
                comment {
                    wr_id
                    wr_parent
                    depth
                    mb_id
                    wr_name
                    content
                    datetime
                }
                optionNotice
                optionHTML
                bo_use_good
                bo_use_nogood
                subject
                content
                datetime
                prevWrite {
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
                nextWrite {
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
                selectedGood
            }
        }
        pageCount
    }
}
`)
