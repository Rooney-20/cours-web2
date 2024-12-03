import User from "../../types";

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  return (
    <>
      <div className="user-card">
        <h2> {props.user.name} </h2>
        <p> {props.user.age} </p>
        <div className={props.user.isOnline ? "online" : "offline"}>
          {props.user.isOnline ? "En ligne" : "Hors ligne"}
        </div>
      </div>
    </>
  );
};

export default UserCard;
