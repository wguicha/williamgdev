export function Footer() {
    return (
        <footer className="border-t border-[#1A1A1A] py-8 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-2">
                <span className="font-mono text-xs text-[#444440]">
                    © {new Date().getFullYear()} williamgdev.com
                </span>
                <span className="font-mono text-xs text-[#333330]">
                    n8n · Power BI · Next.js
                </span>
            </div>
        </footer>
    );
}
