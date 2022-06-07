import {
  BaseProfileForm,
  DebouncedTextInput,
  ProfilePage as FobProfilePage,
} from "ra-friendsofbabba";

const ProfilePage = (props) => (
  <FobProfilePage {...props}>
    <BaseProfileForm>
      <DebouncedTextInput source="profile.phone" maxLength={30} />
    </BaseProfileForm>
  </FobProfilePage>
);

export default ProfilePage;
