interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}


interface ButtonProps {
    title: string;
    onClick: () => void;
}