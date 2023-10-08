import axios from "axios";
import { useState } from "react";

const InterviewFeedback = () => {
  const [jobId, setJobId] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [totalExperience, setTotalExperience] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [skillsEvaluated, setSkillEvaluated] = useState("");
  const [overallRating, setOverallRating] = useState("");
  const [comments, setComments] = useState("");
  const [hired, setHired] = useState("");
  const [level, setLevel] = useState("");
  const handleSaveButtonClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/api/v1/interviewFeedbacks/createInterviewFeedback",
      {
        jobId,
        candidateName,
        totalExperience,
        interviewerName,
        skillsEvaluated,
        overallRating,
        comments,
        hired,
        level,
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
      <div className="top">
        <h1>Interview Feedback</h1>
        <div className="my-4 px-4 border">
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
            <div className="d-flex gap-4">
              <div className="py-2">
                <label htmlFor="skillSet" className="form-label">
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
                <label htmlFor="status" className="form-label">
                  Total Experience:
                </label>
                <input
                  type="text"
                  value={totalExperience}
                  onChange={(e) => setTotalExperience(e.target.value)}
                  className="form-control"
                  id="jobDescription"
                />
              </div>
            </div>
            <div className="py-2">
              <label htmlFor="responsibilities" className="form-label">
                Interviewer Name:
              </label>
              <input
                type="text"
                value={interviewerName}
                onChange={(e) => setInterviewerName(e.target.value)}
                className="form-control"
                id="responsibilities"
              />
            </div>
            <div className="py-2">
              <label htmlFor="minimumExperience" className="form-label">
                Skills Evaluated:
              </label>
              <input
                type="text"
                value={skillsEvaluated}
                onChange={(e) => setSkillEvaluated(e.target.value)}
                className="form-control"
                id="minimumExperience"
              />
            </div>
            <div className="py-2">
              <label htmlFor="location" className="form-label">
                Overall Rating:
              </label>
              <input
                type="text"
                value={overallRating}
                onChange={(e) => setOverallRating(e.target.value)}
                className="form-control"
                id="localtion"
              />
            </div>
            <div className="py-2">
              <label htmlFor="totalCandidates" className="form-label">
                Comments
              </label>
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="form-control"
                id="totalCandidates"
              />
            </div>
            <div className="py-2">
              <label htmlFor="totalCandidates" className="form-label">
                Hired:
              </label>
              <input
                type="text"
                value={hired}
                onChange={(e) => setHired(e.target.value)}
                className="form-control"
                id="totalCandidates"
              />
            </div>
            <div className="py-2">
              <label htmlFor="totalCandidates" className="form-label">
                Level:
              </label>
              <input
                type="text"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="form-control"
                id="totalCandidates"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary my-4"
              onClick={handleSaveButtonClick}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterviewFeedback;
