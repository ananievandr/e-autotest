import { useState } from 'react';
import { SingleSelect } from 'react-select-material-ui';

function SelectSearch() {
	const options: string[] = ['Africa', 'America', 'Asia', 'Europe'];
	const [value, setValue] = useState('')
	return (
		<SingleSelect data-test-id="Search" placeholder="Select a continent" value={value} options={options} onChange={setValue} />
	);
}

export {SelectSearch};