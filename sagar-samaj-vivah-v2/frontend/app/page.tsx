import Link from "next/link";
import { ArrowRight, Users, Shield, Heart } from "lucide-react";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">

                {/* Main Hero Tile */}
                <div className="md:col-span-8 bg-primary p-8 md:p-12 text-white h-96 flex flex-col justify-between metro-tile">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            Find Your <br /> Perfect Match.
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 max-w-lg">
                            Sagar Samaj Vivah connects hearts within the community with trust and tradition.
                        </p>
                    </div>
                    <Link href="/register" className="inline-flex items-center space-x-2 text-white font-bold hover:translate-x-2 transition-transform w-fit">
                        <span>Start Your Journey</span>
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>

                {/* Side Stack */}
                <div className="md:col-span-4 grid grid-rows-2 gap-4">
                    <div className="bg-secondary p-8 text-white flex flex-col justify-center metro-tile">
                        <Users className="h-10 w-10 mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold">10,000+</h3>
                        <p className="opacity-80">Active Profiles</p>
                    </div>
                    <div className="bg-accent p-8 text-white flex flex-col justify-center metro-tile">
                        <Shield className="h-10 w-10 mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold">100% Verified</h3>
                        <p className="opacity-80">Safe & Secure</p>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border p-8 hover:border-primary transition-colors cursor-default">
                    <div className="bg-gray-100 w-12 h-12 flex items-center justify-center mb-6">
                        <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
                    <p className="text-gray-600">Our algorithm finds compatible partners based on your preferences and values.</p>
                </div>
                <div className="bg-white border p-8 hover:border-primary transition-colors cursor-default">
                    <div className="bg-gray-100 w-12 h-12 flex items-center justify-center mb-6">
                        <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                    <p className="text-gray-600">Dedicated exclusively to the Sagar Samaj, ensuring cultural compatibility.</p>
                </div>
                <div className="bg-white border p-8 hover:border-primary transition-colors cursor-default">
                    <div className="bg-gray-100 w-12 h-12 flex items-center justify-center mb-6">
                        <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                    <p className="text-gray-600">Your data is secure. You control who sees your photos and contact details.</p>
                </div>
            </div>
        </div>
    );
}
