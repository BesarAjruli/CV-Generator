export default function Show(data, educationData, expEnteries) {
  const personalData = data.data;

  let universityName = "";
  let degrees = "";
  let uniStartingDate = ''
  let uniEndDate = ''

  let workPlace = ''
  let workPosition = ''
  let workStartingDate = ''
  let workEndDate = ''

  data.educationEntries.forEach((element, index) => {
    if(index === 0){
        universityName = `"${element.university}"`
        degrees = element.degree
        uniStartingDate = element.universityStartingDate
        element.universityEndDate !== ''
        ? uniEndDate = element.universityEndDate
        : uniEndDate = 'On-Going'

    }else{
        universityName = `${universityName}, "${element.university}"`;
        degrees = degrees + ', ' + element.degree
        uniStartingDate = uniStartingDate + ', ' + element.universityStartingDate
        element.universityEndDate !== ''
        ? uniEndDate = uniEndDate + ', ' + element.universityEndDate
        : uniEndDate = uniEndDate + ', ' + 'On-Going'
    }

  });

  data.expEnteries.forEach((element, index) => {
    if(index === 0){
        workPlace = `"${element.work}"`
        workPosition = element.post
        workStartingDate = element.startingDate
        element.endDate !== ''
        ? workEndDate = element.endDate
        : workEndDate = 'On-Going'

    }else{
        workPlace = `${workPlace}, "${element.work}"`;
        workPosition = workPosition + ', ' + element.post
        workStartingDate = workStartingDate + ', ' + element.startingDate
        element.endDate !== ''
        ? workEndDate = workEndDate + ', ' + element.endDate
        : workEndDate = workEndDate + ', ' + 'On-Going'
    }

  });

  return (
    <div>
      <ul className="cvInfo">
        <h1>My CV</h1>
        <ul>
          <h2>Personal Information</h2>
          <li>First Name: {personalData.firstName}</li>
          <li>Last Name: {personalData.lastName}</li>
        </ul>
        <ul>
          <h2>Contacts</h2>
          <li>Phone Number: {personalData.phoneNr}</li>
          <li>Email: {personalData.email}</li>
        </ul>
        <ul>
          <h2>Education</h2>
          <li>University: {universityName}</li>
          <li>Degree In: {degrees}</li>
          <li>Started In: {uniStartingDate}</li>
          <li>Ended In: {uniEndDate}</li>
        </ul>
        <ul>
          <h2>Experience</h2>
          <li>Worked At: {workPlace}</li>
          <li>Position: {workPosition}</li>
          <li>Started Working At: {workStartingDate}</li>
          <li>Finished Working At: {workEndDate}</li>
        </ul>
      </ul>
    </div>
  );
}
