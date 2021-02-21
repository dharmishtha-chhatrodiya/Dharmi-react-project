import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { editItem, deleteItem } from "../../Actions";
import { useSelector, useDispatch } from "react-redux";


const styles = theme => ({
  root: {
    width: '100%',
  },
  mainSection:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:" 0 20px",
  },
  categoryName: {
    fontSize: "16px",
    color: "#222222",
    textTransform: "capitalize",
    display: "flex",
    lineHeight: "28px",
    alignItems: "center",
    cursor: "pointer",
    margin: "20px",
    borderRadius: "4px",
    padding: "12px 24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    backgroundColor: "white",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#ecf0f1",
    borderRadius: "5px",
    boxShadow:" 0 1px 4px rgba(0, 0, 0, 0.6)",
    padding: "12px 24px",
    border: "none",
    borderRadius: "2px",
  }
});


function ListOutput(props) {
  const { classes } = props;
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const listKeys = Object.keys(list);
  return (
    <React.Fragment>
      <div className={classes.root}>
        {listKeys.map(key => (
          <div className={classes.mainSection}
            // className={list[key].complete && "complete"}
            key={`listitem_${key}`}
          >
        
           
            <span  className={classes.categoryName} >{list[key].label}</span>
            <button className={classes.deleteButton}
              onClick={() => {
                dispatch(deleteItem(key));
              }}
            >
              <span>Delete</span>
            </button>
          </div>
        ))}
      </div>

    </React.Fragment>
  );
}
export default withStyles(styles)(ListOutput)