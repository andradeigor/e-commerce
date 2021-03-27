const { registerFakeData, addressesFakeData } = require("../utils/fakerdata");
const { request } = require("../utils/request");

test("Should create a address", async function () {
  const userData = await registerFakeData();
  const user = await request("http://localhost:5000/users/", "post", userData);
  const usercreated = await request(
    `http://localhost:5000/users/${user.data.id}`,
    "get"
  );
  expect(user.data).toEqual(usercreated.data);
  const addressData = await addressesFakeData();

  const address = await request(
    `http://localhost:5000/users/${user.data.id}/address`,
    "post",
    addressData
  );
  const addresscreated = await request(
    `http://localhost:5000/users/${user.data.id}/address/${address.data.id}`,
    "get"
  );
  expect(address.data).toEqual(addresscreated.data);
  await request(`http://localhost:5000/users/${user.data.id}`, "delete");
});
test("Should create get the addresses", async function () {
  const userData = await registerFakeData();
  const user = await request("http://localhost:5000/users/", "post", userData);
  const addressData1 = await addressesFakeData();
  const addressData2 = await addressesFakeData();
  const addressData3 = await addressesFakeData();

  const address1 = await request(
    `http://localhost:5000/users/${user.data.id}/address`,
    "post",
    addressData1
  );
  const address2 = await request(
    `http://localhost:5000/users/${user.data.id}/address`,
    "post",
    addressData2
  );
  const address3 = await request(
    `http://localhost:5000/users/${user.data.id}/address`,
    "post",
    addressData3
  );
  const addresses = await request(
    `http://localhost:5000/users/${user.data.id}/address/`
  );
  expect(address1.data).toEqual(addresses.data[0]);
  expect(address2.data).toEqual(addresses.data[1]);
  expect(address3.data).toEqual(addresses.data[2]);
  await request(`http://localhost:5000/users/${user.data.id}`, "delete");
});
test("Should update a address", async function () {
  const userData = await registerFakeData();
  const user = await request("http://localhost:5000/users/", "post", userData);
  const addressData = await addressesFakeData();

  const address = await request(
    `http://localhost:5000/users/${user.data.id}/address`,
    "post",
    addressData
  );
  await console.log(address.data);
  const newAddressData = await addressesFakeData();
  const newAddress = await request(
    `http://localhost:5000/users/${user.data.id}/address/${address.data.id}`,
    "put",
    newAddressData
  );
  const addresscreated = await request(
    `http://localhost:5000/users/${user.data.id}/address/${newAddress.data.id}`,
    "get"
  );
  expect(newAddress.data).not.toEqual(address.data);
  expect(newAddress.data).toEqual(addresscreated.data);
  await request(`http://localhost:5000/users/${user.data.id}`, "delete");
});
