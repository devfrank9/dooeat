import {ResponseMe, ResponseMineExpert, ResponseQueryGetBoardList} from "../lib/GQL/GQLInterfaces";
import profile1 from "./Image/profile1.png"
import profile2 from "./Image/profile2.png"
import food1 from "./Image/food1.jpg"
import food2 from "./Image/food2.png"
import food3 from "./Image/food3.png"
import food4 from "./Image/food4.png"
import food5 from "./Image/food5.png"
import resizeFood1 from "./Image/resize_food1.png"
import resizeFood2 from "./Image/resize_food2.png"
import resizeFood3 from "./Image/resize_food3.png"
import resizeFood4 from "./Image/resize_food4.png"
import resizeFood5 from "./Image/resize_food5.png"
import trophy1 from "./Image/trophy1.png"
import trophy2 from "./Image/trophy2.png"
import resizeTrophy1 from "./Image/resize_trophy1.png"
import resizeTrophy2 from "./Image/resize_trophy2.png"

export const Zone1 = {
    getZone : ["서울시","경기도","인천시","마산시","경상북도","경상남도","전라북도","전라남도"]
}
export const Zone2 = {
    getZone : ["강남구","강서구","금천구","구로구"]
}

export const MemberDataLv2 = {  // 일반회원
    getMe : {
        mb_id: "test",
        mb_name: "테스트회원",
        mb_nick: "테스트회원",
        mb_email: "test@test.com",
        mb_zip: "",
        mb_addr1: "서울시 금천구",
        mb_addr2: "",
        mb_hp: "",
        mb_sex: "M",
        mb_birth: "2000-01-01",
        mb_1: "24",
        mb_2: "90",
        mb_3: "180",
        mb_4: "70",
        mb_5: "",
        mb_6: "",
        mb_7: "",
        mb_8: "",
        mb_9: "",

        mb_level: 2,
        sns: "",

        mb_img: profile1,
    } as ResponseMe
}
export const MemberDataLv3 = {
    getMe : {
        mb_id: "testLv3",
        mb_name: "테스트전문가",
        mb_nick: "테스트전문가",
        mb_email: "testlv3@test.com",
        mb_zip: "",
        mb_addr1: "서울시 금천구",
        mb_addr2: "",
        mb_hp: "01012341234",
        mb_sex: "M",
        mb_birth: "",
        mb_1: "",
        mb_2: "",
        mb_3: "",
        mb_4: "",
        mb_5: "", // 원래 직업이 나오는 부분이지만 수정사항 요청으로 삭제되었습니다 참고하세요
        mb_6: "['http://naver.com','http://google.com']",
        mb_7: "",
        mb_8: "",
        mb_9: "",

        mb_level: 3,
        sns: "",

        mb_img: profile2,
    } as ResponseMe
}

export const expertData = {
    getMineExpert : {
        mine : {
            mb_id: "testLv3",
            mb_name: "테스트전문가",
            mb_nick: "테스트전문가",
            mb_email: "testlv3@test.com",
            mb_zip: "",
            mb_addr1: "서울시 금천구",
            mb_addr2: "",
            mb_hp: "01012341234",
            mb_sex: "M",
            mb_birth: "",
            mb_1: "",
            mb_2: "",
            mb_3: "",
            mb_4: "",
            mb_5: "", // 원래 직업이 나오는 부분이지만 수정사항 요청으로 삭제되었습니다 참고하세요
            mb_6: "['http://naver.com','http://google.com']",
            mb_7: "",
            mb_8: "",
            mb_9: "",

            mb_level: 3,
            sns: "",

            mb_img: profile2,
        },
        expert : {
            wr_num: 0,
            wr_id: 0,
            wr_reply: 0,

            mb_id : "testLv3",
            wr_name: "테스트전문가",
            subject : "전문(실명)",
            content : "전문(실명)",

            file: [{
                url: trophy1,
                fileType: "image",
                thumb: resizeTrophy1,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
            },
            null,
            {
                url: trophy2,
                fileType: "image",
                thumb: resizeTrophy2,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
            }],

            datetime: "2022-02-25 18:00:00",
            hit: 0,

            isSecret: false,
            isNotice: false,

            countBad :0,
            countGood : 0,

            wr_1: "기타내용입니다.",
            wr_2: "",
            wr_3: "",
            wr_4: "",
            wr_5: "",
            wr_6: "",
            wr_7: "",
            wr_8: "",
            wr_9: "",
            wr_10: "",
        }
    } as ResponseMineExpert
}

export const WaterDrinkData = {
    getWaterDrink : 2500
}

export const FoodData = {
    getBoardList : {
        boardData : {
            bo_table: "food",
            bo_upload_count: 0,

            subject: "음식",
            canWrite: true,
            canReply: false,
            canComment: true,
            canUseHTML : false,
            canUseLink : false,

            readPoint : 0,
            writePoint : 0,
            commentPoint : 0,
            downloadPoint :0,

            category : [],

            bo_use_good : false,
            bo_use_nogood : false,
        },
        boardList : [{
            wr_num: 0,
            wr_id: 1,
            wr_reply: 0,

            mb_id : "test",
            wr_name: "일반회원",
            subject : "아침 09:00",
            content : "식단일기 내용",

            file: [{
                url: food1,
                fileType: "image",
                thumb: resizeFood1,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
            },
            {
                url: food2,
                fileType: "image",
                thumb: resizeFood2,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
            }],

            datetime: "2022-02-25",
            hit: 0,

            isSecret: false,
            isNotice: false,

            countBad :0,
            countGood : 0,

            wr_1: "2022-02-24",
            wr_2: "가벼워요",
            wr_3: "치팅",
            wr_4: "1",
            wr_5: "아침",
            wr_6: "",
            wr_7: "",
            wr_8: "",
            wr_9: "",
            wr_10: "",
        },
        {
            wr_num: 0,
            wr_id: 2,
            wr_reply: 0,

            mb_id : "test",
            wr_name: "일반회원",
            subject : "점심 12:00",
            content : "식단일기 내용 두번째",

            file: [{
                url: food3,
                fileType: "image",
                thumb: resizeFood3,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
                },
                {
                    url: food4,
                    fileType: "image",
                    thumb: resizeFood4,
                    bf_id: 1,
                    bo_table: "",
                    wr_id : 0,
                    fileName: "",
                    downloadCount: 0,
                }],

            datetime: "2022-02-25",
            hit: 0,

            isSecret: false,
            isNotice: false,

            countBad :0,
            countGood : 0,

            wr_1: "2022-02-24",
            wr_2: "배불러요",
            wr_3: "다이어트식",
            wr_4: "1",
            wr_5: "점심",
            wr_6: "",
            wr_7: "",
            wr_8: "",
            wr_9: "",
            wr_10: "",
        },
        {
            wr_num: 0,
            wr_id: 3,
            wr_reply: 0,

            mb_id : "test",
            wr_name: "일반회원",
            subject : "저녁 19:00",
            content : "식단일기 내용3",

            file: [{
                url: food5,
                fileType: "image",
                thumb: resizeFood5,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
            },
                {
                    url: food1,
                    fileType: "image",
                    thumb: resizeFood1,
                    bf_id: 1,
                    bo_table: "",
                    wr_id : 0,
                    fileName: "",
                    downloadCount: 0,
                }],

            datetime: "2022-02-25",
            hit: 0,

            isSecret: false,
            isNotice: false,

            countBad :0,
            countGood : 0,

            wr_1: "2022-02-24",
            wr_2: "적당해요",
            wr_3: "일반식",
            wr_4: "1",
            wr_5: "저녁",
            wr_6: "",
            wr_7: "",
            wr_8: "",
            wr_9: "",
            wr_10: "",
        }],
        pageCount : 1
    } as ResponseQueryGetBoardList
}

export const exerciseData = {
    getBoardList : {
        boardData : {
            bo_table: "myExercise",
            bo_upload_count: 0,

            subject: "운동",
            canWrite: true,
            canReply: false,
            canComment: true,
            canUseHTML : false,
            canUseLink : false,

            readPoint : 0,
            writePoint : 0,
            commentPoint : 0,
            downloadPoint :0,

            category : [],

            bo_use_good : false,
            bo_use_nogood : false,
        },
        boardList : [ {
            "wr_num": -3,
            "wr_id": 6,
            "wr_reply": 0,
            "mb_id": "NO_12b9fe625ebd2e90e",
            "wr_name": "테스트전문가회원",
            "subject": "2022-01-26 테스트전문가회원",
            "content": "[{\"part\":\"하체\",\"name\":\"빡세게\",\"set\":3,\"weight\":3,\"times\":10,\"movieURL\":\"\",\"time\":\"\",\"power\":\"\"},{\"part\":\"어깨\",\"name\":\"웨이트로\",\"set\":13,\"weight\":5,\"times\":5,\"movieURL\":\"\",\"time\":\"\",\"power\":\"\"}]",
            "file": [{
                url: profile2,
                fileType: "image",
                thumb: profile2,
                bf_id: 1,
                bo_table: "",
                wr_id : 0,
                fileName: "",
                downloadCount: 0,
            }],
            "datetime": "2022-01-26 13:08:18",
            "hit": 1,
            "isSecret": false,
            "isNotice": false,
            "wr_1": "2022-01-26",
            "wr_2": "80",
            "wr_3": "헬스",
            "wr_4": "1",
            "wr_5": "",
            "wr_6": "",
            "wr_7": "",
            "wr_8": "",
            "wr_9": "",
            "wr_10": "",
            "countGood": 0,
            "countBad": 0,
            "writerData": {
                "mb_id": "NO_12b9fe625ebd2e90e",
                "mb_name": "테스트전문가회원",
                "mb_1": "",
                "mb_2": "",
                "mb_3": "",
                "mb_4": "",
                "mb_5": "헬스 트레이너",
                "mb_6": "https://naver.com",
                "mb_7": "",
                "mb_8": "",
                "mb_9": "",
                mb_img: ""
            },
        }],
        pageCount : 1
    } as ResponseQueryGetBoardList
}

export const exerciseForm = {
    "getExercise": {
        "date": "2022-01-26",
        "exerciseType": "헬스",
        "todayWeight": 80,
        "file": [],
        "exerciseData": [
            {
                "part": "하체",
                "name": "빡세게",
                "set": 3,
                "weight": 3,
                "times": 10,
                "movieURL": "",
                "time": "",
                "power": ""
            },
            {
                "part": "어깨",
                "name": "웨이트로",
                "set": 13,
                "weight": 5,
                "times": 5,
                "movieURL": "",
                "time": "",
                "power": ""
            }
        ]
    }
}

export const shareList = {
    "getShareData": {
        "exercise": {
            "date": "2022-01-26",
            "exerciseType": "헬스",
            "todayWeight": 80,
            "file": [],
            "exerciseData": [
                {
                    "part": "하체",
                    "name": "빡세게",
                    "set": 3,
                    "weight": 3,
                    "times": 10,
                    "movieURL": "",
                    "time": "",
                    "power": ""
                },
                {
                    "part": "어깨",
                    "name": "웨이트로",
                    "set": 13,
                    "weight": 5,
                    "times": 5,
                    "movieURL": "",
                    "time": "",
                    "power": ""
                }
            ]
        },
        "food": null,
        "comment": "코멘트를 다는 곳입니다",
        "weight": 80,
        "question": "질문을 던지는곳입니다.",
        "date": "2022-01-26",
        "bodyForm": [],
        "bodyComment": "",
        "teaching": [],
        "foodGood": 0,
        "exerciseGood": 0
    }
}
