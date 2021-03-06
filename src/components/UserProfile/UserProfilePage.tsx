import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../store';

interface RouteParms {
  id: string;
}

export interface IUserProfilePageProps extends RouteComponentProps<RouteParms> {
}

export class UserProfilePage extends React.Component<IUserProfilePageProps> {
  public render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        User Profile Page id: { id}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    UserData: state.users.usersdata
  }
}

export default connect(mapStateToProps)(UserProfilePage);