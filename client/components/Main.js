import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Home} />
			</Router>
		);
	}
}

export default Main;
