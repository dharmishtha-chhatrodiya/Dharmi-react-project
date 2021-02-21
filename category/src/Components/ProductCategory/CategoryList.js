import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

function CategoryList(props) {
    const { classes } = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={11} sm={11}>
                {/* {allSlot &&
              allSlot.map((element, i) => {
                return ( */}
                    <ExpansionPanel
                        // expanded={expanded === i}
                        expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Category (0)</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography >sub category (2)</Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                {/* )
              })} */}
                </Grid>
            </Grid>
        </div>
    );

}

CategoryList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryList);