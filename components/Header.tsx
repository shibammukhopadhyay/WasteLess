import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingBag, User, Store } from "lucide-react";

interface HeaderProps {
    userType: 'student' | 'business' | null;
    onUserTypeChange: (type: 'student' | 'business' | null) => void;
}

export function Header({ userType, onUserTypeChange }: HeaderProps) {
    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-green-600">🍃 SaveBites</h1>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Beta
                        </Badge>
                    </div>

                    <div className="flex items-center space-x-4">
                        {userType === null && (
                            <>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onUserTypeChange('student')}
                                    className="flex items-center space-x-2"
                                >
                                    <User className="w-4 h-4" />
                                    <span>Student Login</span>
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => onUserTypeChange('business')}
                                    className="flex items-center space-x-2"
                                >
                                    <Store className="w-4 h-4" />
                                    <span>Business Login</span>
                                </Button>
                            </>
                        )}

                        {userType === 'student' && (
                            <>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center space-x-2"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>My Orders</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => onUserTypeChange(null)}
                                >
                                    Logout
                                </Button>
                            </>
                        )}

                        {userType === 'business' && (
                            <>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center space-x-2"
                                >
                                    <Store className="w-4 h-4" />
                                    <span>My Listings</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => onUserTypeChange(null)}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}