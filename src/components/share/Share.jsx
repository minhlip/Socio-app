import React, { useContext, useState } from 'react'
import "./share.scss";
import {item1, item2, item3} from "../../assets/index";
import { AuthContext } from '../../context/authContext';
import { useQuery, useMutation,useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';


const Share = () => {
const [file,setFile] = useState(null)
const [desc,setDesc] = useState("")
const {currentUser} = useContext(AuthContext);

const queryClient = useQueryClient()
const userId = currentUser.id.toString()
const { data } = useQuery(["user"], () =>
makeRequest.get("/users/find/" + userId).then((res) => {
  return res.data;
})
);
let profilePic = data?.profilePic
let name = data?.name

const mutation = useMutation(
  (newPost)=>{
  return makeRequest.post("/posts",newPost)
},
{
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries(["posts"])
  },
})
const upload = async () =>{
  try{
    const formData = new FormData()
    formData.append("file",file)
    const res = await makeRequest.post("/upload",formData);
    return res.data
  }catch(err){
    console.log(err)
  }
}

const handleClick = async(e) => {
  e.preventDefault()
  let imgUrl = ""
  if (file) imgUrl = await upload();
  mutation.mutate({desc, img: imgUrl})
  setDesc("")
  setFile(null)
}

  return (
    <div className="share">
      <div className="containerShare">
        <div className="top">
          <div className="left">
            <img src={"/upload/" + profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${name}?`}
              onChange={e => setDesc(e.target.value)}
              value={desc}
            />
          </div> 
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={item1} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={item2} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={item3} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
