import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "./assets/6.jpg";
import Trip2 from "./assets/7.jpg";
import Trip3 from "./assets/8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Best Places to visit</h1>
      <p>
        With Us We Will Make Sure, You Visit The Best Places At Affordable Rates
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Pahalgam"
          text="Surrounded by beautiful hills and lots of greenery, Pahalgam is situated at an altitude of 2,130 m. The climate is not too harsh and the sight of the stunning Lidder River flowing through the town is beautiful.Pahalgam is situated at the junction of the Aru and Sheshnag Rivers and surrounded by tall fir-covered mountains and snow-clad peaks forming a spectacular sight."
        />

        <TripData
          image={Trip3}
          heading="Gulmarg"
          text="Nestled in the Pir Panjal Range in a cup-shaped valley, Gulmarg has been specially touched by nature’s splendid hand, and is a place which the gods would also love to visit. This magnificent tourist destination in the valley of Kashmir is great for both a family, honeymoon and snow adventure sports lovers. Dubbed as one the best skiing destinations in India."
        />

        <TripData
          image={Trip2}
          heading="Sonmarg"
          text="Sonamarg, which means ‘meadow of gold’ has, as its backdrop, snowy mountains against a cerulean sky. The Sindh meanders along here and abounds with trout and mahseer, snow trout can be caught in the main river. In late April when Sonamarg is open for road transport, the visitors can have access to snow which is furnished all over like a white carpet. Psitors have to hire taxi."
        />
      </div>
    </div>
  );
}
export default Trip;
