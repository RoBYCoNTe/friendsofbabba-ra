import {
  Badge,
  Box,
  Link,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { StyledVerticalIcon, StyledVerticalItem } from "./styles";

import PropTypes from "prop-types";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslate } from "react-admin";

const MenuVerticalItem = ({ item, open, active, ...other }) => {
  const translate = useTranslate();
  const { name, icon: Icon, disabled, path, caption, badge } = item;

  const renderContent = (
    <StyledVerticalItem
      depth={1}
      active={active}
      disabled={disabled}
      caption={!!caption}
      {...other}
    >
      {Icon && <StyledVerticalIcon>{<Icon />}</StyledVerticalIcon>}
      <ListItemText
        primary={translate(`menu.items.${name}`)}
        secondary={
          caption && (
            <Tooltip
              title={translate(`menu.items.${name}.caption`)}
              placement="top-start"
            >
              <Typography
                component="span"
                textTransform="none"
                variant="caption"
              >
                {translate(`menu.items.${name}.caption`)}
              </Typography>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          component: "span",
          variant: active ? "subtitle2" : "body2",
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: "caption",
        }}
      />
      {badge?.value && badge?.value > 0 ? (
        <Box component="span" sx={{ lineHeight: 0 }}>
          <Badge
            badgeContent={badge.value}
            color={badge?.color || "primary"}
            variant={badge?.variant}
            sx={{ marginRight: 1 }}
          />
        </Box>
      ) : null}
    </StyledVerticalItem>
  );

  return (
    <Link component={RouterLink} to={path} underline="none">
      {renderContent}
    </Link>
  );
};

MenuVerticalItem.propTypes = {
  open: PropTypes.bool,
  active: PropTypes.bool,
  item: PropTypes.object,
};

export default MenuVerticalItem;
