import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-helper";
import { isFollowingUser } from "@/lib/follow-user";
import { isBlockedByUser } from "@/lib/blocks";
import { StreamPlayer } from "@/components/streaming";

interface UserPageProps {
  params: {
    username: string;
  };
};

const UserPage = async ({
  params
}: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }
 // we are looking for if the user in parama is found in our follow relationship
  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return ( 
    <StreamPlayer
      user={user}
      stream={user.stream}
      isFollowing={isFollowing}
    />
  );
}
 
export default UserPage;