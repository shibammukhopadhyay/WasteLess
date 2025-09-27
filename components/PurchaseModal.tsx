import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Clock, MapPin, Users } from "lucide-react";
import { FoodItem } from "./FoodCard";

interface PurchaseModalProps {
    item: FoodItem | null;
    isOpen: boolean;
    onClose: () => void;
    onConfirmPurchase: (item: FoodItem) => void;
}

export function PurchaseModal({ item, isOpen, onClose, onConfirmPurchase }: PurchaseModalProps) {
    if (!item) return null;

    const discount = Math.round((1 - item.discountedPrice / item.originalPrice) * 100);

    const handleConfirm = () => {
        onConfirmPurchase(item);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Confirm Your Purchase</DialogTitle>
                </DialogHeader>
                
                <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-lg">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.businessName}</p>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{item.pickupTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{item.location}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-1 text-sm">
                                <Users className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{item.quantity} portions left</span>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-muted-foreground">Original Price:</span>
                                    <span className="line-through text-muted-foreground">£{item.originalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-muted-foreground">Discount ({discount}%):</span>
                                    <span className="text-green-600">-£{(item.originalPrice - item.discountedPrice).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-lg font-medium border-t pt-2">
                                    <span>Total:</span>
                                    <span className="text-green-600">£{item.discountedPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <strong>Pickup Instructions:</strong><br />
                                    Please arrive at {item.location} between {item.pickupTime}. 
                                    Bring a valid ID and show your confirmation email.
                                </p>
                            </div>

                            <div className="flex space-x-3">
                                <Button 
                                    onClick={handleConfirm}
                                    className="flex-1 bg-green-600 hover:bg-green-700"
                                >
                                    Confirm Purchase
                                </Button>
                                <Button 
                                    variant="outline" 
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    );
}