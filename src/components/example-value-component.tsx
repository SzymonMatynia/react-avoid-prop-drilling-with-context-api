import {useExampleContext} from "../contexts/example-context.tsx";
import {NestedComponent} from './nested-component.tsx';

export const ExampleValueComponent = () => {

	const {data} = useExampleContext();

	return (
		<div className={'flex flex-col gap-2'}>
			<h2 className={'text-2xl'}>Example Value Component</h2>
			{data.exampleValue}
			<NestedComponent/>
		</div>
	)
}
