import { useState } from "react";
import "./App.css";

function App() {
  const [visibleSections, setVisibleSections] = useState(["home"]);
  const [selectedRoute, setSelectedRoute] = useState("");

  const goToSection = (section) => {
    setVisibleSections((prev) => {
      if (prev.includes(section)) {
        return prev;
      }

      return [...prev, section];
    });

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const selectRoute = (route) => {
    setSelectedRoute(route);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h4>OUTBOUND</h4>

        <div className="navlinks">
          <a onClick={() => goToSection("explore")}>EXPLORE</a>
          <a onClick={() => goToSection("missionmars")}>MISSIONS</a>
          <a onClick={() => goToSection("about")}>ABOUT</a>
        </div>
      </nav>

      {/* HOME */}
      <section className="top" id="home">
        <div>
          <h1>EXPLORE THE</h1>
          <h3>UNIVERSE</h3>
          <h2>Beyond our World</h2>

          <p>From distant planets to mysterious galaxies,</p>
          <p>step into the infinite and discover what lies beyond.</p>

          <a
            onClick={() => goToSection("explore")}
            className="explore-btn"
          >
            START EXPLORING ➔
          </a>
        </div>
      </section>

      {/* EXPLORE */}
      <section
        id="explore"
        className={
          visibleSections.includes("explore")
            ? "section-visible"
            : "section-hidden"
        }
      >
        <h2>WHERE DO YOU WANT TO GO?</h2>
        <p>Choose a destination and begin your journey.</p>

        <div className="planets-container">
          <div className="planets">
            <img src="/images/mars.jpg" alt="Mars" />
            <h3>MARS</h3>
            <p>The Red Frontier</p>

            <a
              className="entermars-btn"
              onClick={() => goToSection("entermars")}
            >
              ENTER ➔
            </a>
          </div>

          <div className="planets locked">
            <img
              src="/images/andromeda.jpeg"
              alt="Andromeda Galaxy"
            />
            <h3>ANDROMEDA</h3>
            <p>2.5M Light Years</p>
            <a className="locked-btn">COMING SOON</a>
          </div>

          <div className="planets locked">
            <img src="/images/titan.jpeg" alt="Titan" />
            <h3>TITAN</h3>
            <p>The Unknown</p>
            <a className="locked-btn">COMING SOON</a>
          </div>

          <div className="planets locked">
            <img src="/images/europa.png" alt="Europa" />
            <h3>EUROPA</h3>
            <p>Ocean World</p>
            <a className="locked-btn">COMING SOON</a>
          </div>
        </div>
      </section>

      {/* MARS */}
      <section
        id="entermars"
        className={
          visibleSections.includes("entermars")
            ? "section-visible"
            : "section-hidden"
        }
      >
        <div className="mars-destination">
          <h2>DESTINATION</h2>
          <h3>MARS</h3>
          <h4>The Red Frontier</h4>

          <p>
            Mars is the fourth planet from the Sun and one of the most explored
          </p>

          <p>
            worlds beyond Earth. Its iron-rich surface gives it its distinctive
            red appearance.
          </p>

          <a
            onClick={() => goToSection("missionmars")}
            className="missionmars-btn"
          >
            START MISSION
          </a>

          <div className="mars-info">
            <div className="info-item">
              <span className="info-icon">⌖</span>
              <div>
                <h5>DISTANCE</h5>
                <p>225.0M KM</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">◷</span>
              <div>
                <h5>TRAVEL TIME</h5>
                <p>7 MONTHS</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">◉</span>
              <div>
                <h5>TYPE</h5>
                <p>PLANET</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section
        id="missionmars"
        className={
          visibleSections.includes("missionmars")
            ? "section-visible"
            : "section-hidden"
        }
      >
        <h2>MISSIONS</h2>
        <h3>CHOOSE YOUR MISSION</h3>
        <p>Each mission is a step closer to the unknown.</p>

        <div className="mm-container">
          <div className="mm">
            <h2>MISSION 01</h2>
            <h3>Mars Reconnaissance</h3>

            <img
              src="/images/mm1.jpeg"
              alt="Mars Reconnaissance"
            />

            <p>
              Study the surface and uncover hidden secrets.
            </p>

            <a
              onClick={() => goToSection("mm1")}
              className="mission1-btn"
            >
              VIEW
            </a>
          </div>

          <div className="mm locked-mission">
            <h2>MISSION 02</h2>
            <h3>Mars Rover Survey</h3>

            <img
              src="/images/mm2.webp"
              alt="Mars Rover Survey"
            />

            <p>
              Explore the terrain and collect surface data.
            </p>

            <a className="locked-btn">LOCKED</a>
          </div>

          <div className="mm locked-mission">
            <h2>MISSION 03</h2>
            <h3>Mars Atmosphere</h3>

            <img
              src="/images/mm3.jpg"
              alt="Mars Atmosphere"
            />

            <p>
              Analyze the atmosphere and weather conditions.
            </p>

            <a className="locked-btn">LOCKED</a>
          </div>

          <div className="mm locked-mission">
            <h2>MISSION 04</h2>
            <h3>Mars Life Search</h3>

            <img
              src="/images/mm4.jpg"
              alt="Mars Life Search"
            />

            <p>
              Search for signs of ancient microbial life.
            </p>

            <a className="locked-btn">LOCKED</a>
          </div>
        </div>
      </section>

      {/* MISSION 01 */}
      <section id="mm1" style={{
        display: visibleSections.includes("mm1") ? "block" : "none",}}
>
        <div className="marsmm1bg">
          <h2>MISSION 01</h2>
          <h3>MARS RECONNAISSANCE</h3>
          <p>
            Objective : Reach Mars and collect surface data.
          </p>
        </div>

        <div className="mm1-content">
          <div className="spacecraft mission-choice-box">
            <div className="mm1-choice">
              <h2>SELECT YOUR ROUTE</h2>

              <p>
                Your spacecraft has limited fuel.
                <br />
                Which route do you want to take?
              </p>

              {/* DIRECT ROUTE */}
              <div
                className={`mm1routes ${
                  selectedRoute === "DIRECT ROUTE"
                    ? "selected"
                    : ""
                }`}
                onClick={() => selectRoute("DIRECT ROUTE")}
              >
                <span className="route-icon">
                  {selectedRoute === "DIRECT ROUTE"
                    ? "●"
                    : "○"}
                </span>

                <div>
                  <p>
                    A. Direct Route
                    <br />
                    Faster, but uses more fuel.
                  </p>
                </div>
              </div>

              {/* GRAVITY ASSIST */}
              <div
                className={`mm1routes ${
                  selectedRoute ===
                  "GRAVITY-ASSISTED ROUTE"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  selectRoute("GRAVITY-ASSISTED ROUTE")
                }
              >
                <span className="route-icon">
                  {selectedRoute ===
                  "GRAVITY-ASSISTED ROUTE"
                    ? "●"
                    : "○"}
                </span>

                <div>
                  <p>
                    B. Gravity Assist
                    <br />
                    Slower, but saves 10% fuel.
                  </p>
                </div>
              </div>
            </div>

            <div className="spacecraft-side">
              <img
                src="/images/spacecraft.jpeg"
                className="spacecraft-img"
                alt="Spacecraft"
              />

              <a
                onClick={() =>
                  goToSection("mission-confirm")
                }
                className="confirmmm1-btn"
              >
                CONFIRM CHOICE
              </a>
            </div>
          </div>

          {/* MISSION INFO */}
          <div className="spacecraft mission-info-box">
            <h2>MISSION INFO</h2>

            <div className="missioninfo">
              <span className="missioninfo-icon">⛽</span>

              <div>
                <h5>FUEL</h5>
                <p>70%</p>
              </div>
            </div>

            <div className="missioninfo">
              <span className="missioninfo-icon">↔</span>

              <div>
                <h5>DISTANCE</h5>
                <p>225 MILLION KM</p>
              </div>
            </div>

            <div className="missioninfo">
              <span className="missioninfo-icon">◷</span>

              <div>
                <h5>TIME</h5>
                <p>6–9 MONTHS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIRMATION */}
      <section
        id="mission-confirm"
        className={
          visibleSections.includes("mission-confirm")
            ? "section-visible"
            : "section-hidden"
        }
      >
        <div className="confirm-content">
          <p>MISSION STATUS</p>

          <h2>ROUTE CONFIRMED</h2>

          <h3>READY FOR LAUNCH</h3>
          <p className="selected-route">
            ROUTE: {selectedRoute || "NO ROUTE SELECTED"}
          </p>

          <span className="confirm-line"></span>

          <p>
            Your spacecraft systems are ready. Your Mars
            reconnaissance mission can now begin.
          </p>

          <a
            onClick={() => goToSection("explore")}
            className="launch-btn"
          >
            RETURN TO EXPLORE ➔
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={
          visibleSections.includes("about")
            ? "section-visible"
            : "section-hidden"
        }
      >
        <div className="about-content">
          <p>ABOUT OUTBOUND</p>

          <h2>EXPLORE BEYOND</h2>

          <p>
            Outbound is an interactive space exploration
            experience created to bring distant worlds and
            future missions together in one journey.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;