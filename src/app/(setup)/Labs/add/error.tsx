"use client"; 

//biblioteca
import { useEffect } from "react";

    export default function Error({
    error,
    reset,
    }: {
    error: Error & { digest?: string };
    reset: () => void;
    }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
        <h2>ERROR!</h2>
        <button
            onClick={
            // 
            () => reset()
            }
        >
            {error.message}
        </button>
        </div>
    );
}

