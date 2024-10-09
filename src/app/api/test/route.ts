import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	console.log(request);
	return NextResponse.json({ message: 'Backoffice Test' }, { status: 200 });
}
