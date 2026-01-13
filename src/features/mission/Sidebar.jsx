export default function Sidebar() {
  return (
    <aside className="order-2 md:order-2 min-w-0 rounded-2xl bg-gray-900/60 border border-white/10 p-4">
      <header className="mb-4">
        <p className="text-xs tracking-widest opacity-70">MISSION</p>
        <h2 className="text-lg font-semibold">Kontrol Paneli</h2>
      </header>

      <div className="space-y-3">
        <div className="rounded-xl bg-black/30 border border-white/10 p-3">
          <p className="text-sm opacity-80">Bağlantı</p>
          <p className="text-xl font-semibold">Connected ✅</p>
        </div>

        <div className="rounded-xl bg-black/30 border border-white/10 p-3">
          <p className="text-sm opacity-80">Telemetri</p>
          <p className="text-sm opacity-70">Hız / İrtifa burada görünecek</p>
        </div>

        <div className="rounded-xl bg-black/30 border border-white/10 p-3">
          <p className="text-sm opacity-80">Waypoints</p>
          <p className="text-sm opacity-70">Liste burada olacak</p>
        </div>
      </div>
    </aside>
  );
}
