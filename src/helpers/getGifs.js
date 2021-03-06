export const getGif = async(category) => {
    const giftCuantity = 10;
    const url  = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${ giftCuantity }&api_key=sgatASouL6QA0OloiTwxS5gAVHGXDGET`;
    const anwer = await fetch(url);
    const { data } = await anwer.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}