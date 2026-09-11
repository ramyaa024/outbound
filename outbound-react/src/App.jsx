import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const destinations = [
    {
      number: "01",
      name: "THE MOON",
      distance: "384,400 KM FROM EARTH",
      risk: "LOW RISK",
      className: "moon",
    },
    {
      number: "02",
      name: "MARS",
      distance: "225 MILLION KM FROM EARTH",
      risk: "HIGH RISK",
      className: "mars",
    },
    {
      number: "03",
      name: "EUROPA",
      distance: "628 MILLION KM FROM EARTH",
      risk: "EXTREME",
      className: "europa",
    },
    {
      number: "04",
      name: "TITAN",
      distance: "1.2 BILLION KM FROM EARTH",
      risk: "EXTREME",
      className: "titan",
    },
  ];

  const missions = [
    {
      number: "01",
      name: "RESEARCH",
      description:
        "Study unexplored environments, collect scientific data and expand our understanding of space.",
    },
    {
      number: "02",
      name: "EXPLORATION",
      description:
        "Travel beyond known boundaries and discover places humanity has never explored.",
    },
    {
      number: "03",
      name: "COLONIZATION",
      description:
        "Prepare a new world for future human settlements beyond Earth.",
    },
    {
      number: "04",
      name: "TOURISM",
      description:
        "Experience the universe from a completely different perspective.",
    },
  ];

  const checklist = [
    {
      id: 1,
      title: "OXYGEN SYSTEM",
      description: "Life support systems operational",
    },
    {
      id: 2,
      title: "FUEL SYSTEM",
      description: "Fuel reserves confirmed",
    },
    {
      id: 3,
      title: "COMMUNICATION",
      description: "Deep-space communication online",
    },
    {
      id: 4,
      title: "NAVIGATION",
      description: "Flight path calculated",
    },
    {
      id: 5,
      title: "CREW SYSTEMS",
      description: "Crew preparation complete",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (currentSlide + 1) % destinations.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + destinations.length) %
        destinations.length
    );
  };

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
    setCurrentPage("mission");
  };

  const selectMission = (mission) => {
    setSelectedMission(mission);
    setCurrentPage("preparation");
  };

  const toggleChecklist = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(
        checkedItems.filter((item) => item !== id)
      );
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const beginFinalCheck = () => {
    if (checkedItems.length === checklist.length) {
      setCurrentPage("launch");
    }
  };

  const startLaunch = () => {
    setCurrentPage("journey");
  };

  const visibleDestinations = [
    destinations[currentSlide],
    destinations[(currentSlide + 1) % destinations.length],
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div
          className="logo"
          onClick={() => setCurrentPage("home")}
        >
          OUTBOUND
        </div>

        <div className="nav-links">
          <button onClick={() => setCurrentPage("home")}>
            HOME
          </button>

          <button
            onClick={() => setCurrentPage("destinations")}
          >
            DESTINATIONS
          </button>

          <button
            onClick={() => setCurrentPage("mission")}
          >
            MISSION
          </button>

          <button
            onClick={() => setCurrentPage("journey")}
          >
            JOURNEY
          </button>
        </div>
      </nav>


      {/* ================= HOME ================= */}

      {currentPage === "home" && (
        <main className="screen hero" id="home">

          <div className="hero-content">

            <p className="eyebrow">
              SPACE TRAVEL INITIATIVE
            </p>

            <h1>
              YOUR JOURNEY
              <br />
              <span>BEYOND EARTH</span>
            </h1>

            <p className="hero-text">
              Space is no longer unreachable. Choose your
              destination, prepare your mission,
              <br />
              and begin your journey beyond Earth.
            </p>

            <button
              className="primary-btn"
              onClick={() => setCurrentPage("destinations")}
            >
              PLAN YOUR JOURNEY
              <span>→</span>
            </button>

          </div>

          <div className="scroll-indicator">
            BEGIN YOUR JOURNEY
            <span>↓</span>
          </div>

        </main>
      )}


      {/* ================= DESTINATIONS ================= */}

      {currentPage === "destinations" && (
        <main
          className="screen destinations"
          id="destinations"
        >

          <div className="section-heading">

            <p className="eyebrow">
              STEP 01
            </p>

            <h2>
              CHOOSE YOUR
              <span> DESTINATION</span>
            </h2>

            <p>
              Every journey begins with a destination.
              Where will you go?
            </p>

          </div>


          <div className="destination-slider">

            <button
              className="slider-arrow"
              onClick={previousSlide}
            >
              ←
            </button>


            <div className="destination-cards">

              {visibleDestinations.map(
                (destination) => (

                  <div
                    className="destination-card"
                    key={destination.number}
                    onClick={() =>
                      selectDestination(destination)
                    }
                  >

                    <div
                      className={`destination-image ${destination.className}`}
                    >
                      <span>
                        {destination.number}
                      </span>
                    </div>


                    <div className="destination-info">

                      <h3>
                        {destination.name}
                      </h3>

                      <p>
                        {destination.distance}
                      </p>

                      <div className="destination-bottom">

                        <span>
                          {destination.risk}
                        </span>

                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            selectDestination(destination);
                          }}
                        >
                          SELECT →
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>


            <button
              className="slider-arrow"
              onClick={nextSlide}
            >
              →
            </button>

          </div>


          <div className="slide-indicators">

            {destinations.map(
              (destination, index) => (

                <span
                  key={destination.number}
                  className={
                    index === currentSlide
                      ? "indicator active"
                      : "indicator"
                  }
                  onClick={() =>
                    setCurrentSlide(index)
                  }
                ></span>

              )
            )}

          </div>

        </main>
      )}


      {/* ================= MISSION ================= */}

      {currentPage === "mission" && (
        <main
          className="screen mission"
          id="mission"
        >

          <div className="section-heading">

            <p className="eyebrow">
              STEP 02
            </p>

            <h2>
              DEFINE YOUR
              <span> MISSION</span>
            </h2>

            <p>
              {selectedDestination
                ? `Destination selected: ${selectedDestination.name}. What is the purpose of your journey?`
                : "Your destination is chosen. What is the purpose of your journey?"}
            </p>

          </div>


          <div className="mission-grid">

            {missions.map((mission) => (

              <div
                className="mission-card"
                key={mission.number}
              >

                <div className="mission-number">
                  {mission.number}
                </div>

                <h3>
                  {mission.name}
                </h3>

                <p>
                  {mission.description}
                </p>

                <button
                  onClick={() =>
                    selectMission(mission)
                  }
                >
                  SELECT MISSION →
                </button>

              </div>

            ))}

          </div>

        </main>
      )}


      {/* ================= PREPARATION ================= */}

      {currentPage === "preparation" && (
        <main
          className="screen preparation"
          id="preparation"
        >

          <div className="section-heading">

            <p className="eyebrow">
              STEP 03
            </p>

            <h2>
              PREPARE YOUR
              <span> MISSION</span>
            </h2>

            <p>
              {selectedMission
                ? `${selectedMission.name} mission to ${
                    selectedDestination?.name || "your destination"
                  }. Complete all systems before launch.`
                : "A successful journey requires everything to be ready before launch."}
            </p>

          </div>


          <div className="preparation-panel">

            <div className="prep-header">

              <div>

                <p>
                  MISSION STATUS
                </p>

                <h3>
                  PRE-LAUNCH CHECKLIST
                </h3>

              </div>

              <div className="status">
                {checkedItems.length} / {checklist.length} READY
              </div>

            </div>


            <div className="checklist">

              {checklist.map((item) => (

                <div
                  className="check-item"
                  key={item.id}
                  onClick={() =>
                    toggleChecklist(item.id)
                  }
                >

                  <div
                    className={
                      checkedItems.includes(item.id)
                        ? "check-box checked"
                        : "check-box"
                    }
                  >
                    {checkedItems.includes(item.id)
                      ? "✓"
                      : ""}
                  </div>

                  <div>

                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            <button
              className="launch-btn"
              onClick={beginFinalCheck}
              disabled={
                checkedItems.length !== checklist.length
              }
            >
              {checkedItems.length === checklist.length
                ? "CONTINUE TO LAUNCH"
                : "BEGIN FINAL CHECK"}
            </button>

          </div>

        </main>
      )}


      {/* ================= LAUNCH ================= */}

      {currentPage === "launch" && (
        <main className="screen launch">

          <p className="eyebrow">
            FINAL SEQUENCE
          </p>

          <h2>
            READY FOR
            <span> LAUNCH?</span>
          </h2>

          <p>
            Your destination is waiting.
          </p>


          <div className="launch-details">

            <div>
              <span>
                DESTINATION
              </span>

              <strong>
                {selectedDestination?.name || "MARS"}
              </strong>
            </div>

            <div>
              <span>
                MISSION
              </span>

              <strong>
                {selectedMission?.name || "EXPLORATION"}
              </strong>
            </div>

          </div>


          <button
            className="launch-main-btn"
            onClick={startLaunch}
          >
            INITIATE LAUNCH
            <span>→</span>
          </button>

        </main>
      )}


      {/* ================= JOURNEY ================= */}

      {currentPage === "journey" && (
        <main
          className="screen journey"
          id="journey"
        >

          <div className="section-heading">

            <p className="eyebrow">
              STEP 04
            </p>

            <h2>
              YOUR
              <span> JOURNEY</span>
            </h2>

            <p>
              Mission control is now active.
            </p>

          </div>


          <div className="journey-dashboard">

            <div className="dashboard-header">

              <div>

                <p>
                  MISSION CONTROL
                </p>

                <h3>
                  OUTBOUND-01
                </h3>

              </div>

              <div className="live-status">
                ● MISSION ACTIVE
              </div>

            </div>


            <div className="mission-summary">

              <div>
                <span>
                  DESTINATION
                </span>

                <strong>
                  {selectedDestination?.name || "MARS"}
                </strong>
              </div>

              <div>
                <span>
                  MISSION
                </span>

                <strong>
                  {selectedMission?.name || "EXPLORATION"}
                </strong>
              </div>

            </div>


            <div className="progress-area">

              <div className="planet earth">
                EARTH
              </div>

              <div className="journey-line">
                <div className="journey-progress"></div>
              </div>

              <div className="planet destination">
                {selectedDestination?.name || "MARS"}
              </div>

            </div>


            <div className="stats">

              <div>
                <span>
                  DISTANCE
                </span>

                <strong>
                  {selectedDestination?.name === "THE MOON"
                    ? "384K KM"
                    : selectedDestination?.name === "EUROPA"
                    ? "628M KM"
                    : selectedDestination?.name === "TITAN"
                    ? "1.2B KM"
                    : "225M KM"}
                </strong>
              </div>


              <div>
                <span>
                  MISSION TIME
                </span>

                <strong>
                  7 MONTHS
                </strong>
              </div>


              <div>
                <span>
                  PROGRESS
                </span>

                <strong>
                  42%
                </strong>
              </div>


              <div>
                <span>
                  STATUS
                </span>

                <strong>
                  NOMINAL
                </strong>
              </div>

            </div>

          </div>

        </main>
      )}


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          OUTBOUND
        </div>

        <p>
          THE FUTURE OF SPACE TRAVEL STARTS HERE.
        </p>

        <span>
          © 2026 OUTBOUND
        </span>

      </footer>

    </div>
  );
}

export default App;