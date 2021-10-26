/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../profile/profile.css";
import Navbar from "../../components/navbar/Navbar";

import backgroundProfile from "../../assets/img/icon/background-profile.png";
import { useSelector } from "react-redux";
import axios from "axios";

function Profile() {
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [newPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");
  // const [imagePreview, setImagePreview] = useState(null);
  const [id, setId] = useState(0);
  const userInfo = useSelector((reduxState) => reduxState.auth);

  useEffect(() => {
    const id = userInfo.authInfo.user_id;
    const token = localStorage.getItem("token");
    if (id) {
      axios
        .get(`http://localhost:8000/users/?id=${id}`, {
          headers: {
            "x-access-token": `Bearer ${token}`,
          },
        })
        .then((res) => {
          const data = res.data.result;
          console.log(data);
          setPhone(data.phone);
          setImage(data.image);
          // setImagePreview(data.image);
          setId(data.id);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const onSubmitProfile = (e) => {
    const data = new FormData();
    data.append("id", id);
    data.append("phone", phone);
    data.append("image", image);

    const token = localStorage.getItem("token");
    // const id = userInfo.authInfo.user_id;
    axios
      .patch(`http://localhost:8000/users/edit-user`, data, {
        headers: {
          "x-access-token": `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // setImagePreview(URL.createObjectURL(file));
  };

  const onSubmitPassword = (e) => {
    const data = {
      id: id,
      oldPass: oldPass,
      newPass: newPass,
    };

    const token = localStorage.getItem("token");
    // const id = userInfo.authInfo.user_id;
    axios
      .patch(`http://localhost:8000/users/update-password`, data, {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.alert("Password berhasil diganti!");
        console.log(res);
      })
      .catch((err) => {
        window.alert("Password lama salah!");
        console.log(err);
      });
  };

  return (
    <>
      <main>
        <section className="profile-page vh-100">
          <div className="d-flex flex-column flex-xl-row">
            <Navbar />
            <div className=" flex-fill me-3">
              <div className="card">
                <div className="row">
                  <div
                    className="col profile-background d-flex justify-content-center"
                    style={{ backgroundImage: `url(${backgroundProfile})` }}
                  >
                    <label htmlFor="upload-photo">
                      <img
                        src={image}
                        className="profile-icon mt-5"
                        alt="..."
                      />
                    </label>
                    {console.log(image)}
                    <input
                      type="file"
                      name="photo"
                      id="upload-photo"
                      className="d-none"
                      onChange={(e) => onImageUpload(e)}
                    />
                  </div>
                </div>
                <div className="container container-fluid">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <h5 class="card-title">Profile Settings</h5>
                      </div>
                      <div className="row change-settings-number">
                        <div className="mb-2 mt-4">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="&#128222; Phone Numbers"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row change-settings-number text-end">
                        <div className="mb-2 mt-4">
                          <button
                            className="btn btn-submit"
                            onClick={onSubmitProfile}
                          >
                            Edit Profile
                          </button>
                        </div>
                      </div>
                      <div className="row change-settings-number">
                        <div className="col-12 mt-5">
                          <h5 class="card-title">Change Password</h5>
                        </div>
                        <div className="mb-2 mt-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="&#9733; Old Password"
                            onChange={(e) => setOldPass(e.target.value)}
                          />
                        </div>
                        <div className="mb-2 mt-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="&#9733; New Password"
                            onChange={(e) => setNewPass(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row change-settings-number text-end">
                        <div className="mb-2 mt-4">
                          <button
                            className="btn btn-submit"
                            onClick={onSubmitPassword}
                          >
                            Edit Password
                          </button>
                        </div>
                      </div>
                      {/* <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-phone-alt">
                            <span className=""> Phone Numbers</span>
                          </i>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <hr />
                      </div> */}
                      {/* <div className="row change-settings">
                        <div className="col-md-11">
                          <i class="fas fa-star">
                            <span className=""> Change Password</span>
                          </i>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                          <i class="fas fa-chevron-right text-end"></i>
                        </div>
                        <hr />
                      </div> */}
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i className="fas fa-comment-dots">
                            <span className=""> Chat Settings</span>
                          </i>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                          <i className="fas fa-chevron-right text-end"></i>
                        </div>
                        <hr />
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i className="fas fa-bell">
                            <span className=""> Push Notifications</span>
                          </i>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                          <i className="fas fa-chevron-right text-end"></i>
                        </div>
                        <hr />
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i className="fas fa-lock">
                            <span className=""> Privacy and Security</span>
                          </i>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                          <i className="fas fa-chevron-right text-end"></i>
                        </div>
                        <hr />
                      </div>
                      <div className="row change-settings">
                        <div className="col-md-11">
                          <i className="fas fa-server">
                            <span className=""> Data and storage</span>
                          </i>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end">
                          <i className="fas fa-chevron-right text-end"></i>
                        </div>
                        <hr />
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
