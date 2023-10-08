import { useState } from "react";
import JobReferralsTable from "../components/JobReferralsTable";
import axios from "axios";

const Referals = () => {
  const [jobId, setJobId] = useState("");
  const [jobDetails, setJobDetails] = useState([]);
  const [error, setError] = useState(false);
  const handleSearchButtonClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/api/v1/jobs/find",
      {
        jobId,
      },
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    setJobDetails(res.data.job[0]);
  };
  return (
    <div className="container my-4">
      <div className="top">
        <h1>Referrals</h1>
        <div className="my-4 px-4 border">
          <h3 className="my-4">Job Search</h3>
          <form className="my-4">
            <div className="py-2">
              <label htmlFor="jobDescription" className="form-label">
                Job Id:
              </label>
              <input
                type="text"
                value={jobId}
                onChange={(e) => setJobId(e.target.value)}
                className="form-control"
                id="jobDescription"
              />
            </div>
            <button
              type="submit"
              onClick={handleSearchButtonClick}
              className="btn btn-primary my-4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {jobDetails && (
        <div className="bottom">
          <JobReferralsTable jobDetails={jobDetails} />
        </div>
      )}
      {!jobDetails && <p>Job with this id does not exists</p>}
    </div>
  );
};

export default Referals;
