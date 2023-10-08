import { useState } from "react";
import RecruitmentEventTable from "../components/RecruitmentEventTable";
import axios from "axios";

const RecruitmentEvent = () => {
  const [jobId, setJobId] = useState("");
  const [referralDetails, setReferralDetails] = useState([]);
  const handleSearchButtonClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/api/v1/referrals/find",
      {
        jobId,
      },
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    setReferralDetails(res.data.referrals);
    console.log(res.data.referrals);
  };
  return (
    <div className="container my-4">
      <div className="top">
        <h1>Recruitment Event</h1>
        <div className="my-4 px-4 border">
          <h3 className="my-4">Referral Search</h3>
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
              className="btn btn-primary my-4"
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {referralDetails.length != 0 && (
        <div className="bottom">
          <RecruitmentEventTable referralDetails={referralDetails} />
        </div>
      )}
    </div>
  );
};

export default RecruitmentEvent;
