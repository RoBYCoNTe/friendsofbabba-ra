import Component from "./Component";
import PropTypes from "prop-types";
import { SimpleList as RaSimpleList } from "react-admin";
import React from "react";
import { get } from "lodash";

/**
 * Define simple list designed to work with `ReferenceManyField` component.
 * This simple list is "componentable" like any other magic crud element.
 * You can construct your simple list by providing many options.
 *
 * @param {Object} props
 * @param {String|Boolean|Function} props.linkType
 *  The type of link to use for the list.
 *  It can be:
 *   - a function referencing record: `(record, id) => link`;
 *   - false to disable links: `false`;
 *   - static string;
 *
 * @param {String} props.primarySource
 *  Name of the primary source to display.
 *  If no component is provided (`primaryComponent`),
 *  the primary source will be displayed as a string.
 *
 * @param {String} props.primaryComponent
 *  Name of the primary component to display.
 *  If specified, the component will receive the primary source as a prop
 *  and will be responsible for rendering the primary source.
 *
 * @param {Object|null} props.primaryComponentProps
 *  Additional props to pass to the primary component.
 *
 * @param {String|null} props.secondarySource
 *  Name of the secondary source to display.
 *  If no component is provided (`secondaryComponent`),
 *  the secondary source will be displayed as a string.
 *
 * @param {String|null} props.secondaryComponent
 *  Name of the secondary component to display.
 *  If specified, the component will receive the secondary source as a prop
 *  and will be responsible for rendering the secondary source.
 *
 * @param {Object|null} props.secondaryComponentProps
 *  Additional props to pass to the secondary component.
 *
 * @param {String|null} props.tertiarySource
 *  Name of the tertiary source to display.
 *  If no component is provided (`tertiaryComponent`),
 *  the tertiary source will be displayed as a string.
 *
 * @param {String|null} props.tertiaryComponent
 *  Name of the tertiary component to display.
 *  If specified, the component will receive the tertiary source as a prop
 *  and will be responsible for rendering the tertiary source.
 *
 * @param {Object|null} props.tertiaryComponentProps
 *  Additional props to pass to the tertiary component.
 *
 * @param {Object} components
 *  A dictionary of components renderable by name.
 *
 * @returns {JSX.Element}
 *
 * @example
 *  // Display list with custom component for the date.
 * 	<SimpleList
 *    linkType={(record, id) => `example/${id}`}
 *    primarySource="name"
 *    secondarySource="created"
 *    secondaryComponent="DateField"
 *    secondaryComponentProps={{ showTime: true }}
 *
 *    components={{
 *      DateField
 *    }}
 *  />
 */
const SimpleList = ({
  linkType = undefined,
  primaryComponent = undefined,
  primaryComponentProps = undefined,
  primarySource,
  secondaryComponent,
  secondaryComponentProps,
  secondarySource,
  tertiaryComponent,
  tertiaryComponentProps,
  tertiarySource,
  components,
  ...props
}) => {
  return (
    <RaSimpleList
      {...props}
      primaryText={(record) =>
        primaryComponent ? (
          <Component
            record={record}
            source={primarySource}
            componentProps={primaryComponentProps}
            component={primaryComponent}
            components={components}
          />
        ) : (
          get(record, primarySource)
        )
      }
      secondaryText={(record) =>
        secondaryComponent ? (
          <Component
            record={record}
            source={secondarySource}
            component={secondaryComponent}
            componentProps={{
              ...secondaryComponentProps,
              addLabel: false,
            }}
            components={components}
          />
        ) : (
          get(record, secondarySource)
        )
      }
      tertiaryText={(record) =>
        tertiaryComponent ? (
          <Component
            record={record}
            source={tertiarySource}
            component={tertiaryComponent}
            componentProps={tertiaryComponentProps}
            components={components}
          />
        ) : (
          get(record, tertiarySource)
        )
      }
      linkType={linkType}
    />
  );
};

export default SimpleList;

const SimpleListProps = SimpleList;
SimpleListProps.propTypes = {
  linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  primarySource: PropTypes.string.isRequired,
  secondarySource: PropTypes.string,
  tertiarySource: PropTypes.string,
};
