import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../redux/slices/userSlice'

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserProfile());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading profile...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="profile max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <p className="mb-4"><strong>Name:</strong> {userInfo.name}</p>
      <p className="mb-4"><strong>Email:</strong> {userInfo.email}</p>
      <p className="mb-4"><strong>Role:</strong> {userInfo.role}</p>
    </div>
  );
};

export default Profile;
