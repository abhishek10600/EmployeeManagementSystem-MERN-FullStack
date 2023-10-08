import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventSection from "../components/EventSection";

const RecruitmentEventTable = ({ referralDetails }) => {
  const navigate = useNavigate();
  const [showEventSection, setShowEventSection] = useState(false);
  const [refId, setRefId] = useState("");
  const handleScheduleButtonClick = (referralId) => {
    setRefId(referralId);
    setShowEventSection(true);
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {referralDetails.map((referral) => (
            <tr key={referral._id}>
              <td>{referral.candidateName}</td>
              <td>{referral.email}</td>
              <td>{referral.mobileNumber}</td>
              <td>{referral.resume}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleScheduleButtonClick(referral._id)}
                >
                  Schedule
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEventSection && (
        <div className="my-4">
          <EventSection referralId={refId} />
        </div>
      )}
    </div>
  );
};

export default RecruitmentEventTable;
