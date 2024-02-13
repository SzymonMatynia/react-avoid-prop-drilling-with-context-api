import {useExampleContext} from "../contexts/example-context.tsx";

export const ExampleComponent = () => {

	const {data} = useExampleContext();

	return (
		<div className={'flex flex-col gap-2'}>
			<h2 className={'text-2xl'}>Example component</h2>
			<pre>
				{
					JSON.stringify(data, null, 2)
				}
			</pre>
		</div>
	)
}

