import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment  from "moment";
import {
    useQuery, useQueryClient, useMutation
  } from '@tanstack/react-query' 
  import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
    const [comments, setComments] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const queryClient = useQueryClient()
    const { isLoading, error, data } = useQuery(['likes', post.Id],
    ()=>
    makeRequest.get("/likes?postId=" + post.Id).then(res=>{
      return res.data
    })
  )
  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.Id);
      return makeRequest.post("/likes", { postId: post.Id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );


  const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id));
  };


  return (
    <div className="post">
        <div className="containerPost">
        <div className="userPost">
            <div className="userInforPost">
                <img src={"/upload/"+post.profilePic} alt=""/>
                <div className="details">
                <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                        <span className="name">{post.name}</span>
                    </Link>
                    <span className="date">
                        {moment(post.createdAt).fromNow()}
                    </span>
                </div>
            </div>
            <MoreHorizIcon/>    
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={"../upload/"+post.img} alt=""/>
        </div>
        <div className="infor">
            <div className="item">
                <button onClick={handleLike}>
                {isLoading 
                ? "loading" 
                : data.includes(currentUser.id)
                ? <FavoriteOutlinedIcon 
                onClick={handleLike}/> 
                : <FavoriteBorderOutlinedIcon 
                style={{color: "none"}}
                onClick={handleLike}
                />}</button>
                {data?.length} likes
            </div>
            <div className="item" onClick={() => setComments(!comments)}>
                <TextsmsOutlinedIcon/>
                Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/>
            </div>
        </div>
        {comments && <Comments postId={post.Id} />}
        </div>
    </div>
  );
};

export default Post;