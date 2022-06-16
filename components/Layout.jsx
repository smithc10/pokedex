import React from 'react';
import Head from 'next/head';

export default function Layout({title, children}){
    return (
        <div className="bg-gray-300 dark:bg-slate-900 dark:text-white">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            </Head>
            <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
                {children}
            </main>
        </div>
    );
}