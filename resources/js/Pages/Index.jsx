import MainLayout from '@/Layouts/MainLayout'
import DataImage from "/resources/js/data.js"
import { Link } from '@inertiajs/react'
import {listTools} from "/resources/js/data"
export default function Index() {
  return (
    <>
    <MainLayout>
        {/* Home */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
            <div>
                <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
                    <img src={DataImage.HeroImage} alt="" className='w-10 rounded-md' loading='lazy' />
                    <q>Kode yang indah, lahir dari ketekunan.😁</q>
                </div>
                <h1 className='text-4xl/tight font-bold mb-6'>Hi, I'm Muhammad Afifullah</h1>
                <p className='text-base/loose mb-6 opacity-50'>
                    I build fullstack web developer using modern technologies like laravel and other frameworks.
                    I focus on delivering efficient, user-friendly solution
                </p>
                <div className='flex items-center gap-2 sm:gap-4'>
                    <a href="/public/files/CV-Muhammad Afifullah.pdf" className='bg-violet-700 sm:p-4 md:p-3 p-2 rounded-2xl hover:bg-violet-500 sm:hover:bg-violet-500'>
                        Donwload CV <i class="ri-download-2-fill ri-lg"></i>
                    </a>

                </div>
            </div>
            <img src={DataImage.HeroImage} alt="hero image" className='w-[500px] md:ml-auto rounded-xl' loading='lazy'/>
        </div>

        {/* About */}
        <div className="about mt-32 py-10 p-0">
            <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg'>
                <div className='mb-8'>
                    <h1 className='text-center text-3xl font-bold underline decoration-zinc-400'>
                        About Me
                    </h1>
                </div>
                <div>
                    <p className="text-base leading-loose text-zinc-400 block lg:hidden mb-5">
                         Hi! I'm Muhammad Afifullah, a Web Developer and Fullstack Developer from Indonesia.
                        Ispecialize in building modern, responsive, and user-friendly web applications.
                        Iprimarily use Laravel, but I'm also comfortable with other frameworks and technologies as needed.
                    </p>

                    <p className="text-base leading-loose text-zinc-400 text-justify hidden lg:block mb-8">
                        Hi! I'm Muhammad Afifullah, a Web Developer and Fullstack Developer from Indonesia.
                        I specialize in building modern, responsive, and user-friendly web applications.
                        I primarily use Laravel, but I'm also comfortable with other frameworks and technologies as needed.
                        My goal is to deliver clean, efficient, and easy-to-use solutions that help clients achieve their goals.
                        Outside of coding, I love exploring new ideas and continuously learning to improve my craft.
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1>
                            5 <span className='text-violet-500'>+</span>
                        </h1>
                        <p>project Completed</p>
                    </div>
                    <Link href="/about" className='bg-slate-500 sm:p-4 md:p-3 p-2 rounded-2xl hover:bg-slate-400'>
                        More About Me <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
            </div>
        </div>

    {/* Bahasa Pemrogramanan */}
        <div className='tools mt-32 pb-10'>
            <h1 className='text-4xl/snug font-bold mb-4 text-center'>My Tools </h1>
            <p className=' text-base/loose opacity-50 text-center'>Here are some of the tools I frequently use for web development and design.</p>
            <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>

                {listTools.map((tool) => (
                    <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group' key={tool.id}>
                    <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900'loading='lazy'/>
                <div>
                    <h1 className='font-bold'>{tool.nama}</h1>
                    <p className='opacity-50'>{tool.ket}</p>
                </div>
                </div>
                ))}
            </div>
        </div>
    </MainLayout>

    </>
  )
}


