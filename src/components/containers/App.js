import App from "../ui/App";
import { connect } from "react-redux";
import { keyCode } from "../../store/actions";

const mapStateToProps = state => {
	return {
		stack: state.stack
	};
};

const mapDispatchToProps = dispatch => {
	return {
		keyCodes(keycode) {
			dispatch(keyCode(keycode));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
