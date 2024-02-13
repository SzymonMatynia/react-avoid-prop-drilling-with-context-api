import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState} from "react";

type ExampleDirection = 'north' | 'south' | 'east' | 'west';

type ExampleContextData = {
	number: number;
	direction: ExampleDirection;
	exampleValue: string;
}

const contextData: ExampleContextData = {
	number: 0,
	direction: 'north',
	exampleValue: 'I am a random value',
};

type ExampleContextProps<T> = {
	data: T,
	dispatch: Dispatch<SetStateAction<T>>
}

const ExampleContext = createContext<ExampleContextProps<ExampleContextData>>({
	data: contextData,
	dispatch: () => console.log('Dispatch must be implemented')
});

const ExampleContextProvider = ({children}: PropsWithChildren) => {

	const [data, dispatch] = useState<ExampleContextData>(() => contextData);

	return (
		<ExampleContext.Provider value={{data, dispatch}}>
			{children}
		</ExampleContext.Provider>
	)
}

const useExampleContext = () => useContext(ExampleContext);

export {
	ExampleContextProvider,
	useExampleContext
}
