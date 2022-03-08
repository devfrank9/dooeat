import exp from 'constants';
import {
  ResponseCart,
  ResponseGetQueryGetShopCategories,
  ResponseGetShopItems,
  ResponseItemDetail,
  ResponseShopData,
} from './ShopGQLInterface';

export interface Responses {
  data: ResponseData;
  errors: ResponseError[];
}
interface ResponseError {
  message: string;
}

export interface RequestQueryGetPopular {
  startDate?: string;
  endDate?: string;
  limit?: number;
}
export interface RequestQueryContent {
  co_id: string;
}

export interface RequestQueryGetBoardListSearch {
  mb_id?: string;
  subject?: string;
  content?: string;
  name?: string;
  category?: string;
  customWhere?: string;
}

export interface RequestQueryGetBoardList {
  session?: string;
  bo_table: string;
  page?: number;
  noticeAbove?: boolean;
  sort?: string;
  search?: RequestQueryGetBoardListSearch;
  limit?: number;
}

interface ResponseQueryGetPopular {
  rank: number;
  word: string;
}
export interface RequestQueryGetLogin {
  mb_id: string;
  mb_password: string;
}

export interface RequestQueryGetBoardDetail {
  session: string;
  bo_table: string;
  wr_id: string;
  commentFrom?: number;
  commentLimit?: number;
  addView?: boolean;
}

export interface ResponseQueryGetBoardListBoardData {
  bo_table: string;
  bo_upload_count: number;

  subject: string;
  canWrite: boolean;
  canReply: boolean;
  canComment: boolean;
  canUseHTML: boolean;
  canUseLink: boolean;

  readPoint: number;
  writePoint: number;
  commentPoint: number;
  downloadPoint: number;

  category: string[];

  bo_use_good: boolean;
  bo_use_nogood: boolean;
}

interface ResponseBoardFile {
  url: string | number;
  fileType: string;
  thumb: string | number;
  bf_id: number;
  bo_table: string;
  wr_id: number;
  fileName: string;
  downloadCount: number;
}

export interface ResponseQueryGetOther {
  mb_id: string;
  mb_name: string;
  mb_1: string;
  mb_2: string;
  mb_3: string;
  mb_4: string;
  mb_5: string;
  mb_6: string;
  mb_7: string;
  mb_8: string;
  mb_9: string;
  mb_img: string | number;
}

export interface ResponseQueryGetBoardListBoardList {
  wr_num: number;
  wr_id: number;
  wr_reply: number;

  mb_id: string;
  wr_name: string;
  subject: string;
  content: string;

  file: ResponseBoardFile[];

  datetime: string;
  hit: number;

  isSecret: boolean;
  isNotice: boolean;

  countBad: number;
  countGood: number;

  wr_1: string;
  wr_2: string;
  wr_3: string;
  wr_4: string;
  wr_5: string;
  wr_6: string;
  wr_7: string;
  wr_8: string;
  wr_9: string;
  wr_10: string;

  writerData?: ResponseQueryGetOther;
}

export interface ResponseQueryGetBoardList {
  boardData: ResponseQueryGetBoardListBoardData;
  boardList: ResponseQueryGetBoardListBoardList[];
  pageCount: number;
}

export interface ResponseComment {
  wr_id: number;
  wr_parent: number;
  depth: number;

  mb_id: string;
  wr_name: string;
  content: string;

  datetime: string;
}

export interface ResponseQueryGetBoardDetail {
  selectedGood: number;
  mb_id: string;
  ca_name: string;
  wr_id: number;
  wr_name: string;
  hit: number;
  comment: ResponseComment[];

  optionHTML: boolean;
  subject: string;
  content: string;

  file: ResponseBoardFile[];

  datetime: string;

  countBad: number;
  countGood: number;

  prevWrite: ResponseQueryGetBoardListBoardList;
  nextWrite: ResponseQueryGetBoardListBoardList;

  bo_use_good: boolean;
  bo_use_nogood: boolean;

  wr_1: string;
  wr_2: string;
  wr_3: string;
}

export interface ResponseQueryGetBoardWrite {
  boardData: ResponseQueryGetBoardListBoardData;
  boardInfo: ResponseQueryGetBoardDetail | null;
}

interface ResponseAllBoard {
  data: ResponseQueryGetBoardWrite[];
  pageCount: number;
}

export interface ResponseMineExpert {
  mine: ResponseMe;
  expert: ResponseQueryGetBoardListBoardList;
}

export interface ResponseData extends ResponseShopData {
  setOrder: string;
  getCurrentSendCost: number;
  getMe: ResponseMe;
  checkDuplicate: Boolean;
  getPopular: ResponseQueryGetPopular[];
  getBoardList: ResponseQueryGetBoardList;
  getBoardDetail: ResponseQueryGetBoardDetail;
  getBoardWrite: ResponseQueryGetBoardWrite;

  login: string;
  getContent: string;

  setMember: string;
  setBoardWrite: number;

  getAllBoard: ResponseAllBoard;
  getMineExpert: ResponseMineExpert;
}

export interface RequestGetBoardWrite {
  session?: string;
  bo_table: string;
  wr_id?: string;
  wr_1?: string;
}

export interface RequestSetMember {
  id?: number;
  session?: string;
  mb_id?: string;
  mb_name?: string;
  mb_nick?: string;
  mb_password?: string;
  mb_email?: string;

  mb_zip?: string;
  mb_addr1?: string;
  mb_addr2?: string;
  mb_addr3?: string;

  mb_dupinfo?: string;
  mb_hp?: string;
  mb_sex?: string;
  mb_birth?: string;

  mb_sms?: boolean;
  mb_open?: boolean;

  mb_1?: string;
  mb_2?: string;
  mb_3?: string;
  mb_4?: string;
  mb_5?: string;
  mb_6?: string[];
  mb_7?: string[];
  mb_8?: string;
  mb_9?: string;

  mb_img?: string;
  mb_level?: number;
  sns?: string;
}
export interface RequestCheckDuplicate {
  mb_id?: string;
  mb_email?: string;
  mb_nick?: string;
  session?: string;
}

export interface RequestSubFileData {
  fileName: string;
  fileData: string;
}

export interface RequestMutationSetBoardWrite {
  session?: string;
  bo_table: string;
  token: string;

  isDelete?: boolean;

  wr_id?: number;

  password?: string;
  wr_name?: string;
  capcha?: string;

  category?: string;
  subject?: string;
  content: string;

  wr_1?: string;
  wr_2?: string;
  wr_3?: string;
  wr_4?: string;
  wr_5?: string;
  wr_6?: string;
  wr_7?: string;
  wr_8?: string;
  wr_9?: string;
  wr_10?: string;

  files?: (RequestSubFileData | null)[];
  deleteFile?: number[];
}

export interface ResponseMe {
  mb_id: string;
  mb_name: string;
  mb_nick: string;
  mb_email: string;
  mb_zip: string;
  mb_addr1: string;
  mb_addr2: string;
  mb_hp: string;
  mb_sex: string;
  mb_birth: string;
  mb_1: string;
  mb_2: string;
  mb_3: string;
  mb_4: string;
  mb_5: string;
  mb_6: string;
  mb_7: string;
  mb_8: string;
  mb_9: string;

  mb_level: number;
  sns: string;

  mb_img: string;
}

export interface RequestSetComment extends RequestMutationSetBoardWrite {
  wr_parent: number;
}

export interface RequestSetBoardGood {
  bo_table: string;
  wr_id: string;
  session: string;
  isCancel: boolean;
  isGood: boolean;
}
export interface RequestAllBoard {
  bo_table?: string;
  mb_id?: string;
  isComment?: boolean;
  isboard?: boolean;
}
