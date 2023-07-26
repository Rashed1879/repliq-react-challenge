import heroBg from '../../assets/hero-bg.jpg';
import img1 from '../../assets/landingImg1.jpg';
import img2 from '../../assets/landingImg2.jpg';

const Home = () => {
	return (
		<div>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url(${heroBg})`,
				}}
			>
				<div className="hero-overlay bg-opacity-20"></div>
				<div className="hero-content text-center text-neutral-focus">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-outline">Get Started</button>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-28 px-10">
				<div>
					<img className="w-full" src={img1} alt="" />
				</div>
				<div>
					<h3 className="text-4xl font-bold text-neutral-focus mb-5">
						Life Changing Gadgets
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, quibusdam esse iure nemo officiis animi.
						Unde dicta temporibus, animi possimus voluptas dolores
						expedita necessitatibus cupiditate asperiores et quo,
						nostrum deserunt.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-20 px-10">
				<div>
					<h3 className="text-4xl font-bold text-neutral-focus mb-5">
						Life Changing Gadgets
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, quibusdam esse iure nemo officiis animi.
						Unde dicta temporibus, animi possimus voluptas dolores
						expedita necessitatibus cupiditate asperiores et quo,
						nostrum deserunt.
					</p>
				</div>
				<div>
					<img className="w-full" src={img2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
