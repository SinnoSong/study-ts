type CompanyID = string & { readonly brand: unique symbol };
type OrderID = string & { readonly brand: unique symbol };
type UserID = string & { readonly brand: unique symbol };
type ID = CompanyID | OrderID | UserID;

function CompanyID(id: string) {
  return id as CompanyID;
}
function OrderID(id: string) {
  return id as OrderID;
}
function UserID(id: string) {
  return id as UserID;
}

let companyId = CompanyID("81asd2a");
let orderId = OrderID("9129djk");
let userId = UserID("12308fdk");

export {};
