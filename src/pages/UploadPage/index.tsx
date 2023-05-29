import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getSource, validFiles } from './utils'
import { spawn } from 'child_process'


const UploadPage = () => {
    
    const [state, setState] = useState('');
    const [files, setFiles] = useState<any[]>([]);
    const [err, setErr] = useState('');


    const uploadFiles = () => {

    }

    return (
        <>
        <Header />
         <div className='p-4 h-[700px] flex items-center justify-center flex-col'> 
            <Dropzone
                onDragOver={() => {
                    setState('over')
                }}
                onDragLeave={() => {
                    setState('leave')
                }}
                onDrop={acceptedFiles => {
                    if(!acceptedFiles?.length) return

                    if(validFiles(acceptedFiles)) {
                        setFiles(acceptedFiles)
                        setErr('')
                    } else{
                        setFiles([])
                        setErr('Invalid files')
                    }
                    
                }}
            >
                {({getRootProps, getInputProps}) => {

                    const clsHover = state === 'over' ? 'opacity-50' : ''

                    return (
                        <section className={`h-[300px] w-[600px] p-4 border-dashed border-2 border-gray-400 bg-blue-100 rounded-lg ${clsHover}`}>
                        <div {...getRootProps()} className='h-full w-full'>
                            <input {...getInputProps()} className='w-0 h-0 absolute'/>
                            <div className='w-full h-full flex flex-col items-center justify-center'>
                                <span className='text-[40px] text-blue-500'><i className='fas fa-upload'></i></span>
                                <p className='text-[20px] font-thin'>Drag & Drop files here</p>
                                <span>Or</span>
                                <div className='w-[200px] p-3 border-blue-400 border text-center mt-6 rounded-lg'>
                                    Browse Files
                                </div>
                                <div className='font-thin text-sm mt-6'>
                                    <span>Accepted files "jpg, png, pdf, jpeg"</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    )
                }}
            </Dropzone>
            <div className='w-full max-w-[600px] mt-6 p-4 border-gray-300 border rounded-lg'>
                
                {!files?.length ? (<span>No files selected!</span>) : 
                    (
                        <div className='flex flex-row gap-2'>
                            {
                                files?.map(file => {

                                    const fileType = file?.name?.split('.').pop();
            
                                    if(fileType === 'pdf') {
                                        return (
                                            <div>pdfg</div>
                                        )
                                    }
            
                                    return (
                                        <div className='cursor-pointer hover:opacity-50'>
                                            <img src={getSource(file)} alt="this is an image" className='w-[100px] h-[100px] object-cover rounded-lg' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                <button 
                onClick={() => {
                    uploadFiles()
                }} className='w-full p-3 bg-blue-400 mt-9 rounded-lg text-[#f1faff] font-bold'>Upload Files</button>
            </div>
         </div>
        <Footer />
        </>
    )
}

export default UploadPage