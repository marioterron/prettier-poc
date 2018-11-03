import React, { Fragment, useState } from 'react';

export default function App() {
	const initialCounterValue = 0;
	const [counter, setCount] = useState(initialCounterValue);

	return (
		<Fragment>
			<span>{counter}</span>
			<button onClick={() => setCount(counter + 1)}>+</button>
			<button onClick={() => setCount(counter - 1)}>-</button>
		</Fragment>
	);
}
