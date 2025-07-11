import MainLayout from "@/Layouts/MainLayout";

export default function contact(){
    return (
        <>
        <MainLayout>
            <div className="contact">
                <h1 className="text-4xl font-bold text-center">
                    Contact <span className="text-teal-400">Me</span>
                </h1>
                <p className="text-base/loose mb-10 opacity-50 text-center">Lets be connect</p>
                 <form action="https://formsubmit.co/muhafifullah27@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Nama Lengkap</label>
                            <input type="text" name="nama" placeholder="Masukkan nama lengkap" className="bg-transparent border border-zinc-500 p-2 rounded-md focus:ring-0 focus:border-white" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Email</label>
                            <input type="email" name="email" placeholder="Masukkan Email" className="bg-transparent border border-zinc-500 p-2 rounded-md focus:ring-0 focus:border-white" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pesan" className="font-semibold">pesan</label>
                            <textarea name="pesan" id="pesan" cols="45" rows="10" placeholder="masukkan pesan anda" className="bg-transparent border border-zinc-500 p-2 rounded-md focus:ring-0 focus:border-white" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-500 hover:bg-violet-600">Kirim Pesan</button>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
        </>
    )
}
