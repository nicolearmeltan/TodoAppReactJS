import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import myStyles from "../styles/styles";
import Checkbox from "@material-ui/core/Checkbox";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Divider } from "@material-ui/core";
import TooltipIconButton from "./TooltipIconButton";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import Input from "@material-ui/core/Input";

const SummaryList = ({
  todos,
  checked,
  toggleCheck,
  editMode,
  setEditMode,
  editText,
  setEditText,
  editSubmit
}) => {
  const styles = myStyles();
  return (
    <List className={clsx(styles.flex, styles.width100)}>
      {todos.map((value, index) => (
        <div className={styles.width80} key={index}>
          <ListItem
            role={undefined}
            dense
            button
            onClick={!value.editMode ? toggleCheck(value.text) : null}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value.text) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": value.text }}
              />
            </ListItemIcon>
            {value.editMode ? (
              <Input
                id="editInput"
                type="text"
                className={styles.width80}
                value={editText}
                onChange={setEditText}
              />
            ) : (
              <ListItemText id={value} primary={value.text} />
            )}
            <ListItemSecondaryAction>
              <TooltipIconButton
                buttons={[
                  {
                    ...(value.editMode && {
                      title: "Submit",
                      icon: <CheckCircleOutlineRoundedIcon />,
                      click: () => setEditMode(value, index),
                      color: styles.submit
                    })
                  },
                  {
                    title: !value.editMode ? "Edit" : "Cancel",
                    icon: !value.editMode ? (
                      <EditOutlinedIcon />
                    ) : (
                      <CancelOutlinedIcon />
                    ),
                    click: () => setEditMode(value, index),
                    color: !value.editMode ? styles.edit : styles.cancel
                  }
                ]}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default SummaryList;
