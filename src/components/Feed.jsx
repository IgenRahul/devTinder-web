import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const feed = await axios.get(BASE_URL + "/user/feed", {
          withCredentials: true,
        });
        dispatch(addFeed(feed.data.data));
      } catch (err) {}
    };
    fetchFeed();
  }, []);

  if (!feed) {
    return <div className="flex justify-center text-3xl">Loading...</div>;
  }

  if (feed.length === 0) {
    return (
      <div className="flex justify-center text-3xl">No New feed found!!!</div>
    );
  }
  return (
    feed && (
      <div className="h-[80vh]">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
