const formatPhoneNumber = (value) =>
  `(${value.substr(0, 3)})-${value.substr(3, 3)}-${value.substr(6, 4)}`;

export const getFormattedUserObject = (value, user = null) => {
  const { firstName: first, lastName: last, email, phone, type } = value;
  let userObject;

  if (user) {
    // Edit contact
    userObject = {
      ...user,
      name: {
        ...user.name,
        first,
        last,
      },
      email,
      phone: formatPhoneNumber(phone.toString()),
      type,
    };
  } else {
    // New contact
    userObject = {
      name: {
        title: "Mr",
        first,
        last,
      },
      email,
      phone: formatPhoneNumber(phone.toString()),
      id: {
        name: "BSN",
        value: new Date().getTime(),
      },
      type,
    };
  }
  return userObject;
};

export const getFilteredUsers = (value, users) => {
  const searchTerm = value?.toLowerCase();
  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(searchTerm) ||
      user.name.last.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.phone.toString().includes(searchTerm) ||
      user.type.toLowerCase().includes(searchTerm)
  );
  return filteredUsers;
};
