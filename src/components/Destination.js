import Mountain1 from "./assets/1.jpg";
import Mountain2 from "./assets/2.jpg";
import Mountain3 from "./assets/3.jpg";
import Mountain4 from "./assets/5.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Explore the most beautiful Destination With us</p>

      <DestinationData
        className="first-des"
        heading="Dal lake, Srinagar"
        text="Dal Lake is one of the most picturesque lakes in Jammu and Kashmir.
      It is also regarded as the “jewel in the crown of Kashmir.” It is
      located in the centre of Srinagar, Jammu & Kashmir. This urban lake
      is an integral part of recreation and tourism in Kashmir. It has
      become an icon of Kashmir’s tourism sector. It is also the
      second-largest lake in Jammu and Kashmir, with a slew of gardens and
      orchards lining its shores. Houseboats are an indelible feature of
      the scenery of the Dal Lake, always ready to take guests on a
      romantic and tranquil journey around the lake and soothe their
      nerves as the houseboat floats over the gently rippling waves. They
      also offer some of the most exotic views of the breathtaking
      landscape of Dal Lake. The glittering, calm waters of Dal, bordered
      on three sides by snow-capped mountains, surely make it one of the
      most magnificent lakes in India."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Gulmarg ,Kashmir"
        text="Gulmarg literally means “Meadow of flowers”. Gulmarg is located 60 KMs away from Srinagar which is an hour and half journey by car. Gulmarg has attracted millions of tourists throughout its existence with the scenic beauty of the Himalayan Mountains in the back drop. One of the main attractions in Gulmarg is the Gulmarg Gondola, the Highest Cable Car in the world. The 1st phase of the Gondola takes tourists to the height of 8530 ft to Kongdori Station and the second stage of the Gondola goes up to the height of 12293 ft. Tourists can enjoy horse Riding and can go riding to the magnificent “Strawberry Valley” , Leopards Valley and ride up to “Kongdori” to see the frozen lake of “Al- Pathar”. Gulmarg in winter is a magnificent experience, fully covered in a white blanket of Snow which turns it into a skiers paradise. The natural slopes here are untouched and prove to be a challenge to ace skiers! Besides the scenic side to Gulmarg, winter time in Gulmarg is a season of festivities with celebrations of “White Christmas” and New Year parties."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
