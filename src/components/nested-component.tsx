import {useExampleContext} from "../contexts/example-context.tsx";

export const NestedComponent = () => {

	const {data} = useExampleContext();

	return (
		<div className={'flex flex-col gap-2 p-2 border ml-6'}>
			<h2 className={'text-2xl'}>Nested Component</h2>
			<div>{data.number} || {data.direction} || {data.exampleValue}</div>
		</div>
	)
}
