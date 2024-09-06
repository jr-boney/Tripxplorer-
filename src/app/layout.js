import MapComponent from "./components/Map";

export default function Layout({ children }) {
  return (
    <div>
      <header>My Travel App</header>
      <MapComponent />
      <main>{children}</main>
      <footer>Footer Information</footer>
    </div>
  );
}
