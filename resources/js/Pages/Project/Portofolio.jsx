import MainLayout from "@/Layouts/MainLayout";
import {listProyek} from "/resources/js/data"
export default function Portofolio() {
    return (
        <>
        <MainLayout>
            <div className="project pb-10">
                <h1 className="text-center text-4xl font-bold">My Portofolio</h1>
                <div className="project-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {listProyek.map(proyek => (
                        <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id}>
                            <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                            <div>
                                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                                <p className="text-base/loose my-4">{proyek.desk}</p>
                                <div className="flex flex-wrap gap-2">
                                    {proyek.tools.map((tool, index) => (
                                        <p className="py-1 px-3 border border-zinc-300 rounded-md font-semibold" key={index}>{tool}</p>
                                    ))}
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
        </>
    )
}
