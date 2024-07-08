import React from 'react'

export default function Form() {
  return (
    <div>
        <div
            className="grid md:grid-cols-2  gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px]  before:h-full max-md:before:hidden">
            <div>
                
                <form>
                    <div className="space-y-4 mt-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <labe  className="mb-2 text-base block">NOM ET PRENOM</labe>
                                <input type='text' placeholder='NOM ET PRENOM'
                                className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]" />
                            </div>
                            <div>
                                <labe className="mb-2 text-base block">EMAIL</labe>
                                <input type='text' placeholder='EMAIL'
                                className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <labe className="mb-2 text-base block">TELEPHONE</labe>
                                <input type='text' placeholder='TELEPHONE'
                                className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]" />
                            </div>
                            <div>
                                <labe className="mb-2 text-base block">PROJET</labe>
                                <input type='text' placeholder='PROJET'
                                className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]" />
                            </div>
                        </div>
                        
                        <textarea rows={10} placeholder="Write Message"
                            className="px-2 pt-3 rounded-md   bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#0B4F48] outline-none"></textarea>
                    </div>

                    <button type="button"
                        className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#0B4F48] hover:bg-[#0B3F48] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                            viewBox="0 0 548.244 548.244">
                            <path fill-rule="evenodd"
                                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        Send Message
                    </button>
                </form>

                
            </div>
            <div className="z-10 relative h-full max-md:min-h-[350px]">
                <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=RJ8V+VMX,%20Av.%20Hedi%20Nouira,%20Sousse+(COGEB)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
  )
}
