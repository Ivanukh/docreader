import { createContext } from "react";


type LoaderContextType = {
    isLoading: CallableFunction;
    incCounter: CallableFunction,
    decCounter: CallableFunction
}
const LoaderContext = createContext<LoaderContextType | null>(null);

export default LoaderContext;
export type { LoaderContextType };