import { useState } from "react";
import Editor from "./Components/Form/finished";
import Show from "./Components/Show/preview";

export default function Values() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNr: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [educationData, setEducationData] = useState({
    university: "",
    degree: "",
    universityStartingDate: "",
    universityEndDate: "",
  });

  const handleEducationData = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [educationEntries, setEducationEntries] = useState([]);

  const handleEducationEntries = () => {
    setEducationEntries((prevEntries) => [
      ...prevEntries,
      { ...educationData }
    ]);
    setEducationData({
      university: "",
      degree: "",
      universityStartingDate: "",
      universityEndDate: "",
    });
  };

  const removeEd = (index) => {
    setEducationEntries((prevEntries) => {
      const updatedEd = prevEntries.filter((_, i) => i !== index);
      return updatedEd;
    });
  };



  const [experienceData, setExpData] = useState({
    work: "",
    post: "",
    startingDate: "",
    endDate: ""
  })

  const handleExpData = (e) => {
    const { name, value } = e.target;
    setExpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [expEnteries, setExpEnteries] = useState([]);

  const handleExpEntries = () => {
    setExpEnteries((prevEntries) => [
      ...prevEntries,
      { ...experienceData }
    ]);
    setExpData({
      work: "",
      post: "",
      startingDate: "",
      endDate: ""
    });
  };

  const removeEx = (index) => {
    setExpEnteries ((prevEntries) => {
      const updatedEx = prevEntries.filter((_, i) => i !== index);
      return updatedEx;
    });
  };

  return (
    <div className="mainDiv">
      <Editor
        data={data}
        educationData={educationData}
        experienceData={experienceData}
        changes={handleChanges}
        edChanges={handleEducationData}
        expChanges={handleExpData}
        addEducation={handleEducationEntries}
        addExperience={handleExpEntries}
        allEducation={educationEntries}
        allExperiences={expEnteries}
        removeEd={removeEd}
        removeEx={removeEx}
      />
      <Show data={data} educationEntries={educationEntries} expEnteries={expEnteries}/>
    </div>
  );
}
