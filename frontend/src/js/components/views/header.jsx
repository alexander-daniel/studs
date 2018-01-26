import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';

class Header extends React.Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div className="container header">
        <Link className={classnames('button')} to="/cool">
          {'Cool'}
        </Link>
        <Link className={classnames('button')} to="/foo">
          {'Foo'}
        </Link>
        <Link className={classnames('button')} to="/biz">
          {'Biz'}
        </Link>
      </div>
    );
  }
}

export default withRouter(Header);
