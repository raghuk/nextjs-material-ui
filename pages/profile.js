import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  }
});


class Profile extends Component {
  static async getInitialProps({ query }) {
    return { id: query.id };
  }

  render() {
    const { classes, id } = this.props;

    return (
      <Layout>
        <div className={classes.root}>
          <Typography variant="h4" gutterBottom>
            This is profile page
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            User logged in with {id}
          </Typography>
        </div>
      </Layout>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Profile);
