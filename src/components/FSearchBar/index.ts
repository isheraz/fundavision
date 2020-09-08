import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FSearchBar from './FSearchBar';
import SearchActions from '../../redux/search';

const mapStateToProps = (state: any) => ({
  results: state.search.results
});
const mapDispatchToProps = (dispatch: any) => ({
  searchActions: bindActionCreators(SearchActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FSearchBar);
