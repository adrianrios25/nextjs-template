import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const xForwarededFor = req.headers.get('x-forwarded-for') ?? '';
	console.log(xForwarededFor);
	console.log(req);
	return NextResponse.json(
		{
			message: 'Backoffice Test',
			value: process.env.DB_NAME,
			xForwarededFor,
			TESTENVVARIABLE: process.env.TESTENVVARIABLE,
		},
		{ status: 200 }
	);
}
