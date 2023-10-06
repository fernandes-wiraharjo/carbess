import './StepToBuyBanner.css';
import Banner from '/images/banners/banner.jpg';

export default function StepToBuyBanner() {
    return (
        <section className='StepToBuyBanner'>
            <a href="/car-list">
                <article className='article'>
                    <picture className='image'>
                        <source media="(min-width: 0px)" srcSet={Banner} />
                        <img src={Banner} alt="step to buy banner" width='100%' height='100%' />
                    </picture>
                    <h1 className='header'>LANGKAH PEMESANAN</h1>
                    <h1 className='contentHeader'>Pelayanan Terbaik Untuk Anda.</h1>
                    <h1 className='contentSubheader'>Mudah, Cepat, dan Praktis!</h1>
                    <div className='boxContent1'>1</div>
                    <h4 className='content1'>Tentukan mobil bekas pilihan Anda</h4>
                    <label className='subContent1'>
                        Kami memiliki semua informasi yang<br></br>dibutuhkan termasuk gambar dan harga!
                    </label>
                    <div className='boxContent2'>2</div>
                    <h4 className='content2'>Hubungi Kami</h4>
                    <label className='subContent2'>
                        Anda dapat menghubungi kami<br></br>setelah mendapatkan produk terbaik!
                    </label>
                    <div className='boxContent3'>3</div>
                    <h4 className='content3'>It's A Deal!</h4>
                    <label className='subContent3'>
                        Tetapkan pilihan, selesaikan proses<br></br>transaksi dan nantikan mobil idaman<br></br>Anda tiba!
                    </label>
                    <hr className='line'/>
                    <button className='btn'>Lihat Semua Mobil</button>
                    <div className='brandIcon1'>
                        <img src="/icon/toyota.png" alt="toyota icon" width='100%' />
                    </div>
                    <div className='brandIcon2'>
                        <img src="/icon/daihatsu.png" alt="daihatsu icon" width='100%' />
                    </div>
                    <div className='brandIcon3'>
                        <img src="/icon/honda.png" alt="honda icon" width='100%' />
                    </div>
                    <div className='brandIcon4'>
                        <img src="/icon/nissan.png" alt="nissan icon" width='100%' />
                    </div>
                    <div className='brandIcon5'>
                        <img src="/icon/dfsk.png" alt="dfsk icon" width='100%' />
                    </div>
                    <div className='brandIcon6'>
                        <img src="/icon/mitsubishi.png" alt="mitsubishi icon" width='100%' />
                    </div>
                    <div className='brandIcon7'>
                        <img src="/icon/suzuki.png" alt="suzuki icon" width='100%' />
                    </div>
                    <div className='brandIcon8'>
                        <img src="/icon/wuling.png" alt="wuling icon" width='100%' />
                    </div>
                </article>
            </a>
        </section>
    );
}
