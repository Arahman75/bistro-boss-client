import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='text-white'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='h-[300px] bg-[#1F2937]'>
                    <div className='py-14 px-32 flex justify-end text-center'>
                        <div>
                            <h3 className='text-2xl mb-4'>CONTACT US</h3>
                            <p className='mb-2'>123 ABS Street, Uni 21, Bangladesh</p>
                            <p className='mb-2'>+88 123456789</p>
                            <p className='mb-2'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='mb-2'>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className='h-[300px] bg-[#111827]'>
                    <div className='py-14 px-32 flex justify-start text-center'>
                        <div>
                            <h3 className='text-2xl mb-4'>Follow US</h3>
                            <p className='mb-2'>Join us on social media</p>
                            <div className="flex justify-center">
                                <p className="text-3xl mr-6"> <FaFacebookF /></p>
                                <p className="text-3xl mr-6"> <FaInstagram /></p>
                                <p className="text-3xl">  <FaTwitter /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#151515] h-12 flex items-center justify-center'>
                <p>Copyright ©{year} Md. Abdur Rahman All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;