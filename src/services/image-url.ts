import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string, width:number=600, length:number=400) => {

    if(!url) return noImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;

    const newUrl = url.slice(0, index)+ `crop/${width}/${length}/`+ url.slice(index);

    return newUrl;
}


export default getCroppedImageUrl;