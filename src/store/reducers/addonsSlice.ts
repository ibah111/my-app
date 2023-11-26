import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Addon {
  title: string;
  price: number;
  pic: any;
}

interface TotalCostAddon {
  addonsIds: number[];
  totalCost: number;
}

const initialState: TotalCostAddon = {
  addonsIds: [],
  totalCost: 11000,
};
export const addonSlice = createSlice({
  name: "Addons",
  initialState,
  reducers: {
    increaseCost(state, action: PayloadAction<number>) {
      state.totalCost += action.payload;
    },
    decreaseCost(state, action: PayloadAction<number>) {
      state.totalCost -= action.payload;
    },
    resetCost(state) {
      state.totalCost = initialState.totalCost;
    },
  },
});
export const { increaseCost, decreaseCost } = addonSlice.actions;
export default addonSlice.reducer;
