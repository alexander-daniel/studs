import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../user/actions';
import { search } from '../../search/actions';

class CoolView extends React.Component {

  componentDidMount() {
    this.props.updateUser();
    this.search();
  }

  async search() {
    await this.props.search('foo');
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          {`${this.props.location.pathname} View!`}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: () => {
      return dispatch(updateUser());
    },

    search: async (searchTerm) => {
      return dispatch(search(searchTerm));
    }
  };
};

export default connect(null, mapDispatchToProps)(CoolView);
