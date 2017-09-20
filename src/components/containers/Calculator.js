import Calculator from "../ui/Calculator";
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
			dispatch(keyCodeMap[keycode]);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
