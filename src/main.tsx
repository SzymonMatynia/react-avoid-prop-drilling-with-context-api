import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ExampleContextProvider} from "./contexts/example-context.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ExampleContextProvider>
			<App/>
		</ExampleContextProvider>
	</React.StrictMode>,
)
