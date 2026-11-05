import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center py-32">
      <div className="container-site text-center">
        <p className="label">404</p>
        <h1 className="h1 mt-4">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-6 max-w-md text-lg">Halaman yang Anda cari mungkin sudah dipindahkan. Kembali ke beranda untuk melanjutkan.</p>
        <Link href="/" className="btn btn-primary mt-10 inline-flex">Kembali ke Beranda</Link>
      </div>
    </section>
  );
}
