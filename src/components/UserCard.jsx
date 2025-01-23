const UserCard = ({ user }) => {
  const { firstName, lastName, gender, age, photoUrl, about, skills } = user;
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
              <button className="btn btn-primary">Ignore</button>
              <button className="btn btn-secondary">Interested</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
