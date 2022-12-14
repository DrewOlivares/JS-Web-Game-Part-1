function newImage(a, b, c, d,) {
    let image = document.createElement('img')
    image.src = a
    image.style.position = 'fixed'
    image.style.left = b
    image.style.bottom = c
    document.body.append (image)
}
function newItem(a, b, c){
    let item = document.createElement('img')
item.src = a
item.position = 'fixed'
item.left = b
item.bottom = c
document.body.append(item)

item.addEventListener('dblclick', function(){
    item.remove()
})
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')


/* let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})
 */
/* let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */
