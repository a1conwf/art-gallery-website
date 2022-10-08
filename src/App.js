import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</div>
	);
};

export default App;
