export const getUsers = async (count = 10) => {
  if (typeof count !== "number" && count < 0) return [];
  let init = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

  let request = new Request(
    `https://randomuser.me/api/?results=${count}`,
    init
  );
  let response = await fetch(request);
  if (response.ok) return response.json();
  return [];
};

export const getUsersByName = async name => {
  if (typeof name !== "string") return [];
  let init = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

  let request = new Request(`https://randomuser.me/api/?name=${name}`, init);
  let response = await fetch(request);
  if (response.ok) return response.json();
  return [];
};
