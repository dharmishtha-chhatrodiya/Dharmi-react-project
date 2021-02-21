import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { addItem } from "../../Actions";
import { useDispatch } from "react-redux";
import { Button, Grid, TextField } from "@material-ui/core";



const styles = theme => ({
  addDataSection: {
    display: "flex",
    flexDirection: "column",
    // width: "20%",
    margin: "0 auto",
  },
  inputSection: {
    margin: "10px"
  }

})
function ListInput(props) {
  const { classes } = props;
  const [category, setCategory] = React.useState("");
  const [subCategory, setsubCategory] = React.useState("");
  const dispatch = useDispatch();

  const addCategory = () => {
    let data = {};
    data.category = {}
    data.category = category;
    // data.category.innercategory=[];
    // data.category.subcategory.push(subCategory);
    console.log("dataaa", data);
    // dispatch(addItem(category));
  }
  return (
    <React.Fragment>
      <div className={classes.addDataSection} >
        <Grid container spacing={3}>
          <Grid item xs={6} lg={4}>
            <TextField fullWidth id="standard-basic" label="Category" placeholder="Add Category"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
              }} />
          </Grid>
          <Grid item xs={6} lg={4}>
            <TextField fullWidth id="standard-basic" label="Sub Category" placeholder="Add Sub Category"
              value={subCategory}
              onChange={e => {
                setsubCategory(e.target.value);
              }} />
          </Grid>
          <Grid item xs={6} lg={12}>
            <Button size="medium" variant="contained" color="primary"
              disabled={!category}
              onClick={() => {
                if (!category) return;
                addCategory()
                // dispatch(addItem(category));
                setCategory("");
                setsubCategory("")
              }}
            >
              Add Category
      </Button>
          </Grid>
        </Grid>

      </div>
    </React.Fragment>
  );
}
export default withStyles(styles)(ListInput)