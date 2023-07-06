import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="containerRight">
        <div className="itemRight">
        <span>Suggestions For You</span>

            <div className="userRight">
              <div className="userInforRight">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
              </div>

              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>

            <div className="userRight">
              <div className="userInforRight">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Jane Doe</span>
              </div>
              
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
        </div>

        <div className="itemRight">
          <span>Latest Activities</span>
          <div className="userRight">
            <div className="userInforRight">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min</span>
          </div>

          <div className="userRight">
            <div className="userInforRight">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min</span>
          </div>

          <div className="userRight">
            <div className="userInforRight">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min</span>
          </div>

          <div className="userRight">
            <div className="userInforRight">
            <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min</span>
          </div>
        </div> 

        <div className="itemRight">
           <span>Online Friends</span>
              <div className="userRight">
                <div className="userInforRight">
                <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> 
              <div className="online"></div>
                <span>Jane Doe</span>
                </div>
              </div>
              <div className="userRight">
                <div className="userInforRight">
                <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> 
              <div className="online"></div>
                <span>Jane Doe</span>
                </div>
              </div>              <div className="userRight">
                <div className="userInforRight">
                <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> 
              <div className="online"></div>
                <span>Jane Doe</span>
                </div>
              </div>              <div className="userRight">
                <div className="userInforRight">
                <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> 
              <div className="online"></div>
                <span>Jane Doe</span>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;