function Footer() {
    return (  
        <>
            <footer className="bg-[#004D66] text-white py-8 mt-[40px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h1 className="text-2xl font-bold">PowerWise</h1>
                        <p className="text-sm mt-2">
                        Soluções inovadoras para um futuro mais sustentável.
                        </p>
                    </div>
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com" target="_blank"><img className="w-8" src="/Imagens/imagens-footer/Facebook.png"/></a>
                    <a href="https://www.instagram.com" target="_blank"><img className="w-8" src="/Imagens/imagens-footer/Instagram.png"/></a>
                    <a href="https://www.tiktok.com" target="_blank"><img className="w-8" src="/Imagens/imagens-footer/TikTok.png"/></a>
                </div>
                </div>
                <hr className="border-white my-6" />
                <div className="text-center text-sm">
                    <p>© {new Date().getFullYear()} PowerWise. Todos os direitos reservados.</p>
                </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;