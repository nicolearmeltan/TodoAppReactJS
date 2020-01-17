import React from "react";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import TooltipIconButton from "./TooltipIconButton";
import myStyles from '../styles/styles';

const AddToList = ({clickHandler, newText, setNewText, todosCount, checked}) => {
  const styles = myStyles();
  console.log(checked.length);
  let mainButtons = [
    { title: "Add", icon: <AddCircleOutlineOutlinedIcon />, click: clickHandler[0], color: styles.add},
    { title: "Delete", icon: <DeleteOutlineOutlinedIcon />, click: clickHandler[1], color: styles.delete, disabled: checked.length <= 0}
  ];
  return (
      <FormControl className={clsx(styles.margin, styles.textField)}>
        <Input
          id="inputList"
          type="text"
          value={newText}
          placeholder="Add to List"
          onChange={event => setNewText(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <FormatListBulletedOutlinedIcon
                className={styles.marginPrefix}
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <TooltipIconButton buttons={mainButtons}/>
            </InputAdornment>
          }
        />
      </FormControl>
  );
};

export default AddToList;
