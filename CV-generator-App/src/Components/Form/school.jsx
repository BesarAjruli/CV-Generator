import { useState } from "react";
import { useEffect } from "react";

export default function Education(props) {
  const { data, changes, addEducation, allEducation, removeEd } = props;

  const [isChekced, setChecked] = useState(false);
  const [isDisabled, setButtonDissable] = useState(true);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const checkIfFieldsAreValid = () => {
    const { university, degree, universityStartingDate, universityEndDate } = data;
    if (!university || !degree || !universityStartingDate) return false;
    if (!isChekced && !universityEndDate) return false;
    return true;
  };

  useEffect(() => {
    setButtonDissable(!checkIfFieldsAreValid());
  }, [data, isChekced]);

  return (
    <form>
      <label htmlFor="university">University</label>
      <br />
      <input
        type="text"
        id="university"
        name="university"
        onChange={changes}
        value={data.university}
      />
      <br />
      <br />
      <label htmlFor="degree">Degree</label>
      <br />
      <input
        type="text"
        id="degree"
        name="degree"
        onChange={changes}
        value={data.degree}
      />
      <br />
      <br />
      <div className="dates">
        <div>
          <label htmlFor="startDate">Starting Date</label>
        <br />
        <input
          type="date"
          id="startDate"
          name="universityStartingDate"
          onChange={changes}
          value={data.universityStartingDate}
        />
        </div>
        {!isChekced && (
          <div id="endDateDiv">
            <label htmlFor="endDate">End Date</label>
            <br />
            <input
              type="date"
              id="endDate"
              name="universityEndDate"
              onChange={changes}
              value={data.universityEndDate}
            />
            <br />
            <br />
          </div>
        )}
      </div>
      <label htmlFor="stillGoing">On-Going</label>
      <br />
      <input
        type="checkbox"
        id="stillGoing"
        checked={isChekced}
        onChange={handleCheck}
      />
      <br />
      <br />
      <button disabled={isDisabled} type="button" onClick={addEducation}>
        Submit
      </button>
      <br />
      <br />
      <div>
        {allEducation?.map((educationEntry, index) => (
          <div key={index} className="endList">
            <div>{educationEntry.university}</div>
            <button type="button" onClick={() => removeEd(index)}>
              &#x2715;
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}
