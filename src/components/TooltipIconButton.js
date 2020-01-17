import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import myStyles from "../styles/styles";

const TooltipIconButton = ({ buttons, value, iconIndex }) => {
  const styles = myStyles();
  return buttons.map((item, index) =>
    item.disabled ? (
      <IconButton
        key={index}
        className={styles.mainButtonSpacing}
        disabled={item.disabled}
      >
        {item.icon}
      </IconButton>
    ) : Object.keys(item).length > 0 ? (
      <Tooltip key={index} title={item.title} arrow>
        <IconButton
          className={clsx(
            styles.mainButtonSpacing,
            item.color ? item.color : null
          )}
          disabled={item.disabled}
          onClick={() => item.click(value, iconIndex)}
        >
          {item.icon}
        </IconButton>
      </Tooltip>
    ) : null
  );
};

export default TooltipIconButton;
