import React from "react";

const Timeline = () => {
    return (
        <div className=" w-full flex justify-center items-center mt-16 shadow-lg">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {/* Stack 1 */}
            <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-semibold pt-2 pb-5">
                Masa Prasejarah
                </h1>
                <h3 className="text-white pb-2 font-medium">
                Perkembangan Kebudayaan (Abad ke-1 hingga ke-8 M)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Pada periode ini, Bali mulai dihuni oleh penduduk asli Bali yang
                mengembangkan kebudayaan dan sistem pertanian yang khas.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Situs Arkeologi (Abad ke-8 hingga ke-14 M)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Beberapa situs arkeologi menunjukkan keberadaan komunitas
                prasejarah pada masa ini.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Pendudukan Asing (Abad ke-1 hingga ke-8 M)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Bali mengalami interaksi dengan berbagai peradaban asing, termasuk
                India dan Tiongkok, yang memengaruhi perkembangan kebudayaan dan
                sistem agama di pulau ini.
                </p>
            </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
                1
            </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            {/* Stack 2 */}
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
                2
            </div>
            </div>
            <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-semibold pt-2 pb-5">
                Masa Kerajaan
                </h1>
                <h3 className="text-white pb-2 font-medium">
                Kerajaan-kerajaan Bali (Abad ke-10 hingga ke-13 M)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Pada masa ini, Bali memiliki beberapa kerajaan terkenal seperti
                Kerajaan Warmadewa dan Kerajaan Majapahit. Seni, sastra, dan
                arsitektur berkembang pesat.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Kemajuan Seni dan Kebudayaan (Abad ke-10 hingga ke-13 M)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Beberapa situs arkeologi menunjukkan keberadaan komunitas
                prasejarah pada masa ini.Pada abad ke-10 hingga ke-13, Bali
                mencapai puncak kejayaan seni tari, seni rupa, dan arsitektur
                candi. Tarian seperti Ramayana dan Mahabharata mengalami
                perkembangan signifikan.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Konflik dan Perpecahan (Abad ke-17 M)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Pada abad ke-17, Bali mengalami konflik internal dan perpecahan
                politik yang mengakibatkan terbaginya pulau ini menjadi banyak
                kerajaan kecil yang bersaing satu sama lain.
                </p>
            </div>
            </div>

            {/* Stack 3 */}
            <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-semibold pt-2 pb-5">
                Masa Penjajahan
                </h1>
                <h3 className="text-white pb-2 font-medium">
                Penjajahan Belanda (1906)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                elanda berhasil menjajah Bali setelah perang Puputan Badung pada tahun ini.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Perlawanan Terhadap Penjajah (1946-1949)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Bali berperan dalam perjuangan kemerdekaan Indonesia dengan perlawanan terhadap Belanda selama Perang Kemerdekaan Indonesia.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Kemerdekaan Indonesia (1945)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Setelah kemerdekaan Indonesia pada tahun ini, Bali menjadi bagian dari Republik Indonesia.
                </p>
            </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
                3
            </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            {/* Stack 4 */}
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
                4
            </div>
            </div>
            <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-2 md:pl-4">
                <h1 className="text-white text-xl font-semibold pt-2 pb-5">
                Masa Modern
                </h1>
                <h3 className="text-white pb-2 font-medium">
                Pariwisata (1970-an)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Pada tahun 1970-an, Bali mulai menjadi destinasi pariwisata terkenal di dunia.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Serangan Teroris (2002 dan 2005)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Bali mengalami serangan teroris pada tahun 2002 dan 2005, yang memengaruhi industri pariwisata.
                </p>

                <h3 className="text-white pb-2 pt-4 font-medium">
                Perkembangan Ekonomi dan Budaya (2000-an hingga sekarang)
                </h3>
                <p className="text-gray-100 sm:text-sm text-xs">
                Bali terus berkembang dalam berbagai sektor, termasuk ekonomi, seni, dan budaya, dengan budaya Bali yang terus berkembang dan dihargai secara global.
                </p>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Timeline;
