import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password, name, mobile, age, gender, profession, location } = body;

        if (!email || !password || !name) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Random avatar color
        const colors = ['#f87171', '#60a5fa', '#a78bfa', '#34d399', '#f472b6', '#fbbf24'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Create user (Standard MongoDB Standalone compatible)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });

        // Create profile linked to user
        await prisma.profile.create({
            data: {
                userId: user.id,
                mobile,
                age: parseInt(age) || null,
                gender,
                profession,
                location,
                avatarColor: randomColor
            }
        });

        return NextResponse.json({ message: 'User created successfully', userId: user.id }, { status: 201 });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
