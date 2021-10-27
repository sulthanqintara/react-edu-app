import React, { useEffect, useState } from "react";
import "../profile/profile.css";
import Navbar from "../../components/navbar/Navbar";
import { patchProfileAction } from "../../redux/actionCreators/auth";
import axios from "axios";

import backgroundProfile from "../../assets/img/icon/background-profile.png";
import { useDispatch, useSelector } from "react-redux";
import ProfilePlaceholder from "../../assets/img/icon/pp.png";
import Swal from "sweetalert2";

function Profile() {
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [id, setId] = useState(0);
  const auth = useSelector((reduxState) => reduxState.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = auth.authInfo.user_id;
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
          setPhone(data.phone);
          setImage(data.image);
          setImagePreview(data.image);
          setId(data.id);
          setName(data.name);
          setUserName(data.username);
        })
        .catch((err) => console.log(err));
    }
  }, [auth.authInfo.user_id]);

  const onSubmitProfile = (e) => {
    const data = new FormData();
    data.append("id", id);
    data.append("phone", phone);
    data.append("image", image);
    name && data.append("name", name);
    const token = localStorage.getItem("token");
    dispatch(patchProfileAction(data, token));
    return Swal.fire(
      "Profile Changed",
      "Your profile has been changed.",
      "success"
    );
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmitPassword = (e) => {
    if (oldPass.length < 5) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Old Password",
        text: "Old Password must have 5 or more characters!",
      });
    }
    if (newPass.length < 5) {
      return Swal.fire({
        icon: "error",
        title: "Invalid New Password",
        text: "New Password must have 5 or more characters!",
      });
    }
    const data = {
      id: id,
      oldPass: oldPass,
      newPass: newPass,
    };
    const token = localStorage.getItem("token");
    return axios
      .patch(`http://localhost:8000/users/update-password`, data, {
        headers: {
          "x-access-token": `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        return Swal.fire({
          icon: "success",
          title: "Password Changed",
          text: "Your password has been changed!",
        });
      })
      .catch((err) => {
        console.log(err);
        return Swal.fire({
          icon: "error",
          title: "Your old password is invalid",
          text: "Please check your old password again.",
        });
      });
  };
  return (
    <>
      <main>
        <section className="profile-page py-3">
          <div className="d-flex flex-column flex-xl-row">
            <Navbar />
            <div className=" flex-fill me-3">
              <div className="card">
                <div className="row">
                  <div
                    className="col profile-background d-flex justify-content-center flex-column align-items-center"
                    style={{ backgroundImage: `url(${backgroundProfile})` }}
                  >
                    <label
                      htmlFor="upload-photo"
                      className="d-flex flex-column"
                    >
                      <img
                        src={imagePreview ? imagePreview : ProfilePlaceholder}
                        className="profile-icon"
                        alt="profile"
                      />
                    </label>
                    <input
                      type="text"
                      defaultValue={name ? name : userName}
                      className="profile-name-text mt-2"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <input
                      type="file"
                      name="photo"
                      id="upload-photo"
                      className="d-none"
                      onChange={(e) => onImageUpload(e)}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <h5 className="card-title">Profile Settings</h5>
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
                            onClick={() => {
                              Swal.fire({
                                title:
                                  "Are you sure you want to update your profile?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, update!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  onSubmitProfile();
                                }
                              });
                            }}
                          >
                            Edit Profile
                          </button>
                        </div>
                      </div>
                      <div className="row change-settings-number">
                        <div className="col-12 mt-5">
                          <h5 className="card-title">Change Password</h5>
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
                            onClick={() => {
                              Swal.fire({
                                title:
                                  "Are you sure you want to change password?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, change it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  onSubmitPassword();
                                }
                              });
                            }}
                          >
                            Edit Password
                          </button>
                        </div>
                      </div>
                      <div className="change-settings">
                        <div className="d-flex flex-row justify-content-between ps-3">
                          <div>
                            <i className="fas fa-comment-dots">
                              <span className=""> Chat Settings</span>
                            </i>
                          </div>
                          <div className="d-flex justify-content-end">
                            <i className="fas fa-chevron-right text-end me-3"></i>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="change-settings">
                        <div className="d-flex flex-row justify-content-between ps-3">
                          <div>
                            <i className="fas fa-bell">
                              <span className=""> Push Notifications</span>
                            </i>
                          </div>
                          <div className="d-flex justify-content-end">
                            <i className="fas fa-chevron-right text-end me-3"></i>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="change-settings">
                        <div className="d-flex flex-row justify-content-between ps-3">
                          <div>
                            <i className="fas fa-lock">
                              <span className=""> Privacy and Security</span>
                            </i>
                          </div>
                          <div className="d-flex justify-content-end">
                            <i className="fas fa-chevron-right text-end me-3"></i>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="change-settings">
                        <div className="d-flex flex-row justify-content-between ps-3">
                          <div>
                            <i className="fas fa-server">
                              <span className=""> Data and storage</span>
                            </i>
                          </div>
                          <div className="d-flex justify-content-end">
                            <i className="fas fa-chevron-right text-end me-3"></i>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
