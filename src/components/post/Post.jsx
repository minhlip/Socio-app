import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
    const [comments, setComments] = useState(false)
  //TEMPORARY

    const [liked,setLike] = useState(false)

    const tap = () => {
        setLike(!liked)
    }

  return (
    <div className="post">
        <div className="containerPost">
        <div className="userPost">
            <div className="userInforPost">
                <img src={post.profilePic} alt=""/>
                <div className="details">
                <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                        <span className="name">{post.name}</span>
                    </Link>
                    <span className="date">1 min ago</span>
                </div>
            </div>
            <MoreHorizIcon/>    
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt=""/>
        </div>
        <div className="infor">
            <div className="item">
                <button onClick={tap}>{liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon style={{color: "none"}}/>}</button>
                12 likes
            </div>
            <div className="item" onClick={() => setComments(!comments)}>
                <TextsmsOutlinedIcon/>
                12 Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/>
            </div>
        </div>
        {comments && <Comments/>}
        </div>
    </div>
  );
};

export default Post;