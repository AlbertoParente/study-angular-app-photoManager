export interface Photo {
    id: number;
    postGate: Date;
    url: string;
    description: string;
    allowsomments: boolean;
    likes: number;
    comments: number;
    userId: number;
};
