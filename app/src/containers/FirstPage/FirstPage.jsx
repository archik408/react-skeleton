import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import cx from 'classnames';
// import _ from 'lodash';

import * as firstPageActionCreators
  from '../../actions/bound_action_creators/firstPage';
import { MyComponent } from '../../components';
import styles from './styles.scss';

/**
 * Class renders First Page
 * @extends {React.Component}
 */
class FirstPage extends React.Component {

  /**
   * Create new FirstPage
   * @param {Object} props - The initial properties
   * @see FirstPage.propTypes
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  /**
   * Requests by competitors
   * Requests by pricing groups
   * @returns {void}
   */
  componentWillMount() {
    this.props.actions.boundGetData();
  }

  /**
   * Method
   * @returns {void}
   */
  method() {
    // TODO
  }

  /**
   * Renders the component
   * @returns {XML} Markup for the component
   */
  render() {
    const {
      props: {
        data
      }
    } = this;
    return (
      <div className={styles.FirstPage}>
        <MyComponent data={data} />
      </div>
    );
  }
}

/**
 * @prop {Object} propTypes - Properties of the component
 * @prop {Object} propTypes.actions - Action creators
 * @prop {Array} propTypes.data - Initial data
 */
FirstPage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  data: React.PropTypes.array
};

/**
 * Map state to property
 * @param {Object} state - Application state
 * @function mapStateToProps
 * @returns {Object} Data from state
 * @private
 */
const mapStateToProps = (state) => ({
  data: state.FirstPage.data.data
});

/**
 * Map dispatch to property
 * @param {Function} dispatch - Dispatch redux actions
 * @function mapDispatchToProps
 * @returns {Object} Action creators
 * @private
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...firstPageActionCreators
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
