import {
  Datagrid,
  DateField,
  Pagination,
  ReferenceManyField,
  TextField,
} from "react-admin";
import React, { Fragment, useContext, useMemo } from "react";
import { Typography, Divider } from "@material-ui/core";
import TransactionNotesField from "./TransactionNotesField";
import StateField from "./StateField";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import useFieldLabel from "./useFieldLabel";

const PaginationWrapper = ({ fullWidth, addLabel, ...props }) => (
  <Pagination {...props} />
);

const TransactionLogsField = ({ admin = false, label, ...props }) => {
  const { getWorkflow } = useContext(WorkflowContext);
  const fieldLabel = useFieldLabel({ resource: "transactions" });
  const workflow = useMemo(
    () => getWorkflow(props.resource),
    [getWorkflow, props.resource]
  );
  if (!workflow || !props.record) {
    return null;
  }

  return (
    <Fragment>
      <br />
      {label && (
        <Typography variant="subtitle1" gutterBottom>
          {label}
        </Typography>
      )}
      {label && <Divider />}
      <ReferenceManyField
        perPage={5}
        pagination={<PaginationWrapper />}
        reference={`workflow/transactions/${props.resource}`}
        sort={{ field: "Transactions.created", order: "desc" }}
        {...props}
        source="id"
        target="id"
      >
        <Datagrid>
          {admin && <TextField label={fieldLabel("id")} source="id" />}
          <DateField
            label={fieldLabel("created")}
            source="created"
            showTime
            sortBy="Transactions.created"
          />
          <TextField
            label={fieldLabel("user")}
            source="user.name"
            sortBy="Users.username"
          />
          <TransactionNotesField
            label={fieldLabel("notes")}
            source="notes"
            admin={admin}
            sortable={false}
          />
          <StateField label={fieldLabel("state")} sortBy="Transactions.state" />
        </Datagrid>
      </ReferenceManyField>
      <br />
    </Fragment>
  );
};

export default TransactionLogsField;
