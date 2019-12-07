module.exports = {
	mainJsValue: `import React from 'react';

import styles from './main.scss';

function Main() {
	return (
		<div className={styles['container']}>Start your react project</div>
	);
}

export default Main;`
};