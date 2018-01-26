import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';

class NavBar extends React.Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div className="header">
        <Link className={classnames('button')} to="/cool">
          {'Cool View'}
        </Link>
        <Link className={classnames('button')} to="/foo">
          {'Foo View'}
        </Link>
        <Link className={classnames('button')} to="/biz">
          {'Biz View'}
        </Link>
      </div>
    );
  }
}

export default withRouter(NavBar);
