export interface User {
  email: string;
  name: string;
  address: Address;
}

type Address = {
  street: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
};
