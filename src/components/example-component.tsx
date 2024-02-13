import {NestedComponent} from './nested-component.tsx';

export const ExampleComponent = () => {
	return (
		<div className={'flex flex-col gap-2'}>
			<h2 className={'text-2xl'}>Example component</h2>
			<NestedComponent/>
		</div>
	)
}

