import App from "../ui/App";
import { connect } from "react-redux";
import keyCodeMap from "../../store/actions";

const mapStateToProps = state => {
	return {
		...state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		keyCodes(keycode) {
			dispatch(keyCodeMap[keycode](keycode));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
