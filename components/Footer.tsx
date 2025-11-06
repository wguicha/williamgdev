export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-6 mt-12">
            <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
                <p>© {new Date().getFullYear()} williamgdev.com — All rights reserved.</p>
                <p className="mt-2">
                    Built with ❤️ using Next.js, TailwindCSS & n8n automations.
                </p>
            </div>
        </footer>
    );
}