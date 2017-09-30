import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Margin from './Margin'

const styles = {
  root: {
    paddingTop: 20,
    paddingBottom: 20,
  }
}
const Footer = ({ classes }) => (
  <Margin>
    <footer className={classes.root}>
      <Typography>
        © 2017 Edouard Richard
      </Typography>
    </footer>
  </Margin>
)

export default withStyles(styles)(Footer)
