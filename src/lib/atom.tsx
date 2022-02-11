import {atom} from "recoil";
import {ResponseMe} from "./GQL/GQLInterfaces";
import {recoilPersist} from 'recoil-persist';
const {persistAtom} = recoilPersist({storage : sessionStorage})
export const __isLoading = atom({
    key : "isLoading",
    default: false
})

export const __session = atom({
    key : "session",
    default: '',
    effects_UNSTABLE: [persistAtom]
})

export const __me = atom<ResponseMe | undefined>({
    key : "me",
    default: undefined,
    effects_UNSTABLE: [persistAtom]
})


