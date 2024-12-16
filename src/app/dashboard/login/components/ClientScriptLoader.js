"use client"

import { useEffect } from 'react';
import initializeClientSideScripts from '../scripts/home';

export default function ClientScriptLoader() {
    useEffect(() => {
        // Run the client-side script when the component mounts
        if (typeof window !== 'undefined') {
            initializeClientSideScripts();
        }
    }, []);

    return null; // This component doesn't render any UI
}