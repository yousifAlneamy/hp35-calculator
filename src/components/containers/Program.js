import Program from "../ui/Program";
import { connect } from "react-redux";
import keyCodeMap, { setX } from "../../store/actions";

const mapDispatchToProps = dispatch => {
	return {
		addNumber(number) {
			dispatch(setX(number));
		},
		exeFunction(keycode) {
			dispatch(keyCodeMap[keycode]);
		}
	};
};

export default connect(undefined, mapDispatchToProps)(Program);
