import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { addItem } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";



const styles = theme => ({
  addDataSection: {
    display: "flex",
    flexDirection: "column",
    // width: "20%",
    margin: "0 auto",
  },
  inputSection: {
    margin: "10px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

})
function ListInput(props) {
  const { classes } = props;
  const [category, setCategory] = React.useState("");
  const [subCategory, setsubCategory] = React.useState([]);
  const [subCategoryData, setSubCategoryData] = React.useState('');
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const addCategory = () => {
    let data = {};
    data.category = {}
    data.category = category;
    data.parent=subCategoryData
    // data.category.innercategory=[];
    // data.category.subcategory.push(subCategory);
    console.log("dataaa", data);
    dispatch(addItem(category));
  }

  const handleChange = (event) => {
    setSubCategoryData(event.target.value);
  };
  const listKeys = Object.keys(list);
  console.log("listttt",list)
  console.log("category data", listKeys)
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
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
              <Select fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subCategoryData}
                onChange={handleChange}
              >{
                  listKeys.map(key => (
                    <MenuItem value={list[key].label}>{list[key].label}</MenuItem>
                  ))
                }

              </Select>
            </FormControl>
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