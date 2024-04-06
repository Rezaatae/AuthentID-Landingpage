import Link from "next/link";


export default function Header() {
    return(
        <header className="text-gray-600 body-font" style={{backgroundColor: "#D9D9D9"}}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className="w-14 h-14 text-white p-2 rounded-full" src="/AUTHENTID_Logo.svg" />
                    <span className="ml-3 text-xl">AuthentID</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/privacypolicy" className="mr-5 hover:text-gray-900">Privacy Policy</a>
                </nav>
            </div>
        </header>
    );
}