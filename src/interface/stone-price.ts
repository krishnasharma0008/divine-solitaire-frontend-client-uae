interface StonePrice {
  id: number;
  etype: string;
  userid: number;
  shape: string;
  colour: string;
  purity: string;
  carat: number;
  price: number;
  chkdate: string;
  rem: null;
  current_price: number;
  diff: number;
  premium_per: number; // Add premium_per
  premium_size_range: string; // Add premium_size_range
  currency_locale:string;
  currency_code:string;
}

export default StonePrice;
