
const resolveEndpoint = (endpoint) => {
  let host = process.env.REACT_HOST;
  if (endpoint.charAt(0) !== "/") {
    endpoint = "/" + endpoint;
  }
  if (host.substring(host.length - 1) === "/") {
    host = host.slice(0, -1);
  }
  return host + endpoint;
}


export const fetcher = async (endpoint, body, method) => {
  try {
    const response = await fetch(
      resolveEndpoint(endpoint), 
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
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


