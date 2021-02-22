import { GET_JOBS, GET_COMMENTS, CREATE_COMMENT } from "./types";
import comments from "../apis/comments";
import jobs from "../apis/jobs";
import history from "../history";
import _ from "lodash";

export const getJobs = () => async (dispatch) => {
  const response = await jobs.get();
  dispatch({ type: GET_JOBS, payload: response.data });
};

export const getComments = async (dispatch) => {
  const response = await jobs.get();
  dispatch({ type: GET_COMMENTS, payload: response.data });
};

export const createComment = (formValues) => async (dispatch, getState) => {
  const userName = getState().name;
  const response = await comments.post({ ...formValues, userName });
  dispatch({ type: CREATE_COMMENT, payload: response.data });
  history.push("/contact");
};
