import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, gender, age, photoUrl, about, skills } =
    user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const response = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(removeFeed(userId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    user && (
      <div className="flex justify-center py-8 h-full">
        <div className="card bg-base-300 w-[22rem] shadow-xl">
          <figure>
            <img src={photoUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstName}</h2>
            {age && gender && (
              <p>
                {age} , {gender}
              </p>
            )}
            <p>{about}</p>
            {skills && <p>{skills}</p>}
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                onClick={() => handleSendRequest("ignored", _id)}
              >
                Ignore
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleSendRequest("interested", _id)}
              >
                Interested
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
