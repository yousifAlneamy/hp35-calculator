import Panel from "../ui/Panel";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		stack: state.stack
	};
};

export default connect(mapStateToProps)(Panel);
