/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import "react-circular-progressbar/dist/styles.css";
import { getClassByUserAction } from "../../redux/actionCreators/classes";
import ColumnMyClass from "../columnMyClass/columnMyClass";

function TableMyClass(props) {
  const { getClassByUserAction } = props;
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    let query = `?user_id=${props.auth.authInfo.user_id}`;
    if (props.keyword) query = query + `&keyword=${props.keyword}`;
    if (props.limit) query = query + `&limit=${props.limit}`;
    console.log(query);
    getClassByUserAction(query);
    if (location.search) return history.push(`${location.search}`);
  }, [getClassByUserAction, props.auth.authInfo.user_id, props.keyword]);

  return (
    <>
      <div className="table-responsive my-class">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th scope="col">Class Name</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Progress</th>
              <th scope="col">Status</th>
              <th scope="col">Score</th>
            </tr>
          </thead>

          {props.classes.dataPerUser?.data?.result.data.map((data) => {
            return <ColumnMyClass data={data} key={data.class_id} />;
          })}
        </table>
        {!props.classes.dataPerUser.data.result.data && <text>No data</text>}
      </div>
    </>
  );
}

const mapStateToProps = ({ classes, auth }) => {
  return {
    auth,
    classes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getClassByUserAction: (body) => {
      dispatch(getClassByUserAction(body));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TableMyClass));
