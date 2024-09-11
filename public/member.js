function toggleCard(cardElement) {
    const cardSecond = cardElement.querySelector('.card-second')

    if (cardSecond.style.display === 'none' || cardSecond.style.display === '') {
        cardSecond.style.display === 'block'
        console.log("Card clicked")
    } else {
        cardSecond.style.display === 'none'
    }
}