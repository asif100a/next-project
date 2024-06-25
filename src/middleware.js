import { NextResponse } from "next/server";

export const middleware = (request) => {
    // if (request.nextUrl.pathname.startsWith('/contact')) {
    //     return NextResponse.redirect(new URL('/about', request.url));
    // }
    // if (request.nextUrl.pathname.startsWith('/services')) {
    //     return NextResponse.redirect(new URL('/about/mission', request.url));
    // }

    // const user = true;
    const redimateCookie = 'laiew8aww3';
    console.log(request.cookies.get('token'));

    const cookie = request.cookies.get('token');
    if(!cookie || cookie.value !== redimateCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: '/dashboard'
};

// export const config = {
//     matcher: ['/about', '/services']
// };