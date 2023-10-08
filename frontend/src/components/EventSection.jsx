import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventSection = ({ referralId }) => {
  const [location, setLocation] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const handleCreateEventButtonClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/api/v1/events/createEvent",
      {
        referralId,
        timeFrom,
        timeTo,
      },
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="container my-4">
      <div className="box my-4 px-4 border">
        <h3>Event Section</h3>
        <form className="my-4">
          <div className="py-2">
            <label htmlFor="jobDescription" className="form-label">
              Location:
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              id="jobDescription"
            />
          </div>
          <div className="py-2">
            <label htmlFor="jobDescription" className="form-label">
              Time From:
            </label>
            <input
              type="text"
              value={timeFrom}
              onChange={(e) => setTimeFrom(e.target.value)}
              className="form-control"
              id="jobDescription"
            />
          </div>
          <div className="py-2">
            <label htmlFor="jobDescription" className="form-label">
              To:
            </label>
            <input
              type="text"
              value={timeTo}
              onChange={(e) => setTimeTo(e.target.value)}
              className="form-control"
              id="jobDescription"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleCreateEventButtonClick}
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventSection;
