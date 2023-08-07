import me from "./me.jpg";

const UserProfile = ({ feature }) => {
  return (
    <div className="custom-profile-comp-div">
      <img className="custom-profile-avatar" src={me} alt="avatar" />
      <h3 className="custom-profile-name">{feature.name}</h3>

      <div>{feature.email}</div>
      <br />
      <div className="custom-profile-intro">
        <span className="about-us">About Us</span>
        <br />
        {feature.intro}
      </div>
    </div>
  );
};

export default UserProfile;
