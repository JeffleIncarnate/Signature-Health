import "./contactMain.scss";

import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactMain() {
  return (
    <main className="Contact">
      <form className="Form" action="">
        <div className="Top__Wrapper">
          <div className="Top">
            <label>
              First Name<span>*</span>
            </label>
            <input type="text" name="" id="" placeholder="Bob" />

            <label>
              Last Name<span>*</span>
            </label>
            <input type="number" name="" id="" placeholder="Smith" />
          </div>

          <div className="Top">
            <label>
              Email<span>*</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="bobsmith@domain.com"
            />

            <label>Phone Number</label>
            <input type="number" name="" id="" placeholder="123 456 789" />
          </div>
        </div>

        <div className="Bottom">
          <label>
            Your Message<span>*</span>
          </label>
          <textarea placeholder="What I want to ask you is..."></textarea>
          <p>
            By submitting this form you agree to our terms and conditions and
            our privacy policy which explains how we may collect, use and
            disclose your personal information including to third parties.{" "}
            <strong>
              If the labal has a <span>*</span> next to it, it is required.
            </strong>
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="Icons"></div>
    </main>
  );
}
