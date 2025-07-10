const Profile = ({ user }) => (
  <div className="p-4 d-flex flex-column align-items-center justify-content-center">
    <h2>Profile</h2>
    <img className="rounded" src={user?.photos[0].value} />
    <p>{user?.displayName}</p>
    <p>{user?.emails[0].value}</p>
    {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
  </div>
);

export default Profile;
