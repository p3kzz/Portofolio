import MainLayout from "@/Layouts/MainLayout"

function handleDownload() {
  const link = document.createElement('a');
  link.href = '/files/CV.pdf';
  link.download = 'My_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export default function About() {
  return (

    <>
      <MainLayout>
        {/* Personal Info */}
        <div className="lg:w-3/4 w-full mx-auto p-5 sm:p-7 bg-zinc-700 rounded-2xl">
          <div className="about flex-1">
            <div>
              <h1 className="text-center text-4xl font-bold mb-12 mt-8">
                PERSONAL <span className="text-green-300">INFO</span>
              </h1>
            </div>

            {/* Perbaikan pada grid Personal Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-start"> {/* Tambahkan items-start untuk aligment */}
              {/* Bagian Info Detail */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p>
                      Name : <span className="font-semibold text-gray-300">Muhammad Afiullah</span>
                    </p>
                    <p>
                      Age : <span className="font-semibold text-gray-300">20 Years</span>
                    </p>
                    <p>
                      Nationality : <span className="font-semibold text-gray-300">Indonesia</span>
                    </p>
                    <p>
                      Address : <span className="font-semibold text-gray-300">Sumenep, East Java</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>
                      Phone : <span className="font-semibold text-gray-300">+6285 184 882 985</span>
                    </p>
                    <p>
                      Email : <span className="font-semibold text-gray-300">muhafifullah27@gmail.com</span>
                    </p>
                    <p>
                      Language : <span className="font-semibold text-gray-300">Indonesian</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={handleDownload} className="flex items-center gap-3 px-6 py-2 rounded-full border border-teal-400 text-teal-300 hover:bg-teal-500 hover:text-white transition-colors duration-300">
                    <span className="font-semibold text-lg">Download CV</span>
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-500 text-white hover:bg-white hover:text-teal-500 transition-colors duration-300">
                      <i className="ri-download-2-fill"></i>
                    </span>
                  </button>
                </div>
              </div>

              {/* Bagian Statistik (Years Experience, Projects Done, Certificates) */}
              {/* Sesuaikan grid dan ukuran kotak untuk tampilan lebih responsif */}
              <div className="grid grid-cols-2 gap-4 auto-rows-fr"> {/* Menggunakan auto-rows-fr untuk tinggi yang sama */}
                <div className="border border-teal-400 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-teal-300 bg-zinc-800 hover:bg-teal-500 hover:text-white transition h-full"> {/* h-full untuk mengisi tinggi */}
                  <h1 className="text-3xl font-bold">1<span className="text-xl">+</span></h1>
                  <p className="mt-2 text-sm text-gray-400 text-center">Years Experience</p>
                </div>
                <div className="border border-teal-400 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-teal-300 bg-zinc-800 hover:bg-teal-500 hover:text-white transition h-full">
                  <h1 className="text-3xl font-bold">6<span className="text-xl">+</span></h1>
                  <p className="mt-2 text-sm text-gray-400 text-center">Projects Done</p>
                </div>
                {/* Buat kotak certificates menjadi satu baris penuh jika layout menjadi 1 kolom di layar kecil */}
                <div className="col-span-2 border border-teal-400 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-teal-300 bg-zinc-800 hover:bg-teal-500 hover:text-white transition h-full">
                  <h1 className="text-3xl font-bold">10<span className="text-xl">+</span></h1>
                  <p className="mt-2 text-sm text-gray-400 text-center">Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-400">
            --------------------------------
        </div>

        {/* Experience and Education */}
        <div className="max-w-7xl mx-auto px-6 py-7">
            <h2 className="text-center text-4xl font-semibold mb-11"> {/* Tambahkan mb-11 agar ada jarak bawah */}
                EXPERIENCE & EDUCATION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {/* Experience */}
                <div className="space-y-12">
                    <div className="flex space-x-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i className="ri-briefcase-fill ri-lg"></i>
                            </div>
                            <div className="w-px bg-zinc-300 flex-1 mt-2"></div>
                        </div>
                        <div>
                            <div className="inline-block bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mb-2 select-none">
                            February 2025 - May 2025
                            </div>
                            <h3 className="text-gray-200 font-semibold text-base leading-tight"> {/* Ganti text-gray-600 menjadi text-gray-200 agar terlihat di dark mode */}
                            DATA SCIENCE <span className="font-normal text-gray-400">— VINIX7</span>
                            </h3>
                            <p className="text-gray-300 mt-1 max-w-full md:max-w-lg leading-relaxed"> {/* Ganti text-gray-600 menjadi text-gray-300 */}
                            Positioned as a intership junior data science at vinix7
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i className="ri-briefcase-fill ri-lg"></i>
                            </div>
                            <div className="w-px bg-zinc-300 flex-1 mt-2"></div>
                        </div>
                        <div>
                            <div className="inline-block bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mb-2 select-none">
                            October 2021 - November 2021
                            </div>
                            <h3 className="text-gray-200 font-semibold text-base leading-tight">
                            INTERN <span className="font-normal text-gray-400">— DUKCAPIL SUMENEP</span>
                            </h3>
                            <p className="text-gray-300 mt-1 max-w-full md:max-w-lg leading-relaxed">
                            Assisted in creating administrative letters, performing population data entry, and serving resident document requests.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i className="ri-briefcase-fill ri-lg"></i>
                            </div>
                            <div className="w-px bg-zinc-300 flex-1 mt-2"></div>
                        </div>
                        <div>
                            <div className="inline-block bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mb-2 select-none">
                            July 2022 - August 2022
                            </div>
                            <h3 className="text-gray-200 font-semibold text-base leading-tight">
                            INTERN <span className="font-normal text-gray-400">— SUMENEP LOCAL GOVERNMENT</span>
                            </h3>
                            <p className="text-gray-300 mt-1 max-w-full md:max-w-lg leading-relaxed">
                            Assisted in entering guest data, scanning documents, and supporting general office administration tasks.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className="space-y-12">
                    <div className="flex space-x-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i className="ri-graduation-cap-fill ri-lg"></i>
                            </div>
                            <div className="bg-zinc-300 w-px flex-1 mt-2"></div>
                        </div>
                        <div>
                            <div className="inline-block bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mb-2 select-none">
                                2025 <span className="text-green-600">- present</span>
                            </div>
                            <h3 className="text-gray-200 font-semibold text-base leading-tight">
                                BACHELOR OF INFORMATICS <span>— UNIBA MADURA</span>
                            </h3>
                            <p className="text-gray-300 mt-1 max-w-full md:max-w-lg leading-relaxed">
                                Expected Graduation 2027
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i className="ri-graduation-cap-fill ri-lg"></i>
                            </div>
                            <div className="bg-zinc-300 w-px flex-1 mt-2"></div>
                        </div>
                        <div>
                            <div className="inline-block bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mb-2 select-none">
                                2020 <span>- 2023</span>
                            </div>
                            <h3 className="text-gray-200 font-semibold text-base leading-tight">
                                Major in Software Engineering <span>— SMK NEGERI 1 SUMENEP</span>
                            </h3>
                            <p className="text-gray-300 mt-1 max-w-full md:max-w-lg leading-relaxed">
                                Focused on programming and databases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </MainLayout>
    </>
  )
}
