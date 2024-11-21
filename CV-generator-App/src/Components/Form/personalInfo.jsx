export default function PersonalInfo(props) {
  const { data, changes } = props;

  return (
    <form className="personalInfo">
      <label htmlFor="firstName">First Name</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={changes}
        value={data.firstName}
      />
      <br />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={changes}
        value={data.lastName}
      />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        onChange={changes}
        value={data.email}
      />
      <br />
      <br />
      <label htmlFor="phoneNr">Phone Number</label>
      <br />
      <input
        type="tel"
        id="phoneNr"
        name="phoneNr"
        onChange={changes}
        value={data.phoneNr}
      />
    </form>
  );
}
