import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody) => {
  const requestConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: {
      "Content-Type": "application/json"   // ✅ force JSON
    }
  };

  try {
    const res = await axios(requestConfig);
    return res;
  } catch (err) {
    return err;
  }
};
