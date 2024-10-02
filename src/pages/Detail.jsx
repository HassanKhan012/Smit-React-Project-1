import { useParams } from "react-router";
import { data } from "../utils/constant/data";
import './pages.css'


const Detail = () => {
useParams()
const {id} = useParams()
const singleData = data.find((item)=>{
    return item.id === Number(id)
})
console.log(singleData)
const {name , profession , fullDescription , background , profileImage} = singleData

  return (
    <div className="user-detail">
      <img id="bg-img" src={background} alt="" />
        <div className="user-data">
          <div className="user-bio">
        <img src={profileImage ? profileImage : null} alt="" />
        <div>
        <h1>{name}</h1>
        <p>{profession}</p>
        </div>
        </div>
        <p id="desc">{fullDescription}</p>
        </div>
    </div>
  )
}

export default Detail;
