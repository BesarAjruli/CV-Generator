import PersonalInfo from "./personalInfo";
import Education from "./school";
import Experience from "./experience";

export default function Editor(props) {
  return (
    <div className="editor">
      <PersonalInfo data={props.data} changes={props.changes} />
      <Education data={props.educationData} changes={props.edChanges} addEducation={props.addEducation} allEducation={props.allEducation} removeEd={props.removeEd}/>
      <Experience data={props.experienceData} changes={props.expChanges} addExperience={props.addExperience} allExperiences={props.allExperiences} removeEx={props.removeEx}/>
    </div>
  );
}
