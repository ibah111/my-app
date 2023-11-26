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
  totalCost: 11000, // 11000
};
export const addonSlice = createSlice({
  name: "addon",
  initialState,
  reducers: {
    addIds(state, action: PayloadAction<number>) {
      /**
       * @todo
       * ???
       */
      state.addonsIds.push(action.payload);
    },
    addCost(state, action: PayloadAction<number>) {
      state.totalCost += action.payload;
    },
    resetIds() {},
    resetCost() {},
  },
});
export default addonSlice.reducer;
