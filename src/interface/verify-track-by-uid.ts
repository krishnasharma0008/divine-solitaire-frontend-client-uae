export interface VerifyTrackByUid {
  category: string;
  collection: string;
  currency_code:string;
  currency_locale:string;
  current_price: number;
  design_no: string;
  gross_wt: 0;
  image: string;
  images: string[];
  is_coin: false;
  jewel_size: string;
  metal_sd_purchase_price: number;
  metal_total_current_price: number;
  mount_details_1: string;
  mount_details_2: string;
  net_wt: number;
  product_type: "Jewellery" | "Diamond";
  purchase_date: string;
  purchase_discount: number;
  purchase_from: string;
  purchase_price: number;
  purchase_price_final: number;
  sd_colour_clarity: string;
  sd_cts: number;
  sd_pcs: number;
  sd_total_current_price: number;
  slt_details: [
    {
      carat: number;
      clarity: string;
      colour: string;
      current_price: number;
      purchase_price: number;
      shape: string;
      uid: string;
    }
  ];
  slt_total_cts: number;
  slt_total_current_price: number;
  slt_total_pcs: number;
  slt_total_purchase_price?: number;
  solitaire_details_1: string;
  uid: string;
  uid_status: string;
  videos: string[];

  upgrade_minimum_price :number;// new field
  buyback_isblock:boolean;//new
  buyback_block_date:string;//new
  buyback_block_message:string;//new
  buyback_solitaire_price: number;
  buyback_mount_price: number;
  buyback_price: number;
  buyback_processing_charges: number;
  buyback_same_store_price: number;
  buyback_diffrent_store_price: number;
  exchange_isblock:boolean;//new
  exchange_block_date:string;//new
  exchange_block_message:string;//new
  exchange_solitaire_price: number;
  exchange_mount_price: number;
  exchange_price: number;
  exchange_processing_charges: number;
  exchange_same_store_price: number;
  exchange_diffrent_store_price: number;
}
