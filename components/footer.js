export default function Footer() {
    return(
        <footer className="text-gray-600 body-font" style={{backgroundColor: "#D9D9D9"}}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img className="w-12 h-12 text-white p-2 rounded-full" src="/AUTHENTID_Logo.svg" />
                    <span className="ml-3 text-xl">AuthentID</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 AuthentID Ltd —
                <a className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@AuthentID</a>
                </p>
            </div>
        </footer>
    )
}