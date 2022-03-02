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
  default: {
    id: '',
    session: '',
    mb_id: '',
    mb_name: '',
    mb_nick: '',
    mb_password: '',
    mb_email: '',
    mb_zip: '',
    mb_addr1: '',
    mb_addr2: '',
    mb_addr3: '',
    mb_dupinfo: '',
    mb_hp: '',
    mb_sex: '',
    mb_birth: '',
    mb_sms: true && false,
    mb_open: true && false,
    mb_1: '',
    mb_2: '',
    mb_3: '',
    mb_4: '',
    mb_5: '',
    mb_6: '',
    mb_7: '',
    mb_8: '',
    mb_9: '',
    mb_img: '',
    mb_level: 1,
    sns: '',
  },
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
