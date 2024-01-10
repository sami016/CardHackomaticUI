import { createContext, useContext } from "react";
import { IndexState } from "./IndexState";

export const StateContext = createContext<IndexState|undefined>(undefined)

export const useAppState = (): IndexState => {
    const state = useContext(StateContext)
    if (state === undefined) {
        throw new Error('state is undefined')
    }
    return state
}