const url = "https://localhost:8001/api/";

class EntityClass {
  constructor() {}

  execute = async (path = "", method = "POST", body = {}) => {
    try {
      const response = await fetch(url + path, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  get = async (path) => {
    return await this.execute(path, "GET");
  };

  post = async (path, data) => {
    return await this.execute(path, "POST", data);
  };

  put = async (path, data) => {
    return await this.execute(path, "PUT", data);
  };

  delete = async (path) => {
    return await this.execute(path, "DELETE");
  };
}

export default EntityClass;
     