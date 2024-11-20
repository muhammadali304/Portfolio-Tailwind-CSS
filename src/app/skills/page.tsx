
export default function Skills () {
    return (
        <div className="bg-black min-h-screen">

            <div className="flex flex-col md:flex-row">

                <div className="w-full md:w-1/2">

                    <div className="flex items-center justify-center text-3xl md:text-5xl p-6 ">
                        <h1>Technologies I work with</h1>
                    </div>

                    <div className="flex items-center justify-around p-4">
                        <p>I have a solid foundation in Web Developement, specialing in HTML, CSS and Javascript. My Experience extends to using framework like React and Next.js to create dynamic and user-friendly applications. I&aposm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute efficiently to projects.</p>
                    </div>
                
                </div>

                <div className="flex items-center justify-center w-full md:w-1/2 gap-12 md:gap-32 text-3xl md:text-4xl text-green-600">
                    <div className="flex items-center justify-center w-1/2 md:w-1/4">
                        <p>Next.js <br />Typescript <br />React.js</p>
                    </div>

                    <div className="flex items-center justify-center w-1/2 md:w-1/4">
                        <p>Tailwind <br />CSS <br />Node.js</p>
                    </div>
                </div>

            </div>

            <div className="flex w-1/2"></div>

        </div>
    )
}