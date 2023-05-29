export const validFiles = (files?:any[]) => {
    const validFiles = ['jpg', 'png', 'pdf', 'jpeg'];
    return files?.every(file => {
        const filetype: string = file?.name?.split('.').pop();
        return validFiles.includes(filetype);
    })
    
}

export const getSource = (file: any) => {

    console.log("file", file)
   return  URL.createObjectURL(file);
}