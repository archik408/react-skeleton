import React from 'react';

import { Layout, Panel } from 'react-toolbox';
// import styles from './styles.scss';

/**
 * Class represents Main Application Container
 * @extends {React.Component}
 */
class App extends React.Component {
  /**
   * Create new App
   * @param {Object} props - The initial properties
   * @see App.propTypes
   */
  constructor(props) {
    super(props);
    console.log('App');
  }

  /**
   * Renders the component
   * @returns {String} HTML for the component
   */
  render() {
    return (
      <Layout>
        <Panel>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {this.props.children}
          </div>
        </Panel>
      </Layout>
    );
  }
}

/**
 * @prop {Object} propTypes - The props that are passed to this component
 * @prop {Array} propTypes.children - Child nodes of this component
 */
App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.element)
  ])
};

export default App;
