import {
  ResponseMe,
  ResponseMineExpert,
  ResponseQueryGetBoardList,
} from '../lib/GQL/GQLInterfaces';
import profile1 from './Image/profile1.png';
import profile2 from './Image/profile2.png';
import food1 from './Image/food1.jpg';
import food2 from './Image/food2.jpg';
import food3 from './Image/food3.jpg';
import food4 from './Image/food4.jpg';
import food5 from './Image/food5.jpg';
import resizeFood1 from './Image/resize_food1.png';
import resizeFood2 from './Image/resize_food2.png';
import resizeFood3 from './Image/resize_food3.png';
import resizeFood4 from './Image/resize_food4.png';
import resizeFood5 from './Image/resize_food5.png';
import trophy1 from './Image/trophy1.png';
import trophy2 from './Image/trophy2.jpg';
import resizeTrophy1 from './Image/resize_trophy1.png';
import resizeTrophy2 from './Image/resize_trophy2.png';

export const DummySelect = [
  {
    name: '서울',
    state: [
      '종로구',
      '중구',
      '용산구',
      '성동구',
      '광진구',
      '동대문구',
      '중랑구',
      '성북구',
      '강북구',
      '도봉구',
      '노원구',
      '은평구',
      '서대문구',
      '마포구',
      '양천구',
      '강서구',
      '구로구',
      '금천구',
      '영등포구',
      '동작구',
      '관악구',
      '서초구',
      '강남구',
      '송파구',
      '강동구',
    ],
  },
  {
    name: '경기',
    state: [
      '가평군',
      '고양시',
      '과천시',
      '광명시',
      '광주시',
      '구리시',
      '군포시',
      '김포시',
      '남양주시',
      '동두천시',
      '부천시',
      '성남시',
      '수원시',
      '시흥시',
      '안산시',
      '안성시',
      '안양시',
      '양주시',
      '양평군',
      '여주시',
      '연천군',
      '오산시',
      '용인시',
      '의왕시',
      '의정부시',
      '이천시',
      '파주시',
      '평택시',
      '포천시',
      '하남시',
      '화성시',
    ],
  },
  {
    name: '인천',
    state: [
      '중구',
      '동구',
      '남구',
      '연수구',
      '남동구',
      '부평구',
      '계양구',
      '서구',
      '강화군',
      '옹진군',
    ],
  },
  {
    name: '부산',
    state: [
      '중구',
      '서구',
      '동구',
      '영도구',
      '부산진구',
      '동래구',
      '남구',
      '북구',
      '강서구',
      '해운대구',
      '사하구',
      '금정구',
      '연제구',
      '수영구',
      '사상구',
      '기장군',
    ],
  },
  {
    name: '대전',
    state: ['동구', '중구', '서구', '유성구', '대덕구'],
  },
  {
    name: '대구',
    state: [
      '중구',
      '동구',
      '서구',
      '남구',
      '북구',
      '수성구',
      '달서구',
      '달성군',
    ],
  },
  {
    name: '울산',
    state: ['중구', '남구', '동구', '북구', '울주군'],
  },
  {name: '세종', state: []},
  {
    name: '광주',
    state: ['동구', '서구', '남구', '북구', '광산구'],
  },
  {
    name: '강원',
    state: [
      '원주시',
      '춘천시',
      '강릉시',
      '동해시',
      '속초시',
      '삼척시',
      '홍천군',
      '태백시',
      '철원군',
      '횡성군',
      '평창군',
      '영월군',
      '정선군',
      '인제군',
      '고성군',
      '양양군',
      '화천군',
      '양구군',
    ],
  },
  {
    name: '충북',
    state: [
      '청주시',
      '충주시',
      '제천시',
      '보은군',
      '옥천군',
      '영동군',
      '증평군',
      '진천군',
      '괴산군',
      '음성군',
      '단양군',
    ],
  },
  {
    name: '충남',
    state: [
      '천안시',
      '공주시',
      '보령시',
      '아산시',
      '서산시',
      '논산시',
      '계룡시',
      '당진시',
      '금산군',
      '부여군',
      '서천군',
      '청양군',
      '홍성군',
      '예산군',
      '태안군',
    ],
  },
  {
    name: '경북',
    state: [
      '포항시',
      '경주시',
      '김천시',
      '안동시',
      '구미시',
      '영주시',
      '영천시',
      '상주시',
      '문경시',
      '경산시',
      '군위군',
      '의성군',
      '청송군',
      '영양군',
      '영덕군',
      '청도군',
      '고령군',
      '성주군',
      '칠곡군',
      '예천군',
      '봉화군',
      '울진군',
      '울릉군',
    ],
  },
  {
    name: '경남',
    state: [
      '창원시',
      '김해시',
      '진주시',
      '양산시',
      '거제시',
      '통영시',
      '사천시',
      '밀양시',
      '함안군',
      '거창군',
      '창녕군',
      '고성군',
      '하동군',
      '합천군',
      '남해군',
      '함양군',
      '산청군',
      '의령군',
    ],
  },
  {
    name: '전북',
    state: [
      '전주시',
      '익산시',
      '군산시',
      '정읍시',
      '완주군',
      '김제시',
      '남원시',
      '고창군',
      '부안군',
      '임실군',
      '순창군',
      '진안군',
      '장수군',
      '무주군',
    ],
  },
  {
    name: '전남',
    state: [
      '여수시',
      '순천시',
      '목포시',
      '광양시',
      '나주시',
      '무안군',
      '해남군',
      '고흥군',
      '화순군',
      '영암군',
      '영광군',
      '완도군',
      '담양군',
      '장성군',
      '보성군',
      '신안군',
      '장흥군',
      '강진군',
      '함평군',
      '진도군',
      '곡성군',
      '구례군',
    ],
  },
  {name: '제주', state: ['제주시', '서귀포시']},
];
export const DateSelect = [
  {id: 1, name: '1일'},
  {id: 2, name: '2일'},
  {id: 3, name: '3일'},
  {id: 4, name: '4일'},
  {id: 5, name: '5일'},
];
export const Zone1 = {
  getZone: [
    '서울시',
    '경기도',
    '인천시',
    '마산시',
    '경상북도',
    '경상남도',
    '전라북도',
    '전라남도',
  ],
};
export const Zone2 = {
  getZone: ['강남구', '강서구', '금천구', '구로구'],
};
export const MemberDataLv2 = {
  // 일반회원
  getMe: {
    mb_id: 'test',
    mb_name: '테스트회원',
    mb_nick: '테스트회원',
    mb_email: 'test@test.com',
    mb_zip: '',
    mb_addr1: '서울시 금천구',
    mb_addr2: '',
    mb_hp: '',
    mb_sex: 'M',
    mb_birth: '2000-01-01',
    // 나이
    mb_1: '24',
    // 무게
    mb_2: '90',
    // 키
    mb_3: '180',
    // 목표체중
    mb_4: '70',
    mb_5: '',
    mb_6: [],
    mb_7: '',
    mb_8: '',
    mb_9: '',

    mb_level: 2,
    sns: '',

    mb_img: profile1,
  } as ResponseMe,
};
export const MemberDataLv3 = {
  getMe: {
    mb_id: 'testLv3',
    mb_name: '테스트',
    mb_nick: '테스트전문가',
    mb_email: 'testlv3@test.com',
    mb_zip: '',
    mb_addr1: '서울시 금천구',
    mb_addr2: '',
    mb_hp: '01012341234',
    mb_sex: 'M',
    mb_birth: '',
    mb_1: '',
    mb_2: '',
    mb_3: '',
    mb_4: '',
    mb_5: '', // 원래 직업이 나오는 부분이지만 수정사항 요청으로 삭제되었습니다 참고하세요
    mb_6: ['http://naver.com', 'http://google.com'],
    mb_7: '',
    mb_8: '',
    mb_9: '',

    mb_level: 3,
    sns: '',

    mb_img: profile2,
  } as ResponseMe,
};
export const expertData = {
  getMineExpert: {
    mine: {
      mb_id: 'testLv3',
      mb_name: '테스트',
      mb_nick: '테스트전문가',
      mb_email: 'testlv3@test.com',
      mb_zip: '',
      mb_addr1: '서울시 금천구',
      mb_addr2: '',
      mb_hp: '01012341234',
      mb_sex: 'M',
      mb_birth: '',
      mb_1: '',
      mb_2: '',
      mb_3: '',
      mb_4: '',
      mb_5: '', // 원래 직업이 나오는 부분이지만 수정사항 요청으로 삭제되었습니다 참고하세요
      mb_6: ['http://naver.com', 'http://google.com'],
      mb_7: '',
      mb_8: '',
      mb_9: '',

      mb_level: 3,
      sns: '',

      mb_img: profile2,
    },
    expert: {
      wr_num: 0,
      wr_id: 0,
      wr_reply: 0,

      mb_id: 'testLv3',
      wr_name: '테스트전문가',
      subject: '전문(실명)',
      content: '전문(실명)',

      file: [
        {
          url: trophy1,
          fileType: 'image',
          thumb: resizeTrophy1,
          bf_id: 1,
          bo_table: '',
          wr_id: 0,
          fileName: '',
          downloadCount: 0,
        },
        null,
        {
          url: trophy2,
          fileType: 'image',
          thumb: resizeTrophy2,
          bf_id: 1,
          bo_table: '',
          wr_id: 0,
          fileName: '',
          downloadCount: 0,
        },
      ],

      datetime: '2022-02-25 18:00:00',
      hit: 0,

      isSecret: false,
      isNotice: false,

      countBad: 0,
      countGood: 0,

      wr_1: '기타내용입니다.',
      wr_2: '',
      wr_3: '',
      wr_4: '',
      wr_5: '',
      wr_6: '',
      wr_7: '',
      wr_8: '',
      wr_9: '',
      wr_10: '',
    },
  } as ResponseMineExpert,
};
export const WaterDrinkData = {
  getWaterDrink: 2500,
};
export const FoodData = {
  getBoardList: {
    boardData: {
      bo_table: 'food',
      bo_upload_count: 0,

      subject: '음식',
      canWrite: true,
      canReply: false,
      canComment: true,
      canUseHTML: false,
      canUseLink: false,

      readPoint: 0,
      writePoint: 0,
      commentPoint: 0,
      downloadPoint: 0,

      category: [],

      bo_use_good: false,
      bo_use_nogood: false,
    },
    boardList: [
      {
        wr_num: 0,
        wr_id: 1,
        wr_reply: 0,

        mb_id: 'test',
        wr_name: '일반회원',
        subject: '아침 09:00',
        content: '식단일기 내용',

        file: [
          {
            url: food1,
            fileType: 'image',
            thumb: resizeFood1,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
          {
            url: food2,
            fileType: 'image',
            thumb: resizeFood2,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
        ],

        datetime: '2022-02-25',
        hit: 0,

        isSecret: false,
        isNotice: false,

        countBad: 0,
        countGood: 0,

        wr_1: '2022-02-24',
        wr_2: '가벼워요',
        wr_3: '치팅',
        wr_4: '1',
        wr_5: '아침',
        wr_6: '',
        wr_7: '',
        wr_8: '',
        wr_9: '',
        wr_10: '',
      },
      {
        wr_num: 0,
        wr_id: 2,
        wr_reply: 0,

        mb_id: 'test',
        wr_name: '일반회원',
        subject: '점심 12:00',
        content: '식단일기 내용 두번째',

        file: [
          {
            url: food3,
            fileType: 'image',
            thumb: resizeFood3,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
          {
            url: food4,
            fileType: 'image',
            thumb: resizeFood4,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
        ],

        datetime: '2022-02-25',
        hit: 0,

        isSecret: false,
        isNotice: false,

        countBad: 0,
        countGood: 0,

        wr_1: '2022-02-24',
        wr_2: '배불러요',
        wr_3: '다이어트식',
        wr_4: '1',
        wr_5: '점심',
        wr_6: '',
        wr_7: '',
        wr_8: '',
        wr_9: '',
        wr_10: '',
      },
      {
        wr_num: 0,
        wr_id: 3,
        wr_reply: 0,

        mb_id: 'test',
        wr_name: '일반회원',
        subject: '저녁 19:00',
        content: '식단일기 내용3',

        file: [
          {
            url: food5,
            fileType: 'image',
            thumb: resizeFood5,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
          {
            url: food1,
            fileType: 'image',
            thumb: resizeFood1,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
        ],

        datetime: '2022-02-25',
        hit: 0,

        isSecret: false,
        isNotice: false,

        countBad: 0,
        countGood: 0,

        wr_1: '2022-02-24',
        wr_2: '적당해요',
        wr_3: '일반식',
        wr_4: '1',
        wr_5: '저녁',
        wr_6: '',
        wr_7: '',
        wr_8: '',
        wr_9: '',
        wr_10: '',
      },
    ],
    pageCount: 1,
  },
};
export const exerciseData = {
  getBoardList: {
    boardData: {
      bo_table: 'myExercise',
      bo_upload_count: 0,

      subject: '운동',
      canWrite: true,
      canReply: false,
      canComment: true,
      canUseHTML: false,
      canUseLink: false,

      readPoint: 0,
      writePoint: 0,
      commentPoint: 0,
      downloadPoint: 0,

      category: [],

      bo_use_good: false,
      bo_use_nogood: false,
    },
    boardList: [
      {
        wr_num: -3,
        wr_id: 6,
        wr_reply: 0,
        mb_id: 'NO_12b9fe625ebd2e90e',
        wr_name: '테스트전문가회원',
        subject: '2022-01-26 테스트전문가회원',
        content:
          '[{"part":"하체","name":"빡세게","set":3,"weight":3,"times":10,"movieURL":"","time":"","power":""},{"part":"어깨","name":"웨이트로","set":13,"weight":5,"times":5,"movieURL":"","time":"","power":""}]',
        file: [
          {
            url: profile2,
            fileType: 'image',
            thumb: profile2,
            bf_id: 1,
            bo_table: '',
            wr_id: 0,
            fileName: '',
            downloadCount: 0,
          },
        ],
        datetime: '2022-01-26 13:08:18',
        hit: 1,
        isSecret: false,
        isNotice: false,
        wr_1: '2022-01-26',
        wr_2: '80',
        wr_3: '헬스',
        wr_4: '1',
        wr_5: '',
        wr_6: '',
        wr_7: '',
        wr_8: '',
        wr_9: '',
        wr_10: '',
        countGood: 0,
        countBad: 0,
        writerData: {
          mb_id: 'NO_12b9fe625ebd2e90e',
          mb_name: '테스트전문가회원',
          mb_1: '',
          mb_2: '',
          mb_3: '',
          mb_4: '',
          mb_5: '헬스 트레이너',
          mb_6: 'https://naver.com',
          mb_7: '',
          mb_8: '',
          mb_9: '',
          mb_img: '',
        },
      },
    ],
    pageCount: 1,
  },
};
export const exerciseForm = {
  getExercise: {
    date: '2022-03-10',
    exerciseType: '헬스',
    todayWeight: 80,
    file: [
      {
        url: profile2,
        fileType: 'image',
        thumb: profile2,
        bf_id: 1,
        bo_table: '',
        wr_id: 0,
        fileName: '',
        downloadCount: 0,
      },
    ],
    exerciseData: [
      {
        part: '하체',
        name: '빡세게',
        set: 3,
        weight: 3,
        times: 10,
        movieURL: '',
        time: '',
        power: '',
      },
      {
        part: '어깨',
        name: '웨이트로',
        set: 13,
        weight: 5,
        times: 5,
        movieURL: '',
        time: '',
        power: '',
      },
    ],
  },
};
export const shareList = {
  getShareData: {
    exercise: {
      date: '2022-01-26',
      exerciseType: '헬스',
      todayWeight: 80,
      file: [],
      exerciseData: [
        {
          part: '하체',
          name: '빡세게',
          set: 3,
          weight: 3,
          times: 10,
          movieURL: '',
          time: '',
          power: '',
        },
        {
          part: '어깨',
          name: '웨이트로',
          set: 13,
          weight: 5,
          times: 5,
          movieURL: '',
          time: '',
          power: '',
        },
      ],
    },
    food: null,
    comment: '코멘트를 다는 곳입니다',
    weight: 80,
    question: '질문을 던지는곳입니다.',
    date: '2022-01-26',
    bodyForm: [],
    bodyComment: '',
    teaching: [],
    foodGood: 0,
    exerciseGood: 0,
  },
};
