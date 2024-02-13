import {useExampleContext} from "../contexts/example-context.tsx";

export const MutateContextDataComponent = () => {

	const {dispatch} = useExampleContext();

	const mutateContextData = () => {
		dispatch(prevState => ({
			...prevState,
			number: prevState.number + 1,
			exampleValue: prevState.exampleValue + `_${prevState.number}`,
			direction: prevState.direction === 'south' ? 'north' : 'south',
		}))
	}

	return (
		<div className={'flex flex-col gap-2 items-start'}>
			<h2 className={'text-2xl'}>Mutate Context Data Component</h2>
			<button className={'p-2 bg-black text-white rounded'} onClick={mutateContextData}>Press me to mutate</button>
		</div>
	)
}
