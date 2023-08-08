import { Footer } from "@/widgets/layout";
import { Intro, Profile as SingleProfile } from "@/components/profiles";

export function Profile() {
  return (
    <>
      <Intro />
      <SingleProfile />
      <Footer />
    </>
  );
}

export default Profile;
