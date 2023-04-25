import world from "../src/world.png";

export default function TravelApp({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imagePhoto,
  mapIcon,
}: any) {
  return (
    <>
      <div className="container section">
        <div className="row">
          <div className="img-col">
            <img src={imagePhoto} />
          </div>
          <div className="words-col">
            <div>
              <span className="mapicon">
                <img src={mapIcon} />
              </span>
              <span className="location">{location}</span>
              <span className="google-color">
                <a href={googleMapsUrl}>{googleMapsUrl}</a>
              </span>
              <h2>{title}</h2>
            </div>

            <div className="date">
              <span className="date-1">{startDate}</span>
              <span className="date-1">{endDate}</span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
