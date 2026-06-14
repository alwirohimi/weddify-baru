import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

/**
 * Server Route ini menangani Step 2 & 3 dari workflow OAuth 2.0.
 * Google mengirimkan 'code' ke URL ini, lalu kita menukarnya dengan session.
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const cookieStore = cookies();
    // Menggunakan client khusus server untuk mengelola session di cookies browser
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    
    // Menukarkan 'code' otorisasi dengan session user
    // Di sini Supabase memvalidasi 'email_verified: true' secara internal
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (error) {
      console.error("Callback Auth Error:", error.message);
    }
  }

  // Redirect kembali ke halaman utama (atau dashboard klien)
  return NextResponse.redirect(new URL('/', request.url));
}