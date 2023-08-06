import React from "react";

const CatalogItem = ({ item }) => {
  const formattedPrice = item.price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  const formattedDescription = item.description
    .split('<br/>')
    .map(line => ` ${line}`)
    .join('\n');

  const formattedWspMessage = encodeURIComponent(
    `Hola, quiero comprar un ${item.name} con las siguientes características:\n${formattedDescription}`
  );

  return (
    <div class="catalog__col">
      <div class="catalog__card card">
        <div class="card__image">
<img src={require(`../../assets/Productos/${item.imageFileName}`)} alt={item.name}/>
        </div>
        <div class="card__body">
          <div class="card__title">{item.name}</div>
          <div class="shopline"></div>
          <div class="card__text">
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
          <div class="card__bottom">
            <div class="card__cost">{formattedPrice}</div>
            <div class="card__button button">
              <a
                href={`https://api.whatsapp.com/send?phone=+56936681029&text=${formattedWspMessage}`}
              >
                Solicitar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
