import {useExampleContext} from "../contexts/example-context.tsx";

export const NumberDirectionComponent = () => {

	const {data} = useExampleContext();

	return (
		<div className={'flex flex-col gap-2'}>
			<h2 className={'text-2xl'}>Number Direction Component</h2>
			<div>{data.number}</div>
			<div>{data.direction}</div>
		</div>
	)
}
