function Card () {
const producto = {
    precio: 1500,
    nombre: "mascara con filtro",
    descripcion: "bifiltro",
};

return (
<div>
<h3>{producto.nombre}</h3>
<br />
<h3>$ {producto.nombre}</h3>
</div>
);

}

export default Card;