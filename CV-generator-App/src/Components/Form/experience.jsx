import { useState } from "react";
import { useEffect } from "react";

export default function Experience(props) {
  const { data, changes, addExperience, allExperiences, removeEx } = props;

  const [isChekced, setChecked] = useState(false);
  const [isDisabled, setButtonDissable] = useState(true);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const checkIfFieldsAreValid = () => {
    const { work, post, startingDate, endDate } = data;
    if (!work || !post || !startingDate) return false;
    if (!isChekced && !endDate) return false;
    return true;
  };

  useEffect(() => {
    setButtonDissable(!checkIfFieldsAreValid());
  }, [data, isChekced]);

  return (
    <form action="">
      <label htmlFor="work">Work</label>
      <br />
      <input
        type="text"
        id="work"
        name="work"
        onChange={changes}
        value={data.work}
      />
      <br />
      <br />
      <label htmlFor="post">Position</label>
      <br />
      <input
        type="text"
        id="post"
        name="post"
        onChange={changes}
        value={data.post}
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
            name="startingDate"
            onChange={changes}
            value={data.startingDate}
          />
        </div>

        {!isChekced && (
          <div id="endDateDiv">
            <label htmlFor="endDate">End Date</label>
            <br />
            <input
              type="date"
              name="endDate"
              id="endDate"
              onChange={changes}
              value={data.endDate}
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
      <button disabled={isDisabled} type="button" onClick={addExperience}>
        Submit
      </button>
      <br />
      <br />
      <div>
        {allExperiences?.map((experience, index) => (
          <div key={index} className="endList">
            <div>{experience.work}</div>
            <button type="button" onClick={() => removeEx(index)}>
              &#x2715;
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}
