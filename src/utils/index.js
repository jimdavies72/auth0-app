
const resolveEndpoint = (endpoint) => {
  let host = process.env.REACT_APP_HOST;

  if (endpoint.charAt(0) !== "/") {
    endpoint = "/" + endpoint;
  }
  if (host.slice(host.length - 1) === "/") {
    host = host.slice(0, -1);
  }
  return host + endpoint;
}


export const fetcher = async (endpoint, body, method) => {
  try {

    // let headers = new Headers()

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");

    // // Website you wish to allow to connect
    // headers.append("Access-Control-Allow-Origin", "*");

    // // Request methods you wish to allow
    // headers.append(
    //   "Access-Control-Allow-Methods",
    //   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    // );

    // // Request headers you wish to allow
    // headers.append(
    //   "Access-Control-Allow-Headers",
    //   "content-type,x-requested-with"
    // );

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    //   headers.append("Access-Control-Allow-Credentials", true);

    const response = await fetch(
      resolveEndpoint(endpoint), 
      {
        method: method,
        body: body ? JSON.stringify(body) : null,
      }
    );

    const data = await response.json();
    if (data) {
      return data;
    } else {
      return new Error(`${response.status}, ${response.message}`)
    }
  } catch (error) {
    console.log(error.message);
  }
}


