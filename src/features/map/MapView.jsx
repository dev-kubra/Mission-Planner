import { useEffect,useState } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import { uavIcon } from "./uavIcon";

/**
 * Leaflet bazen container boyutu değişince kendini yeniden çizmez.
 * ResizeObserver ile harita container'ı ne zaman ölçü değiştirirse
 * invalidateSize() çağırıp haritayı "kendine getiriyoruz".
 */
function AutoResizeMap() {
  const map = useMap();

  useEffect(() => {
    const el = map.getContainer(); // Leaflet'in render ettiği <div class="leaflet-container">

    // İlk anda da bir kez ölçüm yaptır (bazı durumlarda şart)
    setTimeout(() => map.invalidateSize(), 0);

    const ro = new ResizeObserver(() => {
      map.invalidateSize();
    });

    ro.observe(el);

    return () => ro.disconnect();
  }, [map]);

  return null;
}

function FollowUav({ position, enabled }) {
  const map = useMap();

  useEffect(() => {
    if (!enabled) return;
    map.setView(position, map.getZoom(), { animate: true });
  }, [map, position, enabled]);

  return null;
}


export default function MapView() {

  const [position, setPosition] = useState([39.9334, 32.8597]); // başlangıç: Ankara
  const [follow, setFollow] = useState(true);



  useEffect(() => {
  const id = setInterval(() => {
    setPosition((prev) => {
      const [lat, lng] = prev;

      // Çok küçük bir hareket (yaklaşık birkaç metre)
      const nextLat = lat + (Math.random() - 0.5) * 0.002;
      const nextLng = lng + (Math.random() - 0.5) * 0.002;

      return [nextLat, nextLng];
    });
  }, 1500); // 1.5 saniyede bir güncelle

  return () => clearInterval(id);
}, []);

  return (
    <div className="ring-2 ring-red-500 relative order-1 md:order-1 min-w-0 h-[70vh] md:h-[calc(100vh-2rem)] rounded-2xl overflow-hidden border border-white/10 bg-gray-900/40">

      {/* Teşhis etiketi: geniş ekranda harita yok dediğinde bunu görüyor musun? */}
      <div className="absolute left-3 top-3 z-[9999] rounded-lg bg-black/60 px-3 py-1 text-xs">
        MAP AREA
      </div>
      <button onClick={() => setFollow((f) => !f)} className="absolute right-3 top-3 z-[9999] rounded-lg bg-black/60 px-3 py-1 text-xs hover:bg-black/80">
        Follow: {follow ? "ON" : "OFF"}
      </button>

      <MapContainer
        center={position}
        zoom={13}
        className="h-full w-full"
      >
        <AutoResizeMap />

        <FollowUav position={position} enabled={follow} />


        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        

        <Marker position={position} icon={uavIcon} />


      </MapContainer>
    </div>
  );
}
