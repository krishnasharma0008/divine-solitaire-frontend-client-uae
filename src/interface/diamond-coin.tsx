interface DiamondCoin {
  id: number;
  isactive: boolean;
  design_type: string;
  design_no: string;
  price: number;
  solitaire_details: string;
  mount_details: string; // Add premium_size_range
  gross_weight: number;
  net_weight: number;
}

export default DiamondCoin;
