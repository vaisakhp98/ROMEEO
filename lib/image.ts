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
export const deleteImage = async (name: string) => {
    await Storage.remove(name)
}

/**
 * Load image from s3
 * 
 * @param name name used to save the image 
 * 
 * @public
 */
export const loadImage = async (name: string) => {
    if(!name) return false;

    const imageKey = await Storage.get(name)
    return imageKey
}

/**
 * upload image file to s3
 * 
 * @param {File} file - file to upload to s3
 * @param {string} query - query used to generate image
 * 
 * @public
 */
export const uploadImage = (file: File, query: string) => {
    return new Promise(async (resolve, reject) => {
        if(!file) return false

        const fileName = `${uuid()}_${query}.png`
        await Storage.put(fileName, file)
    })
}