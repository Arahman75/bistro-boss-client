import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <div className='mb-12'>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu img"
                strength={-200}
            >
                <div>
                    <div className="hero h-[600px]">
                        <div className="hero-content text-center text-neutral-content bg-[#15151599] py-[60px] px-[120px]">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>



    );
};

export default Cover;