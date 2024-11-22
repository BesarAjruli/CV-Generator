import PersonalInfo from "./personalInfo";
import Education from "./school";
import Experience from "./experience";

const style = {
   width: '60%',
    marginRight: '100px'
}

export default function Editor(props) {
  return (
    <div className="editor">
      <PersonalInfo data={props.data} changes={props.changes} />
      <hr style={style}/>
      <Education data={props.educationData} changes={props.edChanges} addEducation={props.addEducation} allEducation={props.allEducation} removeEd={props.removeEd}/>
      <hr style={style}/>
      <Experience data={props.experienceData} changes={props.expChanges} addExperience={props.addExperience} allExperiences={props.allExperiences} removeEx={props.removeEx}/>
    </div>
  );
}
