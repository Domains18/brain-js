const net = new brain.NeuralNetwork();
const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"color":{"r":0.3986122555122642,"g":0.8438765398120109,"b":0.7521067254883096},"output":[1]},{"color":{"r":0.9695459458571327,"g":0.06784429115960955,"b":0.7311940576290361},"output":[1]},{"color":{"r":0.7277771310154559,"g":0.7531579442709784,"b":0.0626663465731383},"output":[1]},{"color":{"r":0.893821263724045,"g":0.5887111883751157,"b":0.10163407417752102},"output":[0]},{"color":{"r":0.27887163117169567,"g":0.194357207339374,"b":0.2772615181163647},"output":[1]},{"color":{"r":0.21904591431785758,"g":0.5998468284493035,"b":0.397553177715396},"output":[0]},{"color":{"r":0.23034844114209774,"g":0.12546211440429578,"b":0.8681682071876189},"output":[0]},{"color":{"r":0.06298147805864351,"g":0.46231290326531416,"b":0.23487560190064816},"output":[0]},{"color":{"r":0.6068298598474606,"g":0.45081351141775716,"b":0.14865503378591116},"output":[0]},{"color":{"r":0.5229937809126792,"g":0.9855515210108572,"b":0.7637091549945332},"output":[1]},{"color":{"r":0.26960187908085875,"g":0.6766334975569102,"b":0.20342717884479922},"output":[1]},{"color":{"r":0.17777952023367116,"g":0.5007249832828444,"b":0.7572271136823647},"output":[0]},{"color":{"r":0.29198122550094174,"g":0.9244589096924303,"b":0.3335179032130784},"output":[1]},{"color":{"r":0.3713821055616937,"g":0.4454948271022654,"b":0.5480447566763538},"output":[0]},{"color":{"r":0.8963896163021339,"g":0.937566590118954,"b":0.9365704035127353},"output":[1]},{"color":{"r":0.02330756698135561,"g":0.4379231359486335,"b":0.6384688423100637},"output":[0]},{"color":{"r":0.9560873693176819,"g":0.3989706270264035,"b":0.031701756170196216},"output":[1]},{"color":{"r":0.6097253496585158,"g":0.2332673891147412,"b":0.14556688204550294},"output":[0]}]
net.train(data);

const colorE1 = document.getElementById("color");
const guessE1 = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");
let color
setRandomColor()
whiteButton.addEventListener('click', () => { chooseColor(1) });
blackButton.addEventListener('click', () => { chooseColor(0) });
printButton.addEventListener('click', print)
function chooseColor(value) {
    data.push(({ color: color, output: [value] }))
    setRandomColor()
}
function print() {
    console.log(JSON.stringify(data))
}
function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }
    const guess = net.run(color)[0]
    for (i = 0; i < guessE1; i++){ guessE1[i].style.color > .5 ? '#fff' : '#000'}
    colorE1.style.backgroundColor = `rgba(${color.r * 255}, ${color.g*255}, ${color.b *255})`
}
