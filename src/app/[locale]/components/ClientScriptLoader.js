"use client"

import initializeClientSideScripts, { allScripts } from '../scripts/home';
import { useEffect } from 'react';

export default function ClientScriptLoader() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.querySelectorAll('[data-onclick]').forEach((element) => {
                // Get the list of function names
                const functions = element.getAttribute('data-onclick')?.split(',') || [];
                // Get the list of parameters
                const params = element.getAttribute('data-params')?.split(',') || [];

                // Add a "click" event listener
                element.addEventListener('click', (event) => {
                    functions.forEach((functionName) => {
                        if (typeof allScripts[functionName] === 'function') {
                            try {
                                // Pass parameters to the function
                                allScripts[functionName](...params.map((param) => {
                                    // Support passing the event as a parameter
                                    if (param === 'event') return event;
                                    // Pass other parameters as plain strings
                                    return param;
                                }));
                            } catch (error) {
                                console.error(`Error executing function "${functionName}":`, error);
                            }
                        } else {
                            console.error(`Function "${functionName}" is not defined.`);
                        }
                    });
                });
            });

            initializeClientSideScripts();
        }
    }, []);

    return null; // This component doesn't render any UI
}