import { Button } from "./ui/button";

const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'bakery', name: 'Bakery', icon: '🥖' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'asian', name: 'Asian', icon: '🥢' },
    { id: 'cafe', name: 'Café', icon: '☕' },
    { id: 'dessert', name: 'Dessert', icon: '🧁' },
    { id: 'healthy', name: 'Healthy', icon: '🥗' },
];

interface CategoryFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
                <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => onCategoryChange(category.id)}
                    className="flex items-center space-x-2 whitespace-nowrap"
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </Button>
            ))}
        </div>
    );
}