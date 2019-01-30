let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=41567ac68a2b51c0b6420503f09aa6ec&gallery_id=66911286-72157647277042064&page=&format=json&nojsoncallback=1",
};
  
$.ajax(settings).done(function (data) {
    // verifica se deu tudo certo
    if (data.stat != 'ok') alert('Não foi possível obter as imagens');
    // limita o n de imagens para 6
    if (data.photos.photo.length > 6) data.photos.photo.length = 6;
    // desestrutura variavel photos
    let {photos:{photo: photos}} = data;

    photos
    // gera Images
    .map(photo => {
        let img = new Image;
        img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return img;
    })
    // Insere na galeria
    .forEach(img => $('.galeria').append(img));
});