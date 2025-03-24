/* eslint-disable @typescript-eslint/no-explicit-any */
type ObjectType = { [key: string]: any | any[] };

type GetRequestParams = {
  parentId?: string | number;
  partial?: string | number;
  subId?: string | number;
  action?: string | number;
};

type ObjectCommon = {
  id: number;
  name: string;
};

interface InfoEditDataInterface {
  createdBy: string;
  modifiedBy: string;
  createdDate: number;
  modifiedDate: number;
}

interface PaginationInterface {
  page: 0;
  size: 100;
  total: 7;
  totalPages: 1;
}
