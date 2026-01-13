import L from "leaflet";

export const uavIcon = L.divIcon({
  className: "uav-marker",
  html: `
    <div class="uav-dot">
      <div class="uav-arrow"></div>
    </div>
  `,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
});
