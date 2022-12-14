function newImage(a, b, c, d,) {
    let image = document.createElement('img')
    image.src = a
    image.style.position = 'fixed'
    image.style.left = b
    image.style.bottom = c
    document.body.append (image)
}
/* let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
