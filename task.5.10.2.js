const promoText = prompt('Введите промокод'); 
switch (promoText) {
    case 'скидка':
        alert('Промокод применен');
        break;
    case 'Скидка':
        alert('Промокод применен');
        break;
    case 'СкиДка':
        alert('Промокод применен');
        break;
        case 'СКИДКА':
        alert('Промокод применен');
        break;
        default:
            alert('Промокод не работает');
} 