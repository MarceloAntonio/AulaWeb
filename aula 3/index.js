let PopUpOpen = false


function PopUpFunction() {
  const PopUp = document.getElementById("PopUp")

  const Mensage = document.getElementById("Text")

  switch (PopUpOpen) {
    case true:
      console.log(PopUpOpen, "Era pra ser True")
      PopUp.style.display = "none"
      Mensage.style.display = "block"
      PopUpOpen = false
      break

    case false:
      console.log(PopUpOpen, "Era pra ser false")
      PopUp.style.display = "block"
      Mensage.style.display = "none"
      PopUpOpen = true
      break
  }
}
