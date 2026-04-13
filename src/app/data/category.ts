export interface Category {
    id: String;
    name: String;
}

export type CategoryCreateInput = Omit<Category, "id">;

