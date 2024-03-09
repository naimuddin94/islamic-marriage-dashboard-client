import { Package } from "../types/package";

export const tableData: Package[] = [
  {
    name: 'Free package',
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
  {
    name: 'Business Package',
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Unpaid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Pending',
  },
];