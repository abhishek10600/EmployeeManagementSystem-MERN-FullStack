import axios from "axios";
import { useState } from "react";

const ReferralSection = () => {
  const [jobId, setJobId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const handleSaveButtonClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/api/v1/referrals/createReferral",
      {
        jobId,
        employeeName,
        employeeId,
        candidateName,
        mobileNumber,
        email,
      },
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="container my-4 py-4">
      <h1>Referral Section</h1>
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
        <div className="py-2">
          <label htmlFor="jobDescription" className="form-label">
            Employee Name:
          </label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="form-control"
            id="jobDescription"
          />
        </div>
        <div className="py-2">
          <label htmlFor="jobDescription" className="form-label">
            Employee Id:
          </label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="form-control"
            id="jobDescription"
          />
        </div>
        <div className="py-2">
          <label htmlFor="jobDescription" className="form-label">
            Candidate Name:
          </label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="form-control"
            id="jobDescription"
          />
        </div>
        <div className="py-2">
          <label htmlFor="jobDescription" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="form-control"
            id="jobDescription"
          />
        </div>
        <div className="py-2">
          <label htmlFor="jobDescription" className="form-label">
            Email:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="jobDescription"
          />
        </div>
        <div className="py-2">
          <label htmlFor="jobDescription" className="form-label">
            Attach Resume:
          </label>
          <input
            type="text"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="form-control"
            id="jobDescription"
          />
        </div>
        <div className="d-flex gap-2">
          <input type="file" className="btn btn-primary" />
          <button className="btn btn-primary">Upload</button>
          <button className="btn btn-primary" onClick={handleSaveButtonClick}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralSection;
