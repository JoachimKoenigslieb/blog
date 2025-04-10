"use client";
// app/routes/index.tsx
import { useEffect, useState } from "react";
import { COORDINATE_SYSTEM } from "deck.gl";
import {
  MapboxOverlay as DeckOverlay,
  MapboxOverlayProps,
} from "@deck.gl/mapbox";
import { BitmapLayer } from "@deck.gl/layers";
import "maplibre-gl/dist/maplibre-gl.css";
import { Map, NavigationControl, useControl } from "react-map-gl/maplibre";
import { decodeGRIB2File, getImgElement } from "@/utils/grib2utils";

function DeckGLOverlay(props: MapboxOverlayProps) {
  const overlay = useControl(() => new DeckOverlay(props));
  overlay.setProps(props);
  return null;
}

export function GribMap() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const layers = [
    ...[
      imgSrc
        ? new BitmapLayer({
            id: "BitmapLayer",
            // bounds: [36.914063, 33, 346.007813, 67.875],
            bounds: [346.007813 - 360, 33, 36.914063, 67.875],
            image: imgSrc,
            pickable: true,
            opacity: 0.6,
            textureParameters: {
              minFilter: "nearest",
              magFilter: "nearest",
            },
            coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
          })
        : undefined,
    ],
  ];

  useEffect(() => {
    (async () => {
      const data = await fetch("/blog/EU-ground-temperature.grib2");
      const buffer = await data.arrayBuffer();
      const [grib2] = decodeGRIB2File(buffer);

      if (grib2) {
        const img = getImgElement(grib2.data);

        // Convert HTMLImageElement to data URL or src
        if (img) {
          setImgSrc(img.src);
        }
      }
    })();
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: 15,
        latitude: 55,
        zoom: 2,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <DeckGLOverlay layers={layers} /* interleaved*/ />
      <NavigationControl position="top-left" />
    </Map>
  );
}
