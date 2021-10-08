export const Navbar = () => {
    return (
        <div>
            <header className="md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-right justify-between md:justify-end">
                    <nav className="md:mr-1 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700flex flex-wrap items-right text-right justify-end">
                        <a href="#projects" className="mr-5 hover:text-white">
                            About
                        </a>
                        <a href="#projects" className="mr-5 hover:text-white">
                            Projects
                        </a>
                        <a href="#skills" className="mr-5 hover:text-white">
                            Contact
                        </a>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Resume
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    )
}
