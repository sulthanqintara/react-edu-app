import React from "react";
import "../profile/profile.css";
import Navbar from "../../components/navbar/Navbar";

import backgroundProfile from "../../assets/img/icon/background-profile.png";
// import profileImage from "../../assets/img/icon/pp.png";

function Profile() {
  return (
    <>
      <main>
        <section className="profile-page">
          {/* <div className="container container-fluid"> */}
          <div className="row">
            <div className="col-md-2 col-12">
              <Navbar />
            </div>
            <div className="col-md-9 col-12">
              <div class="card">
                <div className="row">
                  <div className="col">
                    <img
                      src={backgroundProfile}
                      class="card-img-top"
                      alt="..."
                    ></img>
                  </div>
                </div>
                <div className="container container-fluid">
                  <div class="card-body">
                    <div className="row">
                      <div className="col-12">
                        <h5 class="card-title">Profile Settings</h5>
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-phone-alt">
                            <span className=""> Phone Numbers</span>
                          </i>
                        </div>
                        <div className="col-md-1">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <div className="line"></div>
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-star">
                            <span className=""> Change Password</span>
                          </i>
                        </div>
                        <div className="col-md-1">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <div className="line"></div>
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-comment-dots">
                            <span className=""> Chat Settings</span>
                          </i>
                        </div>
                        <div className="col-md-1">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <div className="line"></div>
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-bell">
                            <span className=""> Push Notifications</span>
                          </i>
                        </div>
                        <div className="col-md-1">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <div className="line"></div>
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-lock">
                            <span className=""> Privacy and Security</span>
                          </i>
                        </div>
                        <div className="col-md-1">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <div className="line"></div>
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-server">
                            <span className=""> Data and storage</span>
                          </i>
                        </div>
                        <div className="col-md-1">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </main>
    </>
  );
}

export default Profile;
