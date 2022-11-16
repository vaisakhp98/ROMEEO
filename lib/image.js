import { Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'

/**
 * Common functions for images management (S3 bucket)
 */

/**
 * delete image from s3 bucket
 * 
 * @param name name of the image
 * 
 * @public
 */
export const deleteImage = async (name) => {
    await Storage.remove(name)
}

/**
 * Load image from s3
 * 
 * @param name name used to save the image 
 * 
 * @public
 */
export const loadImage = async (name) => {
    if(!name) return false;

    const imageKey = await Storage.get(name)
    return imageKey
}

/**
 * upload image file to s3
 * 
 * @param {File} file - file to upload to s3
 * 
 * @public
 */
export const uploadImage = (file) => {
    return new Promise(async (resolve, reject) => {
        if(!file) return false

        const fileName = `${uuid()}_${file.name}.png`
        await Storage.put(fileName, file)
    })
}

export const uploadImages = (files) => {
    return new Promise(async (resolve, reject) => {
        if(files.length==0) return false
        let fileNames = []

        // generate file names and upload
        files.map(async (file) => {
            const fileName = `${uuid()}_${file.name}.png`
            fileNames.push(fileName)
            await Storage.put(fileName, file)
        })
    })
}