import { FC } from 'react';
import { Package } from './package';
import { User, UserCredential } from 'firebase/auth';
import { ReactNode } from 'react';
export interface IService {
  _id?: string;
  image: string;
  serviceName: string;
  description: string;
  providerImage: string;
  providerName?: string;
  providerEmail?: string;
  tourArea: string;
  price: number;
  status?: string;
}

export interface IServiceProps {
  service: IService;
}

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  roleLoading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logOut: () => Promise<UserCredential>;
  setLoading: (loading: boolean) => void;
  name: string | undefined | null;
  setName: (name: string | undefined | null) => void;
  photo: string | undefined | null;
  setPhoto: (photo: string | undefined | null) => void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IButtonProps {
  disabled: boolean;
  children: string;
  icon: FC;
}

export interface ISelectGroupProps {
  label: string;
  name: string;
  options: string[];
  icon: FC;
  defaultOption?: string;
}

export interface ITableThreeProps {
  data: Package[];
  customerTable?: boolean;
}

export interface ICountryPriceList {
  country: string;
  price: number;
  status: string;
}

export interface ICountry {
  _id: string;
  created_at: Date;
  name: string;
  code: string;
}

export interface ILeader {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  whatsapp: string;
  skype: string;
  photo: string;
  NIDCopy: string;
  country: string;
  city: string;
  state?: string;
  fullAddress: string;
  nidNumber: string;
  email: string;
  password: string;
  bio?: string;
}

export interface ILeaderTableProps {
  data: ILeader[];
  refetch: () => void;
}

export interface ICustomer extends ILeader {
  addedBy: string;
  status: string;
  created_at: Date;
}

export interface ICountryPrice {
  country: string;
  price: number;
  status: string;
}

export interface ICategory {
  _id: string;
  name: string;
  time: string;
  countryPriceList: ICountryPrice[];
  created_at: Date;
}

export interface ICategoryTableProps {
  categories: ICategory[];
  refetch: () => void;
}

export interface ILeaderForm {
  leader?: ILeader;
}

export interface ICustomerForm {
  customer?: ICustomer;
}

export interface ICustomerTableProps {
  customers: ICustomer[];
  refetch: () => void;
}

export interface ICountriesTableProps {
  countries: ICountry[];
  refetch: () => void;
}

export interface IAddCountryProps {
  country?: ICountry;
}

export interface IAddCategoryProps {
  category?: ICategory;
}

export interface ISelectGroupOneProps {
  name: string;
  defaultValue?: string;
}

export interface IUpdateUserInfoInput {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  whatsapp: string;
  skype: string;
  bio: string;
}
