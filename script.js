fetch('https://api.imgflip.com/get_memes')
.then(info=>info.json())
.then(memedata=>{
    var x=Math.floor((Math.random() * 100) + 1);
    const memeimg= memedata.data.memes[x].name;
    const imagelement=document.getElementById('memeElement');
    
    imagelement.innerHTML=memeimg;
   var img=new Image();
   img.src=memedata.data.memes[x].url;
   img.width="250";
   img.height="250";
   document.getElementById('body').appendChild(img);
})

