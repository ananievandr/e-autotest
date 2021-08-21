import React from "react";
import { Typography } from "@material-ui/core";

interface ComponentProps {
  label: React.ReactNode;
  input?: React.ReactNode;
  required?: boolean;
  labelVariant?: string;
  helperText?: string;
}

function FormControl(props: ComponentProps) {
  return (
    <div className="form-control">
      <Typography
        variant={(props.labelVariant as any) || "body2"}
        // variant=""
        color="textPrimary"
        gutterBottom={true}
      >
        {props.label}
        {props.required && (
          <Typography variant="inherit" component="span" color="primary">
            *
          </Typography>
        )}
      </Typography>
      {props.input}
      {props.helperText && <div className="error-helper-text">{props.helperText}</div>}
    </div>
  );
}

export default FormControl;
