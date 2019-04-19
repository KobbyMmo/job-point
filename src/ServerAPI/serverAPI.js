import httpFacade from "../utils/httpFacade";

export function sendApplication(info) {
  const options = {
    url:  `/jobs/apply`,
    body: info
  };

  return httpFacade.post(options);
}
