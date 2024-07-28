import Button from '@modules/common/components/button/index';

const AboutUs = () => {

    return (
        <div className="mt-[20px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12 mb-[30px]">
            <div className="col-span-12 md:col-span-6 xl:px-[20px] flex justify-center">
                <img className="h-[400px]" src="/img/banners/banner-team.webp" />
            </div>
            <div className="col-span-12 md:col-span-6 md:px-[50px] text-center">
                <p className="mt-5">Team Da Vinci</p>
                <h2 className="mt-6 text-2xl font-bold">Una marca que cambiará tu experiencia de compra.</h2>                
                <p className="mt-5"><strong>Nuestra misión</strong>: Proporcionar productos de alta calidad, desde alimentos frescos hasta accesorios esenciales, para satisfacer las necesidades y preferencias de tus mascotas.</p>
                <button className="p-6 mt-5 text-white rounded-md bg-[#2D2A6E]">Leer más sobre Da Vinci</button>
            </div>           
        </div>
    )
}

export default AboutUs;