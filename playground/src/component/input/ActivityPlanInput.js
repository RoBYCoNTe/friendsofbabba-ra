import {
  BooleanInput,
  DebouncedTextInput,
  Group,
  GroupItem,
  GroupTitle,
  MediaInput,
  useFieldLabel,
  useWorkflowInput,
} from "friendsofbabba-ra";
import React, { useCallback, useMemo } from "react";

import DayOfWeekInput from "./DayOfWeekInput";
import { Fragment } from "react";
import MoneyInput from "./MoneyInput";
import WorkingHoursInput from "./WorkingHoursInput";
import { get } from "lodash";
import { maxValue } from "ra-core";
import { useFormState } from "react-final-form";

const CostGroup = ({ source, fieldSource, fieldLabel, ...props }) => {
  return (
    <Group {...props} fullWidth>
      <GroupItem lg={3} md={3} sm={3} xs={12}>
        <MoneyInput
          source={fieldSource(`${source}_cost`)}
          label={fieldLabel(`${source}_cost`)}
          helperText={fieldLabel(`${source}_cost.help`)}
          validate={maxValue(30000)}
        />
      </GroupItem>
      <GroupItem lg={9} md={9} sm={9} xs={12}>
        <DebouncedTextInput
          source={fieldSource(`${source}_desc`)}
          label={fieldLabel(`${source}_desc`)}
          maxLength={200}
          multiline
        />
      </GroupItem>
    </Group>
  );
};

const CostListGroup = ({ fieldSource, fieldLabel, ...props }) => {
  const { disabled } = useWorkflowInput({
    ...props,
    source: "activity_plan.costs",
  });
  return (
    <Group wrapper {...props}>
      <GroupTitle
        title={fieldLabel("costs")}
        subTitle={fieldLabel("costs.help")}
      />
      {["execution", "staff", "supplies", "promotion", "additional"].map(
        (source) => (
          <CostGroup
            key={source}
            source={source}
            fieldSource={fieldSource}
            fieldLabel={fieldLabel}
            disabled={disabled}
          />
        )
      )}
    </Group>
  );
};

const PlanGroup = ({ fieldSource, fieldLabel, ...props }) => {
  const { disabled } = useWorkflowInput({
    ...props,
    source: "activity_plan.plan",
  });
  return (
    <Group wrapper {...props}>
      <GroupTitle title={fieldLabel("plan")} />

      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            label={fieldLabel("description_of_context")}
            source={fieldSource("description_of_context")}
            helperText={fieldSource("description_of_context.help")}
            maxLength={800}
            multiline
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            label={fieldLabel("description_of_plan")}
            source={fieldSource("description_of_plan")}
            helperText={fieldLabel("description_of_plan.help")}
            maxLength={800}
            multiline
            disabled={disabled}
          />
        </GroupItem>
      </Group>
    </Group>
  );
};

const CalendarGroup = ({ fieldSource, fieldLabel, ...props }) => {
  const { disabled } = useWorkflowInput({
    ...props,
    source: "activity_plan.calendar",
  });
  return (
    <Group wrapper {...props}>
      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            label={fieldLabel("description_of_calendar")}
            source={fieldSource("description_of_calendar")}
            helperText={fieldLabel("description_of_calendar.help")}
            maxLength={800}
            multiline
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <GroupTitle
        title={fieldLabel("activity_plan_calendar_days_and_hours")}
        subTitle={fieldLabel("activity_plan_calendar_days_and_hours.help")}
      />
      <Group fullWidth>
        <GroupItem>
          <DayOfWeekInput
            label={fieldLabel("number_of_days")}
            source={fieldSource("number_of_days")}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <WorkingHoursInput
            label={fieldLabel("number_of_hours")}
            source={fieldSource("number_of_hours")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
    </Group>
  );
};

const PromotionAndMonitoringGroup = ({ fieldSource, fieldLabel, ...props }) => {
  const { disabled } = useWorkflowInput({
    ...props,
    source: "activity_plan.promotion_and_monitoring",
  });
  return (
    <Group wrapper {...props}>
      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            label={fieldLabel("description_of_promotion")}
            source={fieldSource("description_of_promotion")}
            helperText={fieldLabel("description_of_promotion.help")}
            maxLength={800}
            multiline
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            label={fieldLabel("description_of_monitoring")}
            source={fieldSource("description_of_monitoring")}
            helperText={fieldLabel("description_of_monitoring.help")}
            maxLength={800}
            multiline
            disabled={disabled}
          />
        </GroupItem>
      </Group>
    </Group>
  );
};

const CivilServiceGroup = ({ fieldSource, fieldLabel, ...props }) => {
  const { disabled } = useWorkflowInput({
    ...props,
    source: "activity_plan.civil_service",
  });
  const { values } = useFormState({ subscription: { values: true } });
  const isCivilServiceReady = useMemo(
    () => get(values, fieldSource("is_civil_service_ready")),
    [values, fieldSource]
  );
  return (
    <Group wrapper {...props}>
      <GroupTitle title={fieldLabel("activity_plan_civil_service")} />
      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <BooleanInput
            source={fieldSource("is_civil_service_ready")}
            label={fieldLabel("is_civil_service_ready")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      {isCivilServiceReady && (
        <Group wrapper fullWidth>
          <Group>
            <GroupItem lg={8} md={10} sm={12}>
              <DebouncedTextInput
                label={fieldLabel("civil_referent")}
                source={fieldSource("civil_referent")}
                helperText={fieldLabel("civil_referent.help")}
                maxLength={200}
                disabled={disabled}
              />
            </GroupItem>
            <GroupItem lg={8} md={10} sm={12}>
              <DebouncedTextInput
                label={fieldLabel("civil_operator")}
                source={fieldSource("civil_operator")}
                helperText={fieldLabel("civil_operator.help")}
                maxLength={200}
                disabled={disabled}
              />
            </GroupItem>
            <GroupItem lg={8} md={10} sm={12}>
              <DebouncedTextInput
                label={fieldLabel("civil_experience")}
                source={fieldSource("civil_experience")}
                helperText={fieldLabel("civil_experience.help")}
                maxLength={500}
                multiline
                disabled={disabled}
              />
            </GroupItem>
            <GroupItem lg={12} md={12} sm={12}>
              <MediaInput
                label={fieldLabel("civil_agreement_media")}
                source={fieldSource("civil_agreement_media")}
                helperText={fieldLabel("civil_agreement_media.help")}
                title="filename"
                disabled={disabled}
              />
            </GroupItem>
          </Group>
        </Group>
      )}
    </Group>
  );
};

const ActivityPlanInput = (props) => {
  const fieldLabel = useFieldLabel({ resource: "activity-plans" });
  const fieldSource = useCallback(
    (source) => `${props.source}.${source}`,
    [props.source]
  );

  return (
    <Fragment>
      <PlanGroup {...props} fieldLabel={fieldLabel} fieldSource={fieldSource} />
      <CostListGroup
        {...props}
        fieldLabel={fieldLabel}
        fieldSource={fieldSource}
      />
      <CalendarGroup
        {...props}
        fieldLabel={fieldLabel}
        fieldSource={fieldSource}
      />
      <PromotionAndMonitoringGroup
        {...props}
        fieldLabel={fieldLabel}
        fieldSource={fieldSource}
      />
      <CivilServiceGroup
        {...props}
        fieldLabel={fieldLabel}
        fieldSource={fieldSource}
      />
    </Fragment>
  );
};

export default ActivityPlanInput;
