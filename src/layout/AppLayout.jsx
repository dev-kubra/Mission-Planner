import MapView from "../features/map/MapView";
import Sidebar from "../features/mission/Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl p-4">
        <div className="grid gap-4 md:grid-cols-12 items-stretch">
          <div className="md:col-span-8">
            <MapView />
          </div>

          <div className="md:col-span-4">
            <Sidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
