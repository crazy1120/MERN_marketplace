import { Footer } from "@/widgets/layout";
import { Intro, Profile as SingleProfile } from "@/components/profiles";
import { Public } from "@/widgets/layout/commonlayout";

export function Profile() {
  return (
    <Public>
      <Intro />
      <SingleProfile />
    </Public>
  );
}

export default Profile;
