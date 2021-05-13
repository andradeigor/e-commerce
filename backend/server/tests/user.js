const Myrequest = require("../utils/request");
const fakerData = require("../utils/fakerdata");

test("Should get Users", async function () {
  const data1 = await fakerData.registerFakeData();
  const data2 = await fakerData.registerFakeData();
  const data3 = await fakerData.registerFakeData();
  const user1 = await Myrequest.request(
    "http://localhost:5000/users/",
    "post",
    data1
  );
  const user2 = await Myrequest.request(
    "http://localhost:5000/users/",
    "post",
    data2
  );
  const user3 = await Myrequest.request(
    "http://localhost:5000/users/",
    "post",
    data3
  );
  const userscreateds = await Myrequest.request(
    `http://localhost:5000/users/`,
    "get"
  );
  expect(user1.data).toEqual(userscreateds.data[0]);
  expect(user2.data).toEqual(userscreateds.data[1]);
  expect(user3.data).toEqual(userscreateds.data[2]);
  await Myrequest.request(
    `http://localhost:5000/users/${user1.data.id}`,
    "delete"
  );
  await Myrequest.request(
    `http://localhost:5000/users/${user2.data.id}`,
    "delete"
  );
  await Myrequest.request(
    `http://localhost:5000/users/${user3.data.id}`,
    "delete"
  );
});

test("Should Create an User", async function () {
  const data = await fakerData.registerFakeData();
  const user = await Myrequest.request(
    "http://localhost:5000/users/",
    "post",
    data
  );
  const usercreated = await Myrequest.request(
    `http://localhost:5000/users/${user.data.id}`,
    "get"
  );
  expect(user.data).toEqual(usercreated.data);
  await Myrequest.request(
    `http://localhost:5000/users/${user.data.id}`,
    "delete"
  );
});

test("Should Update an User", async function () {
  const data = await fakerData.registerFakeData();
  const user = await Myrequest.request(
    "http://localhost:5000/users/",
    "post",
    data
  );
  const newdata = await fakerData.registerFakeData();
  const updateduser = await Myrequest.request(
    `http://localhost:5000/users/${user.data.id}`,
    "put",
    newdata
  );

  const newuser = await Myrequest.request(
    `http://localhost:5000/users/${user.data.id}`,
    "get"
  );
  expect(updateduser.data).toEqual(newuser.data);
  await Myrequest.request(
    `http://localhost:5000/users/${user.data.id}`,
    "delete"
  );
});
