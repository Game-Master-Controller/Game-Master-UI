import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../../actions/home";
import Home from "../../pages/home";

const mapStateToProps = state => ({
  name: state.home.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...homeActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
