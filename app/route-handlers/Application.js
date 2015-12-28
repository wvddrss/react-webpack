import Application from '../containers/Application';
import { connect } from 'react-redux';

export default connect(state => state)(Application);
