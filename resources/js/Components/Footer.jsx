const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">

        <p className="text-sm opacity-60">
          &copy; 2025 Muhammad Afifullah. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="https://github.com/p3kzz" className="hover:text-teal-400 transition">
            <i className="ri-github-fill ri-lg"></i>
          </a>
          <a href="https://www.instagram.com/pekz_a" className="hover:text-teal-400 transition">
            <i className="ri-instagram-line ri-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/muh-afifullah/" className="hover:text-teal-400 transition">
            <i className="ri-linkedin-box-fill ri-lg"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
