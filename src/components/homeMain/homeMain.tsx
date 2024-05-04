import "./homeMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandshake,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const HomeMain = () => {
  return (
    <main className="HomeMain">
      <div className="Mission">
        <div className="Mission__Image">
          <img src="/pictures/homeImage.jpeg" alt="" />
        </div>
        <div className="Mission__Text">
          <h2>MISSION</h2>
          <p>
            Our mission is to enable our clients to continue living enriched
            lives within our communities, in comfort of their homes and
            surrounded by their whanau.
          </p>
        </div>
      </div>

      <div className="Values">
        <div className="Values__Wrapper">
          <div className="Value">
            <FontAwesomeIcon className="Value__Icon" icon={faHeart} />
            <h3>Compassion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, libero!
            </p>
          </div>

          <div className="Value">
            <FontAwesomeIcon className="Value__Icon" icon={faHandshake} />
            <h3>Trust</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, libero!
            </p>
          </div>

          <div className="Value">
            <FontAwesomeIcon className="Value__Icon" icon={faAward} />
            <h3>Excellence</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, libero!
            </p>
          </div>
        </div>
      </div>

      <div className="TeTiriti">
        <h2>HONOURING THE TE TIRITI</h2>
        <p>
          Our team is Guided by the enduring principles of Te Tiriti (The Treaty
          of Waitangi) and a steadfast commitment to Equity. We strive to
          provide exceptional home care services that reflect the values of
          Partnership, Participation and Protection outlined in the Treaty.
        </p>
      </div>
    </main>
  );
};

export default HomeMain;
