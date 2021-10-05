// ***********************************
// API Endpoint
// ***********************************

const usersLimit = 25;
const nationality = "nl";
const fields = "name,email,phone,id";
export const apiUrl = {
  users: `https://randomuser.me/api/?results=${usersLimit}&nat=${nationality}&inc=${fields}`,
};
