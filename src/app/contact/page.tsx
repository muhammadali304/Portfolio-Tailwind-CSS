import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact () {
    return (
        <div className="bg-black min-h-screen">

            <div className="flex flex-col md:flex-row">

                <div  className="py-6 px-2 md:px-4">
                    <div className="text-4xl md:text-5xl py-4">
                        <h1>Get in Touch</h1>
                    </div>

                    <div className="text-xl mb-20">
                        <p>Give me a line, give me a call, or give me a message by submitting this form.</p>
                    </div>

                    <div className="flex items-center mt-8 gap-2">
                        <IoIosMail size={24} /> 
                        <p>aliyousufpk304@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-4 gap-2">
                        <FaPhoneAlt size={24}/> 
                        <p>0337-6220645</p>
                    </div>
                </div>

                <form className="space-y-4 w-96">
                    <div className="flex flex-col items-start p-4">
                        <label htmlFor="name" className="text-gray-300 mb-1">Name:</label>
                        <input 
                            type="text" 
                            name="Name" 
                            id="name" 
                            className="bg-black border-2 border-gray-700 text-white p-2 w-full rounded-md"/>
                    </div>

                    <div className="flex flex-col items-start p-4">
                        <label htmlFor="email" className="text-gray-300 mb-1">Email:</label>
                        <input 
                            type="email" 
                            name="Email"
                            id="email" 
                            className="bg-black border-2 border-gray-700 text-white p-2 w-full rounded-md"/>
                    </div>

                    <div className="flex flex-col items-start p-4">
                        <label htmlFor="message" className="text-gray-300 mb-1">Message:</label>
                        <textarea 
                            name="userMessage" 
                            id="userMessage"
                            rows={4}
                            className="bg-black border-2 border-gray-700 text-white p-2 w-full rounded-md"
                        ></textarea>
                    </div>


                    <button 
                        type="submit" 
                        className="bg-orange-400 text-blacl py-2 px-4 ml-4 rounded-md hover:text-blue-600">
                        <b>Submit</b>
                    </button>

                </form>

            </div>
        </div>
    )
}