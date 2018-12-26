import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  }
});

const StyledButton = styled(Button)`
  color: white;
  height: 48px;
  padding: 0 30px;
  border-radius: 3px;
  border: 0;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;


class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div className={classes.root}>
          <Typography variant="h4" gutterBottom>
            This is about page.
          </Typography>
          <StyledButton variant="contained" color="secondary">
            powered by Next.js
          </StyledButton>
        </div>
      </Layout>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(About);
