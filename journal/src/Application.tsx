import Header from "./Header";
import Travel_data from "./Travel_data";
import TravelApp from "./TravelApp";
import earth from "../src/earth-globe.png";
export default function Application() {
  const travels = Travel_data.map((dest) => {
    return (
      <TravelApp
        title={dest.title}
        location={dest.Location}
        googleMapsUrl={dest.googleMapsUrl}
        startDate={dest.startDate}
        endDate={dest.endDate}
        description={dest.description}
        imagePhoto={dest.imagePhoto}
        mapIcon={dest.mapIcon}
      />
    );
  });
  return (
    <>
      <div>
        <Header image={earth} />
        {travels}
      </div>
    </>
  );
}
