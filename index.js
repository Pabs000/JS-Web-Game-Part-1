//making new changes so that the functions will be able to run the character and the pine tree.'

function newImage(url, left, bottom_)

{
    let object = document.createElement('img')
    object.src = url
    object.style.position ='fixed'
    object style left = left + 'px'
    object .style.bottom = bottom + 'px'
    document.body.append(object)
    return object 
}

// creatine the function for the item. 

function newItem(url , left, bottom) 
{
let object = newImage (url, left, bottom)


//event listener add on copied from solution code because I needed some help.

object.addEventListener('dblclick', ()=>{
    object,remove()
})
}

//Include all images.
newImage('assets/green-character.gif, 100, 100')
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)