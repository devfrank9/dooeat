import {atom, selector} from 'recoil';
import {RequestSetMember, ResponseMe} from './GQL/GQLInterfaces';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({storage: sessionStorage});

export const __isLoading = atom({
  key: 'isLoading',
  default: false,
});

export const __session = atom({
  key: 'session',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const __me = atom<ResponseMe | undefined>({
  key: 'me',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const userDataState = atom<RequestSetMember | any>({
  key: 'userDataState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userFormState = atom<RequestSetMember | any>({
  key: 'userFormState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const filteredUserDataState = selector({
  key: 'filteredUserDataState',
  get: ({get}) => {
    const users = get(userDataState);
    const filter = {...get(userFormState)};
    Object.keys(filter).forEach(key => !filter[key] && delete filter[key]);
    if (Object.keys(filter).length) {
      return users.filter((user: any) => {
        for (let key in filter) {
          if (filter[key] !== user[key]) {
            return false;
          }
        }
        return true;
      });
    }
    return users;
  },
});

export const stateSelect = selector({
  key: 'state',
  get: async () => {
    const response = await fetch('http://api.vworld.kr/req/data');
    const stateInfo = await response.json();
    return stateInfo.ctp_kor_nm;
  },
});
export const citySelect = selector({
  key: 'city',
  get: async () => {
    const response = await fetch('http://api.vworld.kr/req/data');
    const stateInfo = await response.json();
    return stateInfo.ctp_kor_nm;
  },
});
