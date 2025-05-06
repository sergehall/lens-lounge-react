import { usersMock } from '../../../users/mocks/usersMock';

export interface Profile {
  userId: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  username: string;
  birthday: string;
  education: string;
  website: string;
}

// Find user with userId === "0"
const defaultUser = usersMock.find((user) => user.userId === '0');

if (!defaultUser) {
  throw new Error("Default user with userId '0' not found in users array.");
}

// Generate the default profile from that user
export const DEFAULT_PROFILE: Profile = {
  userId: defaultUser.userId,
  photoUrl: defaultUser.photoUrl,
  firstName: defaultUser.firstName,
  lastName: defaultUser.lastName,
  username: defaultUser.username,
  birthday: defaultUser.birthday,
  education: defaultUser.education,
  website: defaultUser.website,
};
