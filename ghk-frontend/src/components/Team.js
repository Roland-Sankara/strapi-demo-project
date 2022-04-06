import React, { useState } from "react";
import "./Teams.css";

function Team() {
  const [active, setActive] = useState(true);

  return (
    <div>
      <div className="team_title" onClick={() => setActive(!active)}>
        <h3>G 09/10</h3>
        <span className={active ? "icon active" : "icon"}>
          <img src={process.env.PUBLIC_URL + "down_arrow.svg"} />
        </span>
      </div>

      <div className={active ? "team_content active" : "team_content"}>
        <h3 className="team_heading">G 09/10</h3>

        <div className="_flex">
          <ul className="team_list">
            <li>
              <h5>Ola Nordmann</h5>
              <p>Trener</p>
              <p>12345678</p>
              <p>ola.nordmann@example.com</p>
            </li>

            <li>
              <h5>Kari Nordmann</h5>
              <p>Assistenttrener</p>
              <p>12345678</p>
              <p>kari.nordmann@example.com</p>
            </li>

            <li>
              <h5>John Doe</h5>
              <p>Foreldrekontakt</p>
              <p>12345678</p>
              <p>john.doe@example.com</p>
            </li>
          </ul>

          <img
            src={process.env.PUBLIC_URL + "team-image.jpg"}
            alt="Team Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
