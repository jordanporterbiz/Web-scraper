import { create } from "zustand";

const useStore = create((set) => ({
	rentals: [],
	setRental: (rentals: any) =>
		set((state: any) => ({ rentals: [...state.rentals, rentals] })),
}));

export default useStore;
