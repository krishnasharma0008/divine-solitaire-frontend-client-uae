import { SaleType } from "@/enum/sale-type-enum";

export interface VerifyTrackResaleForm {
  etype: SaleType;
  userid?: number;
  phname: string;
  phemail: string;
  phcontactno: string;
  phaddress: string;
  phcity: string;
  phpincode: string;
  phdob: string;

  uid: string;
  invno: string;
  invdate: string;
  invval: string;

  jewelname: string;
  issamestore: boolean; //true|false,
  currentval: string; //0
  newval: number; //0

  docfile: string; //null
}
