import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello, next.js!',
  }
  return NextResponse.json(data) //이걸 쓰면 1번 라인이 자동으로 생김
}
