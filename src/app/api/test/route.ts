import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	console.log(request);
	return NextResponse.json(
		{ message: 'Backoffice Test', value: process.env.DB_NAME },
		{ status: 200 }
	);
}
