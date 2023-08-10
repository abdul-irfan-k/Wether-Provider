import { NextResponse } from "next/server"

export async function GET(req,res) {
    // console.log('request ',req)

    return NextResponse.json({a:req[0]})
}


