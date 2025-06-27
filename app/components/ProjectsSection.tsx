import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Informed AI – Real-Time Weather & Air Quality System',
							description: 'AI-powered personalized weather and air quality monitoring system.',
							metrics: {
							performance: 95,
							accessibility: 100,
							seo: 97,
							},
							techDetails: [
							'Responsive frontend with ReactJS, HTML, CSS',
							'FastAPI backend in Python with Redis caching',
							'PostgreSQL database integration',
							'Decreased crash rate by 95% with robust error handling'
							],
							image: '/informed-ai.jpg',
						},
						{
							title: 'Image Compression using CUDA',
							description: 'High-efficiency image compression leveraging GPU acceleration.',
							metrics: {
							performance: 90,
							accessibility: 96,
							seo: 92,
							},
							techDetails: [
							'Custom CUDA C/C++ compression algorithms',
							'Achieved 15:1 lossy & 4:1 lossless compression',
							'10x processing speed for large image datasets',
							'Cross-platform compatibility with Python, Java, Ruby'
							],
							image: '/cuda-acceleration.png',
						},
						{
							title: 'Aggression Detection for Alzheimer Patients',
							description: 'Smart health tool predicting patient aggression using wearable data.',
							metrics: {
							performance: 92,
							accessibility: 94,
							seo: 91,
							},
							techDetails: [
							'Achieved 92% ML model accuracy with sensor data',
							'AWS-hosted proactive help system integration',
							'Web dashboard with NodeJS, PHP, Java, Ruby',
							'Optimized for healthcare scalability & security'
							],
							image: '/Fitbit.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
