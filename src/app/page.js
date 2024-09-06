// src/app/page.js
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Explore Your Route</h1>
      <MapComponent />
    </div>
  );
}
