import { useParams } from "react-router";
import Card from "../components/common/card/Card";
import { data } from "../utils/constant/data";

const Profile = () => {
  console.log(useParams());

  return (
    <div className="profile-card-container">
      {data.map((item) => {
        return (
          <Card key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default Profile;

