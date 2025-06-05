import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        I'm always open to new opportunities and collaborations. 
                        Feel free to reach out if you'd like to work together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-700"
                    >
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Mail className="text-blue-500" size={24} />
                                <div>
                                    <p className="font-medium text-white">Email</p>
                                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-blue-500">
                                        liantsoarandrianasimbolarivelo@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-blue-500" size={24} />
                                <div>
                                    <p className="font-medium text-white">Phone</p>
                                    <a href="tel:+261324577976" className="text-gray-300 hover:text-blue-500">
                                        + (261) - 324 577 976 
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="text-blue-500" size={24} />
                                <div>
                                    <p className="font-medium text-white">Location</p>
                                    <p className="text-gray-300">Madagascar</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        action="https://formspree.io/f/mzzdjgpp"
                        method="POST"
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-px transition-all duration-200 ease-in-out"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;