import {
  Datagrid,
  DateField,
  Labeled,
  Pagination,
  ReferenceManyField,
  SimpleList,
  TextField,
} from "react-admin";
import React, { useContext, useMemo } from "react";

import StateField from "./StateField";
import TransactionNotesField from "./TransactionNotesField";
import { WorkflowContext } from "data/workflow/WorkflowContext";
import { get } from "lodash";
import useFieldLabel from "./useFieldLabel";
import { useMediaQuery } from "@material-ui/core";

const PaginationWrapper = ({ fullWidth, addLabel, ...props }) => (
  <Pagination {...props} />
);

const TransactionLogsField = ({ admin = false, label, ...props }) => {
  const { getWorkflow } = useContext(WorkflowContext);
  const mobileBreakpoint = useMemo(
    () => get(props, "mobileBreakpoint", "sm"),
    [props]
  );
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.down(mobileBreakpoint ?? "sm")
  );
  const fieldLabel = useFieldLabel({ resource: "transactions" });
  const workflow = useMemo(
    () => getWorkflow(props.resource),
    [getWorkflow, props.resource]
  );
  const id = useMemo(() => get(props, "record.id", 0), [props]);
  if (!workflow || id === 0) {
    return null;
  }

  const content = (
    <ReferenceManyField
      perPage={5}
      pagination={<PaginationWrapper />}
      reference={`workflow/transactions/${props.resource}`}
      sort={{ field: "Transactions.created", order: "desc" }}
      {...props}
      source="id"
      target="id"
    >
      {isMobile ? (
        <SimpleList
          primaryText={(record) => (
            <DateField
              label={fieldLabel("created")}
              record={record}
              source="created"
              showTime
            />
          )}
          secondaryText={(record) => (
            <TransactionNotesField
              record={record}
              component="span"
              label={fieldLabel("notes")}
              source="notes"
              admin={admin}
              sortable={false}
              maxRows={6}
            />
          )}
          linkType={false}
        />
      ) : (
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
            maxRows={6}
          />
          <StateField label={fieldLabel("state")} sortBy="Transactions.state" />
        </Datagrid>
      )}
    </ReferenceManyField>
  );
  return props?.addLabel !== false ? (
    <Labeled {...props} label={props?.label} fullWidth={props?.fullWidth}>
      {content}
    </Labeled>
  ) : (
    content
  );
};

export default TransactionLogsField;
