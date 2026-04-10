import { Category } from "./category";

export interface Post {
    id: String;
    title: string;
    content: string;
    createdDate: Date;
    category: Category;
}

export const POSTS: Post[] = [
    {
        id: '1',
        title: 'Your First Post',
        content: 'Content goes here...',
        createdDate: new Date(),
        category: { id: '1', name: 'Tech' }
    }
    // You can find more mocked data at the gist link in your notes 
];