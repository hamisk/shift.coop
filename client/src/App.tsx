import React from 'react';
import Header from './Components/Header/Header';
import './App.scss';
import Home from './Pages/Home/Home';
import BodyA from './Pages/BodyA/BodyA';
import BodyB from './Pages/BodyB/BodyB';
import BodyC from './Pages/BodyC/BodyC';
import Partners from './Pages/Partners/Partners';

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<Home />
			<BodyA />
			<BodyB />
			<BodyC />
			<BodyB />
			<Partners />
		</div>
	);
}

export default App;
