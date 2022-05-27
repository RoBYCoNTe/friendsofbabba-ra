import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useForm, useFormState } from "react-final-form";

import { Chip } from "@material-ui/core";
import { Labeled } from "react-admin";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import RoomIcon from "@material-ui/icons/Room";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { divIcon } from "leaflet";
import { get } from "lodash";
import { makeStyles } from "@material-ui/styles";
import { renderToString } from "react-dom/server";
import { useFieldLabel } from "friendsofbabba-ra";
import { useSelector } from "react-redux";
import { useTabVisibility } from "friendsofbabba-ra";

const useStyles = makeStyles((theme) => ({
  map: {
    height: 400,
    marginBottom: theme.spacing(1),
    width: "100%",
    borderRadius: theme.spacing(1),
  },
  llz: {
    float: "right",
    "& .MuiChip-root": {
      marginLeft: theme.spacing(1),
    },
  },
}));
const PositionMarker = ({ position, onClick }) => {
  useMapEvents({
    click(e) {
      onClick(e);
    },
  });
  const icon = divIcon({
    className: `transparent`,
    html: renderToString(
      <RoomIcon fontSize="large" style={{ fontSize: "80px !important" }} />
    ),
    iconAnchor: [40, 70],
  });
  return position === null ? null : <Marker position={position} icon={icon} />;
};
const MapInput = ({
  fullWidth,
  center = [40.842692, 17.055715],
  zoom = 8,
  disabled,
  ...props
}) => {
  const fieldLabel = useFieldLabel({ ...props });
  const classes = useStyles();
  const form = useForm();
  const { values } = useFormState({ subscription: { values: true } });
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const municipalities = useSelector((state) => {
    const resourceData = state?.admin?.resources?.municipalities?.data;
    const records = Object.keys(resourceData).map((id) => resourceData[id]);
    return records;
  });
  const [map, setMap] = useState(null);
  const { mapLat, mapLng, mapZoom, municipalityId } = useMemo(
    () => ({
      mapLat: get(values, "map_lat", center[0]) || center[0],
      mapLng: get(values, "map_lng", center[1]) || center[1],
      mapZoom: get(values, "map_zoom", zoom) || zoom,
      municipalityId: get(values, "municipality_id"),
    }),
    [values, center, zoom]
  );
  useEffect(() => {
    if (loading || loaded) {
      return;
    }
    const municipality = municipalities.find((m) => m.id === municipalityId);
    if (!municipality) {
      return;
    }

    async function resolvePosition() {
      setLoading(true);
      const provider = new OpenStreetMapProvider();
      const results = await provider.search({ query: municipality.name });
      const firstMatch = results.length > 0 ? results[0] : null;
      setLoading(false);
      setLoaded(true);
      if (firstMatch === null) {
        return;
      }
      form.batch(() => {
        form.change("map_query", firstMatch.label);
        form.change("map_lat", firstMatch.y);
        form.change("map_lng", firstMatch.x);
        form.change("map_zoom", 10);
      });
    }

    resolvePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [municipalities, municipalityId]);

  const handleMove = useCallback(() => {
    if (disabled) {
      return;
    }
    form.batch(() => {
      const zoom = map.getZoom();
      form.change("map_zoom", zoom);
    });
  }, [form, map, disabled]);
  const handleClick = useCallback(
    (position) => {
      if (disabled) {
        return;
      }
      form.batch(() => {
        form.change("map_lat", position.latlng.lat);
        form.change("map_lng", position.latlng.lng);
      });
    },
    [form, disabled]
  );

  useEffect(() => {
    if (!map || disabled) {
      return;
    }
    map.on("move", handleMove);
    return () => {
      // clearInterval(interval);
      map.off("move", handleMove);
    };
  }, [map, disabled, handleMove]);

  const visible = useTabVisibility(0);
  useEffect(() => {
    if (map && visible) {
      map.invalidateSize();
    }
  }, [map, visible]);
  return (
    <Labeled label={fieldLabel(props.source)} fullWidth>
      <Fragment>
        <MapContainer
          center={[mapLat, mapLng]}
          zoom={mapZoom}
          className={classes.map}
          whenCreated={setMap}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <PositionMarker position={[mapLat, mapLng]} onClick={handleClick} />
        </MapContainer>
        {mapLat && mapLng && (
          <div className={classes.llz}>
            <Chip label={mapLat} />
            <Chip label={mapLng} />
            <Chip icon={<ZoomInIcon />} label={mapZoom} />
          </div>
        )}
      </Fragment>
    </Labeled>
  );
};

export default MapInput;
