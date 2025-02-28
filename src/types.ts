export interface PaintColor {
  id: string;
  name: string;
  hexCode: string;
  price: number;
}

export interface CartItem {
  paintId: string;
  quantity: number;
}