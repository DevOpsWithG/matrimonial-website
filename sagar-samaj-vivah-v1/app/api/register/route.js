import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password, name, mobile, age, gender, profession, location } = body;

        console.log(`[Register] Attempting to register: ${email}`);

        if (!email || !password || !name) {
            console.log('[Register] Missing fields');
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            console.log('[Register] User exists');
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Random avatar color
        const colors = ['#f87171', '#60a5fa', '#a78bfa', '#34d399', '#f472b6', '#fbbf24'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        console.log('[Register] Creating User document...');
        // Create user (Standard MongoDB Standalone compatible)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });
        console.log(`[Register] User created. ID: ${user.id}`);

        console.log('[Register] Creating Profile document...');
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
        console.log('[Register] Profile created.');

        return NextResponse.json({ message: 'User created successfully', userId: user.id }, { status: 201 });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
