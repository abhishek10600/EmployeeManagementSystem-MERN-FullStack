import ReferralSection from "./ReferralSection";
import { useState } from "react";

const JobReferralsTable = ({ jobDetails }) => {
  const [showReferralSection, setShowReferralSection] = useState(false);
  console.log(jobDetails);
  const handleReferButtonClick = (jobId) => {
    console.log(jobId);
    setShowReferralSection(true);
  };
  return (
    <div>
      {jobDetails.length != 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>JobId</th>
              <th>Description</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{jobDetails.jobId}</td>
              <td>{jobDetails.jobDescription}</td>
              <td>{jobDetails.minimumExperience}</td>
              <td>{jobDetails.location}</td>
              <td>{jobDetails.status}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleReferButtonClick(jobDetails.jobId)}
                >
                  Refer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {showReferralSection && (
        <div>
          <ReferralSection />
        </div>
      )}
    </div>
  );
};

export default JobReferralsTable;
