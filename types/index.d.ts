declare type User = {
  //   $id: string;
  //   email: string;
  //   userId: string;
  //   dwollaCustomerUrl: string;
  //   dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  //   address1: string;
  //   city: string;
  //   state: string;
  //   postalCode: string;
  //   dateOfBirth: string;
  //   ssn: string;
};

declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};

declare interface HeaderTemplateProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface MobileNavProps {
  user: User;
}

declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

declare interface SidebarProps {
  user: User;
}

declare type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

declare interface signInProps {
  email: string;
  password: string;
}
